import CartProducts from '@/components/client/CartProducts';
import { getProducts } from '@/prisma-db';

export default async function HomeHero() {
	const products = await getProducts()

	return (
		<CartProducts products={products} />
	);
}
