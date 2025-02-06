import React from "react";

import Loader from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { AutomationDuoToneWhite } from "@/icons";

const CreateAutomation = () => {
	// TODO: Create the automation in the database using mutate
	return (
		<Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]">
			<Loader state={false}>
				<AutomationDuoToneWhite />
				<p className="lg:inline hidden">Create an Automation</p>
			</Loader>
		</Button>
	);
};

export default CreateAutomation;
