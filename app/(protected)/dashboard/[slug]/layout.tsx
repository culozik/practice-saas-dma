import React from "react";

import Sidebar from "@/components/global/sidebar";

type Props = {
	children: React.ReactNode;
	params: { slug: string };
};

const Layout = ({ children, params }: Props) => {
	// Query client
	// WIP: Query client and fetch data

	return (
		<div className="p-3">
			{/* Sidebar*/}
			<Sidebar slug={params.slug} />
			{/* NavBar */}
		</div>
	);
};

export default Layout;
