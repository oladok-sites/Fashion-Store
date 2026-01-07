'use client';

import { useCart } from '@/contexts/CartContextProvider';
import { Clothe, useClothes } from '@/contexts/ClothesContextProvider';
import Link from 'next/link';
import Image from 'next/image';

export default function FavouritesClothes() {
	const { cart, setCartClothes, hasCart } = useCart();
	const clothes = useClothes();

	const cartlClothes = cart.map((id) => clothes.find((item) => String(item.id) === id)).filter((item): item is Clothe => Boolean(item));

	return (
		<section className="flex justify-center py-15">
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-219">
				{cartlClothes.map((clothe) => (
					<div key={clothe.id}>
						<div className="border border-black/40 mb-3.5 relative">
							<Link href={`/products/${clothe.id}`}>
								<Image
									src={clothe.images[0]}
									alt={clothe.title}
									width={305}
									height={313}
									className="object-cover w-76.25 h-78.25"
								/>
							</Link>
							<button
								className="absolute bottom-2.5 left-0 right-0 mx-auto uppercase text-[12px] bg-[#d9d9d9] max-w-23.25 h-8.5 leading-8.5 px-5 hover:bg-[#d9d9d9]/80 hover:text-[#0c0c0c]/80 component-transition"
								onClick={() => setCartClothes(String(clothe.id))}
							>
								remove
							</button>
						</div>
						<div className="flex justify-between text-[14px] px-2.5">
							<Link href={`/products/${clothe.id}`} className="hover:text-black/60 component-transition">
								{clothe.title}
							</Link>
							<p className="text-[20px] font-semibold">{clothe.price}$</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
