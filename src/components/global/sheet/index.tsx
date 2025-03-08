import React from "react";
import {
	Sheet as ShadcnSheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
	SheetDescription,
} from "@/components/ui/sheet";

type Props = {
	trigger: React.ReactNode;
	children: React.ReactNode;
	className?: string;
	side: "left" | "right";
};

const Sheet = ({ trigger, children, className, side }: Props) => {
	return (
		<ShadcnSheet>
			<SheetTitle className="hidden">Navigation menu</SheetTitle>
			<SheetDescription className="hidden">
				Navigation menu for the dashboard
			</SheetDescription>
			<SheetTrigger className={className}>{trigger}</SheetTrigger>
			<SheetContent side={side} className="p-0">
				{children}
			</SheetContent>
		</ShadcnSheet>
	);
};

export default Sheet;
