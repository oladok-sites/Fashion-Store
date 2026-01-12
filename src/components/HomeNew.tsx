import { getProducts } from '@/prisma-db';
import HomeNewClient from './client/HomeNewClient';

export default async function HomeHero() {
	const products = await getProducts()

	return (
		<HomeNewClient products={products} />
	);
}
