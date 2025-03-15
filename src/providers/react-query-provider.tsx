"use client";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/lib/react-query/queryClient";

type Props = {
	children: React.ReactNode;
};

const ReactQueryProvider = ({ children }: Props) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default ReactQueryProvider;
