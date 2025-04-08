"use client";

import { use, useEffect } from "react";
import { HydrationBoundary } from "@tanstack/react-query";

import AutomationBreadcrumb from "@/components/global/breadcrumbs/automations";
import Trigger from "@/components/global/automations/trigger";

import { Warning } from "@/icons";
import { queryClient } from "@/lib/react-query/queryClient";
import { PrefetchUserAutomation } from "@/lib/react-query/prefetch";

type Props = {
	params: Promise<{ slug: string; id: string }>;
};

const Page = (props: Props) => {
	const params = use(props.params);
	const id = params.id;

	useEffect(() => {
		const fetchAutomationInfo = async () => {
			await PrefetchUserAutomation(queryClient, id);
		};

		fetchAutomationInfo();
	}, [id]);

	return (
		<HydrationBoundary state={queryClient}>
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
		</HydrationBoundary>
	);
};

export default Page;
