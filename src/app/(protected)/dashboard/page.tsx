import { redirect } from "next/navigation";

import { onBoardUser } from "@/actions/user";

const Page = async () => {
	const user = await onBoardUser();

	if (user.status === 200 || user.status === 201) {
		const userData = user.data as { firstname: string; lastname: string };
		return redirect(`dashboard/${userData.firstname}${userData.lastname}`);
	}

	return redirect("/sign-in");
};

export default Page;
