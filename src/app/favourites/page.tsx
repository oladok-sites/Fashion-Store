import FavouritesProducts from '@/components/client/FavouritesProducts';
import { getProducts } from '@/prisma-db';

export default async function HomeHero() {
	const products = await getProducts()

	return (
		<FavouritesProducts products={products} />
	);
}
