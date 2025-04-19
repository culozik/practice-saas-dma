import { v4 } from "uuid";

import { PlaneBlue, SmartAi, TinyInstagram } from "@/icons";

export type AutomationTriggerProps = {
	id: string;
	label: string;
	icon: React.ReactNode | React.JSX.Element;
	description: string;
	type: "COMMENT" | "DM";
};

export type AutomationListenerProps = {
	id: string;
	label: string;
	icon: React.ReactNode | React.JSX.Element;
	description: string;
	type: "SMARTAI" | "MESSAGE";
};

export const AUTOMATION_TRIGGERS: AutomationTriggerProps[] = [
	{
		id: v4(),
		label: "User comments on my post",
		icon: <TinyInstagram />,
		description: "Select if you want to automate comments on your post",
		type: "COMMENT",
	},
	{
		id: v4(),
		label: "When a user sends me a DM with a keyword",
		icon: <TinyInstagram />,
		description: "Select if you want to automate DMs on your profile",
		type: "DM",
	},
];

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
	{
		id: v4(),
		label: "Send the user a message",
		icon: <PlaneBlue />,
		description: "Enter the message you want to send to the user",
		type: "MESSAGE",
	},
	{
		id: v4(),
		label: "Let Smart AI take over",
		icon: <SmartAi />,
		description: "Tell AI about your project. (Upgrade to use this feature)",
		type: "SMARTAI",
	},
];
