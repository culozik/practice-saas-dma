import React from "react";

import Spinner from "./Spinner";

import { cn } from "@/lib/utils";

type Props = {
	state: boolean;
	className?: string;
	children: React.ReactNode;
	color?: string;
};

const Loader = ({ state, children, className, color }: Props) => {
	return state ? (
		<div className={cn(className)}>
			<Spinner color={color} />
		</div>
	) : (
		children
	);
};

export default Loader;
