import React from "react";

import { Button } from "@/components/ui/button";

const PaymentButton = () => {
	// TODO: get the subscription plan
	// TODO: Loading state
	return (
		<Button className="bg-gradient-to-br text-white rounded-full from-[#9685DB] via-[#9434E6] font-bold to-[#CC3BD4]">
			Upgrade
		</Button>
	);
};

export default PaymentButton;
