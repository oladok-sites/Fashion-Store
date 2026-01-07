import { UserProfile } from '@clerk/nextjs';

export default async function Component() {
	return (
		<section className="flex justify-center py-15">
			<UserProfile />
		</section>
	);
}
