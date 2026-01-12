import { getProducts } from '@/prisma-db';
import HomeHeroClient from './client/HomeHeroClient';

export default async function HomeHero() {
	const products = await getProducts()

	return (
		<HomeHeroClient products={products} />
	);
}
