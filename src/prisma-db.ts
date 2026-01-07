import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedProducts = async () => {
	const count = await prisma.product.count();
	if (count === 0) {
		await prisma.product.createMany({
			// {
			// 	id: 1,
			// 	title: 'Basic White T-Shirt',
			// 	price: 19,
			// 	description:
			// 		'Comfortable cotton white t-shirt designed for everyday wear, offering breathable fabric, a soft feel, and a timeless casual style.',
			// 	category: 'Clothes',
			// 	images: JSON.stringify(['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab']),
			// },
			data: [
				// {
				// 	id: 1,
				// 	title: 'Basic White T-Shirt',
				// 	price: 19,
				// 	description:
				// 		'Comfortable cotton white t-shirt designed for everyday wear, offering breathable fabric, a soft feel, and a timeless casual style.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab']),
				// },
				// {
				// 	id: 2,
				// 	title: 'Classic Blue Jeans',
				// 	price: 49,
				// 	description:
				// 		'Classic fit blue jeans made from durable denim, providing long-lasting comfort, flexibility, and a versatile look for daily outfits.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1542272604-787c3835535d']),
				// },
				// {
				// 	id: 3,
				// 	title: 'Oversized Hoodie',
				// 	price: 59,
				// 	description:
				// 		'Warm oversized hoodie with a soft inner lining, ideal for colder days and relaxed streetwear looks while staying comfortable.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1523381294911-8d3cead13475']),
				// },
				// {
				// 	id: 4,
				// 	title: 'Summer Dress',
				// 	price: 39,
				// 	description:
				// 		'Light summer dress perfect for warm weather, crafted from breathable fabric that offers comfort, freedom, and elegance.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1520975916090-3105956dac38']),
				// },
				// {
				// 	id: 5,
				// 	title: "Men's Casual Shirt",
				// 	price: 35,
				// 	description:
				// 		'Men’s casual shirt suitable for work and leisure, combining a relaxed fit with breathable material and modern design.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1596755094514-f87e34085b2c']),
				// },

				// // ===== ELECTRONICS =====
				// {
				// 	id: 6,
				// 	title: 'Wireless Headphones',
				// 	price: 129,
				// 	description:
				// 		'Noise-cancelling wireless headphones with long battery life, delivering immersive sound quality and all-day comfort.',
				// 	category: 'Electronics',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1505740420928-5e560c06d30e']),
				// },
				// {
				// 	id: 7,
				// 	title: 'Smartphone',
				// 	price: 699,
				// 	description:
				// 		'Modern smartphone with a high-resolution display, fast performance, and advanced camera features for everyday tasks.',
				// 	category: 'Electronics',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9']),
				// },
				// {
				// 	id: 8,
				// 	title: 'Laptop',
				// 	price: 1099,
				// 	description:
				// 		'Powerful laptop designed for work and entertainment, offering smooth multitasking, sharp visuals, and reliable speed.',
				// 	category: 'Electronics',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1517336714731-489689fd1ca8']),
				// },
				// {
				// 	id: 9,
				// 	title: 'Smart Watch',
				// 	price: 249,
				// 	description:
				// 		'Smart watch with fitness tracking features, health monitoring tools, and seamless integration with your smartphone.',
				// 	category: 'Electronics',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1523275335684-37898b6baf30']),
				// },

				// // ===== FURNITURE =====
				// {
				// 	id: 11,
				// 	title: 'Wooden Chair',
				// 	price: 75,
				// 	description:
				// 		'Minimalistic wooden chair for dining rooms, built from quality materials to ensure durability, stability, and comfort.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1519710164239-da123dc03ef4']),
				// },
				// {
				// 	id: 12,
				// 	title: 'Modern Sofa',
				// 	price: 899,
				// 	description:
				// 		'Comfortable modern sofa with soft cushions, designed to provide excellent support and enhance your living space.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85']),
				// },
				// {
				// 	id: 13,
				// 	title: 'Office Desk',
				// 	price: 299,
				// 	description:
				// 		'Spacious office desk perfect for a home workspace, offering enough room for productivity and organized storage.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd']),
				// },
				// {
				// 	id: 14,
				// 	title: 'Bed Frame',
				// 	price: 499,
				// 	description:
				// 		'Sturdy bed frame with a modern design, providing reliable support, durability, and a stylish bedroom appearance.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1505691938895-1758d7feb511']),
				// },
				// {
				// 	id: 15,
				// 	title: 'Bookshelf',
				// 	price: 199,
				// 	description:
				// 		'Tall bookshelf made from solid wood, offering multiple shelves for storing books, decor, and personal items.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1586023492125-27b2c045efd7']),
				// },

				// // ===== SHOES =====
				// {
				// 	id: 16,
				// 	title: 'Running Sneakers',
				// 	price: 99,
				// 	description:
				// 		'Lightweight running sneakers designed for comfort and performance, providing cushioning and support during workouts.',
				// 	category: 'Shoes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1542291026-7eec264c27ff']),
				// },
				// {
				// 	id: 17,
				// 	title: 'Leather Boots',
				// 	price: 149,
				// 	description:
				// 		'Durable leather boots suitable for all seasons, offering strong construction, comfort, and a classic timeless style.',
				// 	category: 'Shoes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77']),
				// },
				// {
				// 	id: 18,
				// 	title: 'Casual Sneakers',
				// 	price: 89,
				// 	description:
				// 		'Everyday casual sneakers with a modern design, created for comfort, flexibility, and long-lasting daily wear.',
				// 	category: 'Shoes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1519744792095-2f2205e87b6f']),
				// },
				// {
				// 	id: 19,
				// 	title: 'High Heels',
				// 	price: 129,
				// 	description:
				// 		'Elegant high heels designed for special occasions, combining a stylish silhouette with comfort and stability.',
				// 	category: 'Shoes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1543163521-1bf539c55dd2']),
				// },

				// // ===== EXTRA + MIX =====
				// {
				// 	id: 21,
				// 	title: 'Black Leather Jacket',
				// 	price: 199,
				// 	description:
				// 		'Stylish black leather jacket with a modern fit, offering durability, warmth, and a bold fashion statement.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1551028719-00167b16eac5']),
				// },
				// {
				// 	id: 22,
				// 	title: 'Wool Sweater',
				// 	price: 79,
				// 	description: 'Warm wool sweater perfect for cold weather, providing insulation, softness, and everyday comfort.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1618354691373-d851c5c3a990']),
				// },
				// {
				// 	id: 23,
				// 	title: 'Slim Fit Trousers',
				// 	price: 69,
				// 	description:
				// 		'Elegant slim fit trousers suitable for formal occasions, offering a clean silhouette and comfortable wear.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1506629082955-511b1aa562c8']),
				// },
				// {
				// 	id: 25,
				// 	title: 'Sport Shorts',
				// 	price: 29,
				// 	description:
				// 		'Lightweight sport shorts designed for active training sessions, offering breathability, comfort, and freedom of movement during workouts.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1593032465175-481ac7f401a0']),
				// },
				// {
				// 	id: 26,
				// 	title: 'Tablet',
				// 	price: 499,
				// 	description:
				// 		'Portable tablet with a high-resolution display, ideal for browsing, entertainment, reading, and light productivity tasks on the go.',
				// 	category: 'Electronics',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04']),
				// },
				// {
				// 	id: 27,
				// 	title: 'Gaming Mouse',
				// 	price: 59,
				// 	description:
				// 		'High precision gaming mouse with RGB lighting, fast response time, and ergonomic design for long gaming sessions.',
				// 	category: 'Electronics',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7']),
				// },
				// {
				// 	id: 28,
				// 	title: 'Mechanical Keyboard',
				// 	price: 129,
				// 	description:
				// 		'Mechanical keyboard with tactile switches, offering accurate keystrokes, durability, and an improved typing experience.',
				// 	category: 'Electronics',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1517336714731-489689fd1ca8']),
				// },
				// {
				// 	id: 29,
				// 	title: '4K Monitor',
				// 	price: 399,
				// 	description:
				// 		'Ultra HD 4K monitor designed for professionals, delivering sharp visuals, accurate colors, and a large workspace.',
				// 	category: 'Electronics',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc']),
				// },
				// {
				// 	id: 31,
				// 	title: 'Coffee Table',
				// 	price: 149,
				// 	description:
				// 		'Modern coffee table with a wooden top, combining practical surface space with a clean and stylish interior design.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1505691938895-1758d7feb511']),
				// },
				// {
				// 	id: 33,
				// 	title: 'Wardrobe Cabinet',
				// 	price: 699,
				// 	description:
				// 		'Spacious wardrobe cabinet with shelves and compartments, providing organized storage for clothes and accessories.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf']),
				// },
				// {
				// 	id: 34,
				// 	title: 'TV Stand',
				// 	price: 249,
				// 	description:
				// 		'Modern TV stand with built-in cable management, helping keep your living room clean and visually organized.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1586023492125-27b2c045efd7']),
				// },
				// {
				// 	id: 35,
				// 	title: 'Dining Table',
				// 	price: 599,
				// 	description:
				// 		'Large dining table made of solid wood, designed for family meals, durability, and a timeless interior look.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1600585154340-be6161a56a0c']),
				// },
				// {
				// 	id: 38,
				// 	title: 'Slip-On Sneakers',
				// 	price: 79,
				// 	description:
				// 		'Comfortable slip-on sneakers for daily wear, offering quick wearability, flexibility, and casual modern style.',
				// 	category: 'Shoes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1549298916-b41d501d3772']),
				// },
				// {
				// 	id: 39,
				// 	title: 'Winter Boots',
				// 	price: 179,
				// 	description:
				// 		'Insulated winter boots designed for cold conditions, providing warmth, grip, and protection during winter walks.',
				// 	category: 'Shoes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1600180758890-6b94519a8ba6']),
				// },
				// {
				// 	id: 40,
				// 	title: 'Canvas Shoes',
				// 	price: 69,
				// 	description:
				// 		'Light canvas shoes with a casual design, perfect for everyday outfits, warm weather, and comfortable walking.',
				// 	category: 'Shoes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77']),
				// },
				// {
				// 	id: 41,
				// 	title: 'Polo Shirt',
				// 	price: 45,
				// 	description:
				// 		'Classic polo shirt made from breathable fabric, combining a smart casual look with comfort for daily wear.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633']),
				// },
				// {
				// 	id: 42,
				// 	title: 'Noise Cancelling Earbuds',
				// 	price: 149,
				// 	description:
				// 		'Compact earbuds with active noise cancellation, delivering clear sound quality and комфорт even in noisy environments.',
				// 	category: 'Electronics',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1590658268037-6bf12165a8df']),
				// },
				// {
				// 	id: 43,
				// 	title: 'Armchair',
				// 	price: 349,
				// 	description:
				// 		'Comfortable armchair with soft upholstery, designed for relaxation while adding a cozy accent to your interior.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1519710164239-da123dc03ef4']),
				// },
				// {
				// 	id: 44,
				// 	title: 'Loafers',
				// 	price: 129,
				// 	description:
				// 		'Elegant loafers suitable for both casual and formal wear, offering comfort, style, and easy slip-on design.',
				// 	category: 'Shoes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1549298916-b41d501d3772']),
				// },
				// {
				// 	id: 45,
				// 	title: 'Winter Coat',
				// 	price: 249,
				// 	description:
				// 		'Warm winter coat with insulated lining, designed to protect against cold temperatures while maintaining a modern look.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1542060748-10c28b62716f']),
				// },
				// {
				// 	id: 46,
				// 	title: 'Smart Home Camera',
				// 	price: 99,
				// 	description: 'Indoor smart home camera with motion detection, allowing remote monitoring and enhanced home security.',
				// 	category: 'Electronics',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1580894732444-8ecded7900cd']),
				// },
				// {
				// 	id: 47,
				// 	title: 'Floor Lamp',
				// 	price: 129,
				// 	description: 'Modern floor lamp with warm lighting, ideal for creating a cozy atmosphere in living rooms or bedrooms.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85']),
				// },
				// {
				// 	id: 48,
				// 	title: 'Training Shoes',
				// 	price: 109,
				// 	description:
				// 		'Training shoes designed for gym workouts, offering stability, comfort, and support during intense exercises.',
				// 	category: 'Shoes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1600180758890-6b94519a8ba6']),
				// },
				// {
				// 	id: 49,
				// 	title: 'Graphic T-Shirt',
				// 	price: 25,
				// 	description: 'Cotton t-shirt with a modern graphic print, combining comfort, durability, and expressive casual style.',
				// 	category: 'Clothes',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1520975916090-3105956dac38']),
				// },
				// {
				// 	id: 50,
				// 	title: 'Desk Lamp',
				// 	price: 59,
				// 	description:
				// 		'LED desk lamp with adjustable brightness, providing efficient lighting for work, reading, and daily tasks.',
				// 	category: 'Furniture',
				// 	images: JSON.stringify(['https://images.unsplash.com/photo-1519710164239-da123dc03ef4']),
				// },
				// {
				// 	id: 1,
				// 	title: 'Leather Jacket',
				// 	price: 19,
				// 	description:
				// 		'Loose-fitting leather jacket. High collar and long sleeves with buttoned cuffs. Slit pockets on the hips and an inner pocket. Zip fastening at the front.',
				// 	category: 'Jacket',
				// 	images: JSON.stringify([
				// 		'/clothes/leather-jacket-1-1.jpg',
				// 		'/clothes/leather-jacket-1-2.jpg',
				// 		'/clothes/leather-jacket-1-3.jpg',
				// 		'/clothes/leather-jacket-1-4.jpg',
				// 	]),
				// },
				{
					id: 1,
					title: 'Leather Jacket',
					price: 149,
					description:
						'Loose-fitting leather jacket. High collar and long sleeves with buttoned cuffs. Slit pockets on the hips and an inner pocket. Zip fastening at the front.',
					category: 'Jackets',
					images: JSON.stringify([
						'/clothes/leather-jacket-1-1.jpg',
						'/clothes/leather-jacket-1-2.jpg',
						'/clothes/leather-jacket-1-3.jpg',
						'/clothes/leather-jacket-1-4.jpg',
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
						'/clothes/suede-jacket-2-1.jpg',
						'/clothes/suede-jacket-2-2.jpg',
						'/clothes/suede-jacket-2-3.jpg',
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
						'/clothes/jeans-with-rivets-3-1.jpg',
						'/clothes/jeans-with-rivets-3-2.jpg',
						'/clothes/jeans-with-rivets-3-3.jpg',
					]),
				},
				{
					id: 4,
					title: 'Blue Baggy Jeans',
					price: 39,
					description: 'Baggy, five-pocket, flared jeans with a zipper and button closure at the front.',
					category: 'Jeans',
					images: JSON.stringify([
						'/clothes/blue-baggy-jeans-4-1.jpg',
						'/clothes/blue-baggy-jeans-4-2.jpg',
						'/clothes/blue-baggy-jeans-4-3.jpg',
						'/clothes/blue-baggy-jeans-4-4.jpg',
						'/clothes/blue-baggy-jeans-4-5.jpg',
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
						'/clothes/puffed-jacket-5-1.jpg',
						'/clothes/puffed-jacket-5-2.jpg',
						'/clothes/puffed-jacket-5-3.jpg',
						'/clothes/puffed-jacket-5-4.jpg',
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
						'/clothes/parfums-red-6-1.jpg',
						'/clothes/parfums-red-6-2.jpg',
						'/clothes/parfums-red-6-3.jpg',
					]),
				},
				{
					id: 7,
					title: 'Purple Parfums',
					price: 29,
					description:
						'Eau de Parfum. A fragrance that captivates with its mysterious charm. It opens with a bright citrus explosion of mandarin and apple that instantly captures the attention. In the heart, blackberry reveals all its dark and juicy intensity, emphasized by the softness of jasmine, creating a unique depth. Cashmere wood adds enveloping warmth, while amber, vanilla and musk leave a trail of irresistible sensuality.',
					category: 'Parfums',
					images: JSON.stringify(['/clothes/parfums-purple-7-1.jpg', '/clothes/parfums-purple-7-2.jpg']),
				},
				{
					id: 8,
					title: 'Duo Parfums',
					price: 37,
					description:
						'A set of perfumes to create the final touch to your look, whether it is elegant, sophisticated or bold. Add sensuality to the evening or emphasize the vivacity and attractiveness of a unique day.NIGHT POUR HOMME II is a modern fougere eau de toilette with an oriental aroma, where seductive and warm spices mix with notes of dry wood, creating an intoxicating trail. The olfactory pyramid opens with fruity notes of bergamot, grapefruit and lemon, wrapped in cardamom, lavender and nutmeg. The base notes sound like musk and vanilla accompanied by cedar wood, amber and tonka bean. This is a provocative perfume for men who defend their carefreeness.NIGHT POUR HOMME III is a woody fragrance that reveals its elegant and fresh character, emphasized by a rainbow floral explosion. The olfactory pyramid opens with fruity notes of bergamot and pear, wrapped in iris, osmanthus, coriander and pepper. The base notes are woody notes of sandalwood and cashmere, accompanied by notes of leather and vetiver. This is a unique and seductive perfume, the charm of which is impossible to resist.',
					category: 'Parfums',
					images: JSON.stringify(['/clothes/parfums-duo-8-1.jpg', '/clothes/parfums-duo-8-2.jpg']),
				},
				{
					id: 9,
					title: 'Polo T-shirt',
					price: 39,
					description:
						'Regular-fit knitted polo shirt in soft viscose staple fabric. Classic collar with button fastening at chest. Long sleeves. Side slit hem.',
					category: 'T-shirts',
					images: JSON.stringify([
						'/clothes/t-shirt-polo-9-1.jpg',
						'/clothes/t-shirt-polo-9-2.jpg',
						'/clothes/t-shirt-polo-9-3.jpg',
						'/clothes/t-shirt-polo-9-4.jpg',
					]),
				},
				{
					id: 10,
					title: 'White T-shirt',
					price: 29,
					description: 'Slim fit T-shirt. Round neck and short sleeves.Lighter than our basic mid-weight model.',
					category: 'T-shirts',
					images: JSON.stringify([
						'/clothes/t-shirt-white-10-1.jpg',
						'/clothes/t-shirt-white-10-2.jpg',
						'/clothes/t-shirt-white-10-3.jpg',
						'/clothes/t-shirt-white-10-4.jpg',
					]),
				},
			],
		});
	}
};

seedProducts();

export function getProducts() {
	return prisma.product.findMany();
}

export function addProduct(title: string, price: number, description: string, category: string, images: string) {
	return prisma.product.create({
		data: { title, price, description, category, images },
	});
}
