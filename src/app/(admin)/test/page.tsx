import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Component() {
	const authConst = await auth();
	const userConst = await currentUser();
	// console.log(authConst)
	// console.log(userConst)

	return (
		<>
			<h1>test</h1>
		</>
	);
}