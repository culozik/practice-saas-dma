import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import Sidebar from "@/components/global/sidebar";
import InfoBar from "@/components/global/info-bar";

import { queryClient } from "@/lib/react-query/queryClient";
import {
	PrefetchUserAutomations,
	PrefetchUserProfile,
} from "@/lib/react-query/prefetch";

type Props = {
	children: React.ReactNode;
	params: { slug: string };
};

const Layout = async ({ children, params }: Props) => {
	const { slug } = await params;

	await PrefetchUserProfile(queryClient);
	await PrefetchUserAutomations(queryClient);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<div className="p-3">
				<Sidebar slug={slug} />

				<div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
					<InfoBar slug={slug} />
					{children}
				</div>
			</div>
		</HydrationBoundary>
	);
};

export default Layout;
