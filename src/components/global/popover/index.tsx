import React from "react";

import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Props = {
	trigger: React.JSX.Element;
	children: React.ReactNode;
	className?: string;
};

const PopOver = ({ trigger, children, className }: Props) => {
	return (
		<Popover>
			<PopoverTrigger asChild>{trigger}</PopoverTrigger>
			<PopoverContent
				className={cn("bg-[#1D1D1D] shadow-lg", className)}
				align="end"
				side="bottom"
			>
				{children}
			</PopoverContent>
		</Popover>
	);
};

export default PopOver;
