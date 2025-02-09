"use client";

import React from "react";
import Link from "next/link";

import { usePath } from "@/hooks/use-nav";
import { cn } from "@/lib/utils";

const AutomationList = () => {
	// TODO: get the automation list data

	const { pathname } = usePath();

	// TODO: if no automations exist, show no automations

	return (
		<div className="flex flex-col gap-y-3">
			<Link
				href={`${pathname}/123123`}
				className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
			>
				<div className="flex flex-col flex-1 items-start">
					<h2 className="text-xl font-semibold">Automation</h2>
					<p className="text-[#9B9CA0] text-sm font-light mb-2">
						This is from a comment
					</p>

					{/* TODO: Automation keywords*/}
					<div className="flex gap-x-2 flex-wrap mt-3">
						<div className={cn()}></div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default AutomationList;
