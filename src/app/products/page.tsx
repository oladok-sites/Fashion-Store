import ProductsComponent from '@/components/Products';
import { getProducts } from '@/prisma-db';
import { Suspense } from 'react';

export default async function ProductsPage() {
	const products = await getProducts()

	return (
		<Suspense fallback={<div>Loading products...</div>}>
			<ProductsComponent products={products} />
		</Suspense>
	);
}