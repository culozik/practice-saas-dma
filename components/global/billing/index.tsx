import React from "react";

import PaymentCard from "@/components/global/billing/PaymentCard";

const Billing = () => {
	// TODO: Fetch billing information for the customer
	return (
		<div className="flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container justify-center">
			<PaymentCard current={"FREE"} label={"FREE"} />
			<PaymentCard current={"FREE"} label={"PRO"} />
		</div>
	);
};

export default Billing;
