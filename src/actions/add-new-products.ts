'use server';
import { addProduct } from '@/prisma-db';

export default async function addNewProduct(formData: FormData) {
	'use server';

	const title = formData.get('title') as string;
	const price = formData.get('price') as string;
	const description = formData.get('description') as string;
	const category = formData.get('category') as string;
	const images = formData.get('images') as string;

	await addProduct(title, parseInt(price), description, category, JSON.stringify([images]));
	console.log('priveeeeet from addNewProduct');
}
