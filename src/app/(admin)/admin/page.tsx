import Link from "next/link";

export default function Component() {
	return (
		<section className="flex flex-col items-center py-15">
			<h1 className="text-4xl font-semibold text-center">Page only for admins</h1>
			<Link href="/admin/add-new-product">Add a new product</Link>
		</section>
	);
}