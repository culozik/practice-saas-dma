import { v4 as uuidv4 } from "uuid";

import {
	AutomationDuoToneWhite,
	HomeDuoToneWhite,
	RocketDuoToneWhite,
	SettingsDuoToneWhite,
} from "@/icons";

type FieldProps = {
	label: string;
	id: string;
};

type SideBarProps = {
	icon: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU: SideBarProps[] = [
	{ id: uuidv4(), label: "home", icon: <HomeDuoToneWhite /> },
	{ id: uuidv4(), label: "automations", icon: <AutomationDuoToneWhite /> },
	{
		id: uuidv4(),
		label: "integrations",
		icon: <RocketDuoToneWhite />,
	},
	{
		id: uuidv4(),
		label: "settings",
		icon: <SettingsDuoToneWhite />,
	},
];
