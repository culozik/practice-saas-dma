"use server";

import { onCurrentUser } from "../user";
import {
	createAutomation,
	findAutomation,
	getAutomations,
	updateAutomation,
} from "./queries";

export const createAutomations = async (id?: string) => {
	const user = await onCurrentUser();

	try {
		const create = await createAutomation(user.id, id);

		if (create) {
			return { status: 200, data: "Automation created" };
		}

		return { status: 404, data: "Failed to create automation" };
	} catch (error) {
		console.log(error);
		return { status: 500, data: "Internal server error" };
	}
};

export const getAllAutomations = async () => {
	const user = await onCurrentUser();

	try {
		const automations = await getAutomations(user.id);

		if (automations) {
			return { status: 200, data: automations.automations };
		}

		return { status: 404, data: [] };
	} catch (error) {
		console.log(error);
		return { status: 500, data: [] };
	}
};

export const getAutomationInfo = async (id: string) => {
	await onCurrentUser();

	try {
		const automation = await findAutomation(id);
		if (automation) {
			return { status: 200, data: automation };
		}
		return { status: 404, data: null };
	} catch (error) {
		console.log("🚀 ~ error:", error);
		return { status: 500, data: null };
	}
};

export async function generateMetadata({ params }: { params: { id: string } }) {
	const info = await getAutomationInfo(params.id);

	return { title: info.data?.name };
}

export const updateAutomationName = async (
	automationId: string,
	data: {
		name?: string;
		active?: boolean;
		automation?: string;
	}
) => {
	await onCurrentUser();
	try {
		const update = await updateAutomation(automationId, data);

		if (update) {
			return { status: 200, data: "Automation successfully updated." };
		}

		return { status: 404, data: "Oops! Failed to update automation." };
	} catch (error) {
		console.log("🚀 ~ error:", error);
		return { status: 500, data: "Oops! Something went wrong." };
	}
};
