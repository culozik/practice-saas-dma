"use client";

import { useMemo } from "react";
import { v4 } from "uuid";

import Loader from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { AutomationDuoToneWhite } from "@/icons";
import { useCreateAutomation } from "@/hooks/use-automation";

const CreateAutomation = () => {
	const mutationId = useMemo(() => v4(), []);

	const { isPending, mutate } = useCreateAutomation(mutationId);

	return (
		<Button
			className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]"
			onClick={() =>
				mutate({
					name: "New Automation",
					id: mutationId,
					createdAt: new Date(),
					keywords: [],
				})
			}
		>
			<Loader state={isPending}>
				<AutomationDuoToneWhite />
				<p className="lg:inline hidden">Create an Automation</p>
			</Loader>
		</Button>
	);
};

export default CreateAutomation;
