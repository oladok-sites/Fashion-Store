import ProductById from '@/components/ProductById';
import { getProductById, getProducts } from '@/prisma-db';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	const products = await getProducts();

	return products.map((product) => ({ id: product.id.toString() }))
}

export default async function Component({params}: {params: Promise<{id: string}>}) {
	const { id } = await params;
	const product = await getProductById(Number(id))

	if (typeof product === 'undefined') notFound()

	return(
		<ProductById product={product} />
	)
}
