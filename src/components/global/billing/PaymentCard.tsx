import React from "react";
import { CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { PLANS } from "@/constants/pages";

type Props = {
	label: string;
	current: "PRO" | "FREE";
	landing?: boolean;
};

const PaymentCard = ({ current, label, landing }: Props) => {
	return (
		<div
			className={cn(
				label !== current ? "bg-in-active" : "bg-gradient--card",
				"p-[2px] rounded-xl overflow-hidden"
			)}
		>
			<div
				className={cn(
					landing && "radial--gradient--pink",
					"flex flex-col h-full rounded-xl pl-5 py-5 pr-10 bg-background-90"
				)}
			>
				{landing ? (
					<h2 className="text-2xl">
						{label === "PRO" && "Premium Plan"}
						{label === "FREE" && "Standard"}
					</h2>
				) : (
					<h2 className="text-2xl">
						{label === current
							? "Your Current Plan"
							: current === "PRO"
							? "Downgrade"
							: "Upgrade"}
					</h2>
				)}
				<p className="text-text-secondary text-sm mb-2">
					This is what your plan covers for automations and AI features
				</p>

				{label === "PRO" ? (
					<span className="bg-gradient--card mt-2 font-bold bg-clip-text text-transparent">
						Smart AI
					</span>
				) : (
					<span className="font-bold mt-2 text-text-secondary">Standard</span>
				)}

				{label === "PRO" ? (
					<p className="mb-2">
						<b className="text-xl">$99</b>/month
					</p>
				) : (
					<p className="text-xl mb-2">Free</p>
				)}

				{PLANS[label === "PRO" ? 1 : 0].features.map((feature) => (
					<div
						key={feature}
						className="mt-2 text-muted-foreground flex gap-2 items-center"
					>
						<span>
							<CircleCheck className="text-indigo-500 h-5 w-5" />
						</span>
						<p>{feature}</p>
					</div>
				))}

				<div className="inline-flex flex-1 flex-wrap items-end">
					{landing ? (
						<Button
							className={cn(
								"flex-1 rounded-full mt-5",
								label === "PRO"
									? " bg-gradient--card text-white"
									: "bg-background-80 text-white hover:text-background-80"
							)}
						>
							{label === current
								? "Get Started"
								: current === "PRO"
								? "Free"
								: "Get Started"}
						</Button>
					) : (
						<Button
							className="flex-1 rounded-full mt-5 bg-background-80 text-white hover:text-background-80 "
							disabled={label === current}
						>
							{label === current
								? "Active"
								: current === "PRO"
								? "Downgrade"
								: "Upgrade"}
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default PaymentCard;
