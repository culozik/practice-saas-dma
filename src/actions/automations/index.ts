"use server";

import { onCurrentUser } from "../user";
import { createAutomation, getAutomations } from "./queries";

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
