"use client";

import { ChevronRight, PencilIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import ActivateAutomationButton from "@/components/global/activate-automation-button";

import { useQueryAutomation } from "@/hooks/user-queries";
import { useEditAutomation } from "@/hooks/use-automation";
import { useMutationDataState } from "@/hooks/use-mutation-data";

type Props = {
	id: string;
};

const AutomationBreadcrumb = ({ id }: Props) => {
	const { data } = useQueryAutomation(id);
	const { edit, enableEdit, inputRef, isPending } = useEditAutomation(id);

	const { latestVariable } = useMutationDataState(["update-automation"]);

	return (
		<div className="rounded-full w-full p-5 gap-x-2 bg-[#18181B1A] flex items-center">
			<div className="flex items-center gap-x-3 min-w-0">
				<p className="text-[#9B9CA0] truncate">Automations</p>
				<ChevronRight color="#9B9CA0" className="flex-shrink-0" />
				<span className="flex gap-x-3 items-center min-w-0">
					{edit ? (
						<Input
							ref={inputRef}
							placeholder={
								isPending ? latestVariable.variables : "Add a new name"
							}
							className="bg-transparent h-auto outline-none text-base border-none p-0"
						/>
					) : (
						<p className="text-[#9B9CA0] truncate">
							{latestVariable?.variables
								? latestVariable?.variables.name
								: data?.data?.name}
						</p>
					)}
					{edit ? (
						<></>
					) : (
						<span
							className="cursor-pointer hover:opacity-75 duration-100 flex-shrink-0"
							onClick={enableEdit}
						>
							<PencilIcon size={14} />
						</span>
					)}
				</span>
			</div>

			<div className="flex items-center gap-x-5 ml-auto">
				<p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
					All updates are automatically saved
				</p>
				<div className="flex gap-x-5 flex-shrink-0">
					<p className="text-text-secondary text-sm truncate min-w-0">
						Changes saved
					</p>
				</div>
			</div>

			<ActivateAutomationButton />
		</div>
	);
};

export default AutomationBreadcrumb;
