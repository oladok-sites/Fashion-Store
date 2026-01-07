import { UserProfile } from '@clerk/nextjs';

export default async function Component() {
	return (
		<section className="flex justify-center py-15">
			<UserProfile
				// appearance={{
				// 	elements: {
				// 		pageScrollBox: 'border-none',
				// 		rootBox: 'border-none',
				// 		card: 'border-none shadow-none',
				// 	},
				// 	variables: {
				// 		colorBorder: 'transparent',
				// 	},
				// }}
			/>
		</section>
	);
}
