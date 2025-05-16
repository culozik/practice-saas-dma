"use server";

import { onCurrentUser } from "../user";
import { findUser } from "../user/queries";
import {
	addKeyword,
	addListener,
	addTrigger,
	createAutomation,
	deleteKeywordQuery,
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

export const saveListener = async (
	automationId: string,
	listener: "SMARTAI" | "MESSAGE",
	prompt: string,
	reply?: string
) => {
	await onCurrentUser();

	try {
		const created = await addListener(automationId, listener, prompt, reply);

		if (created) {
			return { status: 200, data: "Listener successfully created." };
		}

		return { status: 400, data: "Oops! Failed to create listener." };
	} catch (error) {
		console.log("🚀 ~ error:", error);
		return { status: 500, data: "Oops! Something went wrong." };
	}
};

export const saveTrigger = async (automationId: string, trigger: string[]) => {
	await onCurrentUser();

	try {
		const create = await addTrigger(automationId, trigger);

		if (create) {
			return { status: 200, data: "Trigger successfully created." };
		}
		return { status: 400, data: "Oops! Failed to create trigger." };
	} catch (error) {
		console.log("🚀 ~ error:", error);
		return { status: 500, data: "Oops! Something went wrong." };
	}
};

export const saveKeyword = async (automationId: string, keyword: string) => {
	await onCurrentUser();

	try {
		const create = await addKeyword(automationId, keyword);

		if (create) {
			return { status: 200, data: "Keyword successfully created." };
		}
		return { status: 400, data: "Oops! Failed to create keyword." };
	} catch (error) {
		console.log("🚀 ~ error:", error);
		return { status: 500, data: "Oops! Something went wrong." };
	}
};

export const deleteKeyword = async (id: string) => {
	await onCurrentUser();

	try {
		const deleted = await deleteKeywordQuery(id);

		if (deleted) {
			return { status: 200, data: "Keyword successfully deleted." };
		}
		return { status: 400, data: "Oops! Failed to delete keyword." };
	} catch (error) {
		console.log("🚀 ~ error:", error);
		return { status: 500, data: "Oops! Something went wrong." };
	}
};

export const getProfilePosts = async () => {
	const user = await onCurrentUser();

	try {
		const profile = await findUser(user.id);
		const posts = await fetch(
			`${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`
		);
		const parsed = await posts.json();
		if (parsed) {
			return { status: 200, data: parsed };
		}

		return { status: 404, data: [] };
	} catch (error) {
		console.log("server side Error in getting posts:", error);
		return { status: 500, data: [] };
	}
};
