"use client";

import { use } from "react";

import AutomationBreadcrumb from "@/components/global/breadcrumbs/automations";
import Trigger from "@/components/global/automations/trigger";

import { Warning } from "@/icons";

type Props = {
	params: Promise<{ slug: string; id: string }>;
};

//  TODO: set some metadata

const Page = (props: Props) => {
	const params = use(props.params);
	const id = params.id;

	//  TODO: prefetch the user automation data
	return (
		<div className="flex flex-col items-center gap-y-20">
			<AutomationBreadcrumb id={id} />

			<div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
				<div className="flex gap-x-2">
					<Warning />
					When...
				</div>

				<Trigger id={id} />
			</div>
		</div>
	);
};

export default Page;
