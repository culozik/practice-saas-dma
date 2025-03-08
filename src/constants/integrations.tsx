import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons";

type Props = {
	title: string;
	icon: React.ReactNode;
	description: string;
	strategy: "INSTAGRAM" | "CRM";
};

export const INTEGRATION_CARDS: Props[] = [
	{
		title: "Connect Instagram",
		description: "Connect your Instagram account to view your insights",
		icon: <InstagramDuoToneBlue />,
		strategy: "INSTAGRAM",
	},
	{
		title: "Connect Salesforce",
		description: "Connect your Salesforce account to view your insights",
		icon: <SalesForceDuoToneBlue />,
		strategy: "CRM",
	},
];
