import React from "react";
import { X } from "lucide-react";

import { Input } from "@/components/ui/input";

import { useKeywords } from "@/hooks/use-automation";
import { useQueryAutomation } from "@/hooks/user-queries";
import { useMutationDataState } from "@/hooks/use-mutation-data";

type Props = {
	id: string;
};

const Keywords = ({ id }: Props) => {
	const { keyword, onValueChange, onKeyPress, deleteMutation } =
		useKeywords(id);
	const { latestVariable } = useMutationDataState(["add-keyword"]);
	const { data } = useQueryAutomation(id);

	return (
		<div className="bg-background-80 flex flex-col gap-y-3 p-3 rounded-xl">
			<p className="text-sm text-text-secondary">
				Add words that trigger automations
			</p>
			<div className="flex flex-wrap justify-start gap-2 items-center">
				{data?.data?.keywords &&
					data?.data?.keywords.length > 0 &&
					data?.data?.keywords.map(
						(keyword) =>
							keyword.id !== latestVariable.variables.id && (
								<div
									key={keyword.id}
									className="bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-full"
								>
									<p>{keyword.word}</p>
									<X
										size={20}
										onClick={() => deleteMutation({ id: keyword.id })}
									/>
								</div>
							)
					)}
				{latestVariable && latestVariable.variables.status === "pending" && (
					<div className="bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-full">
						{latestVariable.variables.keyword}
					</div>
				)}

				<Input
					placeholder="Add keyword..."
					value={keyword}
					className="p-0 bg-transparent ring-0 border-none outline-none"
					onChange={onValueChange}
					onKeyUp={onKeyPress}
				/>
			</div>
		</div>
	);
};

export default Keywords;
