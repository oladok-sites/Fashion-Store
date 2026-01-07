import ProductsComponent from '@/components/Products';
import { Suspense } from 'react';

export default function ProductsPage() {
	return (
		<Suspense fallback={<div>Loading products...</div>}>
			<ProductsComponent />
		</Suspense>
	);
}