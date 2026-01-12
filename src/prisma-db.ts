import { PrismaClient } from '@prisma/client';
import { Product } from '../types/types';

const prisma = new PrismaClient();

const seedProducts = async () => {
	const count = await prisma.product.count();
	if (count === 0) {
		await prisma.product.createMany({
			data: [
				{
					id: 1,
					title: 'Leather Jacket',
					price: 149,
					description:
						'Loose-fitting leather jacket. High collar and long sleeves with buttoned cuffs. Slit pockets on the hips and an inner pocket. Zip fastening at the front.',
					category: 'Jackets',
					images: JSON.stringify([
						'/products/leather-jacket-1-1.jpg',
						'/products/leather-jacket-1-2.jpg',
						'/products/leather-jacket-1-3.jpg',
						'/products/leather-jacket-1-4.jpg',
					]),
				},
				{
					id: 2,
					title: 'Suede Leather Jacket',
					price: 179,
					description:
						'Loose-fitting jacket in leather fabric with suede trim. High collar and long sleeves with buttoned cuffs. Whipstitch details on the shoulders. Patch pockets with flap on the chest and slit pockets on the hips. Inner pocket details. Elasticated hem. Front zip concealed by a press-stud placket.',
					category: 'Jackets',
					images: JSON.stringify([
						'/products/suede-jacket-2-1.jpg',
						'/products/suede-jacket-2-2.jpg',
						'/products/suede-jacket-2-3.jpg',
					]),
				},
				{
					id: 3,
					title: 'Black Jeans with Rivets',
					price: 179,
					description:
						'Tight fit at the top and flared from the knee. Mid rise. Stiff fabric. Flared jeans in lightweight cotton denim. Front pockets and patch back pockets. Contrasting metal rivets on the legs. Ragged hem. Zip and button fastening at the front.',
					category: 'Jeans',
					images: JSON.stringify([
						'/products/jeans-with-rivets-3-1.jpg',
						'/products/jeans-with-rivets-3-2.jpg',
						'/products/jeans-with-rivets-3-3.jpg',
					]),
				},
				{
					id: 4,
					title: 'Blue Baggy Jeans',
					price: 39,
					description: 'Baggy, five-pocket, flared jeans with a zipper and button closure at the front.',
					category: 'Jeans',
					images: JSON.stringify([
						'/products/blue-baggy-jeans-4-1.jpg',
						'/products/blue-baggy-jeans-4-2.jpg',
						'/products/blue-baggy-jeans-4-3.jpg',
						'/products/blue-baggy-jeans-4-4.jpg',
						'/products/blue-baggy-jeans-4-5.jpg',
					]),
				},
				{
					id: 5,
					title: 'Puffed Jacket',
					price: 129,
					description:
						'Quilted jacket in technical fabric with a shiny finish. Filling: 80% down and 20% feathers. High collar with adjustable hood and long sleeves with elastic cuffs. Slit pockets on the hips and an inner pocket. Hem adjustable with elastic drawstring on the sides. Zip at the front.',
					category: 'Jackets',
					images: JSON.stringify([
						'/products/puffed-jacket-5-1.jpg',
						'/products/puffed-jacket-5-2.jpg',
						'/products/puffed-jacket-5-3.jpg',
						'/products/puffed-jacket-5-4.jpg',
					]),
				},
				{
					id: 6,
					title: 'Red Parfums',
					price: 34,
					description:
						'An oriental eau de parfum. Orange adds a juicy glow, amber adds structural warmth, and everil provides a sophisticated textured finish. A warm, elegant and vibrant fragrance that perfectly emphasizes presence and sophistication.',
					category: 'Parfums',
					images: JSON.stringify([
						'/products/parfums-red-6-1.jpg',
						'/products/parfums-red-6-2.jpg',
						'/products/parfums-red-6-3.jpg',
					]),
				},
				{
					id: 7,
					title: 'Purple Parfums',
					price: 29,
					description:
						'Eau de Parfum. A fragrance that captivates with its mysterious charm. It opens with a bright citrus explosion of mandarin and apple that instantly captures the attention. In the heart, blackberry reveals all its dark and juicy intensity, emphasized by the softness of jasmine, creating a unique depth. Cashmere wood adds enveloping warmth, while amber, vanilla and musk leave a trail of irresistible sensuality.',
					category: 'Parfums',
					images: JSON.stringify(['/products/parfums-purple-7-1.jpg', '/products/parfums-purple-7-2.jpg']),
				},
				{
					id: 8,
					title: 'Duo Parfums',
					price: 37,
					description:
						'A set of perfumes to create the final touch to your look, whether it is elegant, sophisticated or bold. Add sensuality to the evening or emphasize the vivacity and attractiveness of a unique day.NIGHT POUR HOMME II is a modern fougere eau de toilette with an oriental aroma, where seductive and warm spices mix with notes of dry wood, creating an intoxicating trail. The olfactory pyramid opens with fruity notes of bergamot, grapefruit and lemon, wrapped in cardamom, lavender and nutmeg. The base notes sound like musk and vanilla accompanied by cedar wood, amber and tonka bean. This is a provocative perfume for men who defend their carefreeness.NIGHT POUR HOMME III is a woody fragrance that reveals its elegant and fresh character, emphasized by a rainbow floral explosion. The olfactory pyramid opens with fruity notes of bergamot and pear, wrapped in iris, osmanthus, coriander and pepper. The base notes are woody notes of sandalwood and cashmere, accompanied by notes of leather and vetiver. This is a unique and seductive perfume, the charm of which is impossible to resist.',
					category: 'Parfums',
					images: JSON.stringify(['/products/parfums-duo-8-1.jpg', '/products/parfums-duo-8-2.jpg']),
				},
				{
					id: 9,
					title: 'Polo T-shirt',
					price: 39,
					description:
						'Regular-fit knitted polo shirt in soft viscose staple fabric. Classic collar with button fastening at chest. Long sleeves. Side slit hem.',
					category: 'T-shirts',
					images: JSON.stringify([
						'/products/t-shirt-polo-9-1.jpg',
						'/products/t-shirt-polo-9-2.jpg',
						'/products/t-shirt-polo-9-3.jpg',
						'/products/t-shirt-polo-9-4.jpg',
					]),
				},
				{
					id: 10,
					title: 'White T-shirt',
					price: 29,
					description: 'Slim fit T-shirt. Round neck and short sleeves.Lighter than our basic mid-weight model.',
					category: 'T-shirts',
					images: JSON.stringify([
						'/products/t-shirt-white-10-1.jpg',
						'/products/t-shirt-white-10-2.jpg',
						'/products/t-shirt-white-10-3.jpg',
						'/products/t-shirt-white-10-4.jpg',
					]),
				},
			],
		});
	}
};

seedProducts();

export function normalizeProduct(product: any): Product {
	return {
		...product,
		images: product.images ? JSON.parse(product.images) : [],
	};
}

export async function getProducts() {
	const products = await prisma.product.findMany();
	return products.map((p) => normalizeProduct(p));
}

export async function getProductById(id: number) {
	const product = await prisma.product.findUnique({
		where: { id },
	});

	if (!product) return;

	return normalizeProduct(product);
}

export function addProduct(title: string, price: number, description: string, category: string, images: string) {
	return prisma.product.create({
		data: { title, price, description, category, images },
	});
}
