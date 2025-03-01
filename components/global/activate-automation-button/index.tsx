import React from "react";

import { Button } from "@/components/ui/button";
import Loader from "@/components/global/loader";
import { ActiveAutomation } from "@/icons/active-automation";

const ActivateAutomationButton = () => {
	// TODO:
	// 1. Setup optimistic UI
	// 2. Fetch some automation data

	return (
		<Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-2">
			{/* TODO: Set loading state */}
			<Loader state={false}>
				<ActiveAutomation />
				<p className="hidden lg:inline-block ">Activate</p>
			</Loader>
		</Button>
	);
};

export default ActivateAutomationButton;
