"use client";

import TriggerButton from "../trigger-button";
import SubscriptionPlan from "@/components/global/subscription-plan";
import { Textarea } from "@/components/ui/textarea";

import { useCreateListener } from "@/hooks/use-automation";
import { cn } from "@/lib/utils";

import { AUTOMATION_LISTENERS } from "@/constants/automation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "../../loader";

type Props = {
	id: string;
};

const ThenAction = ({ id }: Props) => {
	const {
		isPending,
		listener: Listener,
		onSetListener,
		register,
		onFormSubmit,
	} = useCreateListener(id);

	return (
		<TriggerButton label="Then">
			<div className="flex flex-col gap-y-2">
				{AUTOMATION_LISTENERS.map((listener) =>
					listener.type === "SMARTAI" ? (
						<SubscriptionPlan key={listener.type} type="PRO">
							<div
								onClick={() => onSetListener(listener.type)}
								key={listener.id}
								className={cn(
									Listener === listener.type
										? "bg-gradient-to-br from-[#3352CC] to-[#1C2D70]"
										: "bg-background-80",
									"p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100"
								)}
							>
								<div className="flex gap-x-2 items-center">
									{listener.icon}
									<p>{listener.label}</p>
								</div>
								<p>{listener.description}</p>
							</div>
						</SubscriptionPlan>
					) : (
						<div
							onClick={() => onSetListener(listener.type)}
							key={listener.id}
							className={cn(
								Listener === listener.type
									? "bg-gradient-to-br from-[#3352CC] to-[#1C2D70]"
									: "bg-background-80",
								"p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100"
							)}
						>
							<div className="flex gap-x-2 items-center">
								{listener.icon}
								<p>{listener.label}</p>
							</div>
							<p>{listener.description}</p>
						</div>
					)
				)}
				<form onSubmit={onFormSubmit} className="flex flex-col gap-y-2">
					{/* TODO: Set conditions for rendering textarea or input */}
					<Textarea
						placeholder={
							Listener === "MESSAGE"
								? "Add a prompt that your smart AI can use..."
								: "Add a message you want to send to your customers"
						}
						{...register("prompt")}
						className="bg-background-80 outline-none border-none ring-0 focus:ring-0"
					/>
					<Input
						{...register("reply")}
						placeholder="Add an reply for comments (Optional)"
						className="bg-background-80 outline-none border-none ring-0 focus:ring-0"
					/>
					<Button className="bg-gradient-to-br w-full from-[#3352CC] font-medium text-white to-[#1C2D70]">
						<Loader state={isPending}> Add Listener</Loader>
					</Button>
				</form>
			</div>
		</TriggerButton>
	);
};

export default ThenAction;
