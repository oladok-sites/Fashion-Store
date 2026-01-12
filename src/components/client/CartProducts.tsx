'use client';

import { useCart } from '@/contexts/CartContextProvider';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../../types/types';

export default function CartProducts({ products }: { products: Product[] }) {
	const { cart, setCartProducts } = useCart();

	const cartProducts = cart.map((id) => products.find((item) => String(item.id) === id)).filter((item): item is Product => Boolean(item));

	return (
		<section className="flex justify-center py-15">
			{cartProducts.length !== 0 ? (
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-219">
					{cartProducts.map((product) => (
						<div key={product.id}>
							<div className="border border-black/40 mb-3.5 relative">
								<Link href={`/products/${product.id}`}>
									<Image
										src={product.images[0]}
										alt={product.title}
										width={305}
										height={313}
										className="object-cover w-76.25 h-78.25"
										loading='lazy'
									/>
								</Link>
								<button
									className="absolute bottom-2.5 left-0 right-0 mx-auto uppercase text-[12px] bg-[#d9d9d9] max-w-23.25 h-8.5 leading-8.5 px-5 hover:bg-[#d9d9d9]/80 hover:text-[#0c0c0c]/80 component-transition"
									onClick={() => setCartProducts(String(product.id))}
								>
									remove
								</button>
							</div>
							<div className="flex justify-between text-[14px] px-2.5">
								<Link href={`/products/${product.id}`} className="hover:text-black/60 component-transition">
									{product.title}
								</Link>
								<p className="text-[20px] font-semibold">{product.price}$</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<h1 className="text-4xl font-semibold text-center">You haven't added any products yet.</h1>
			)}
		</section>
	);
}
