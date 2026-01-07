'use client';

import { useFavourites } from '@/contexts/FavouritesContextProvider';
import { Clothe, useClothes } from '@/contexts/ClothesContextProvider';
import Link from 'next/link';
import Image from 'next/image';

export default function FavouritesClothes() {
	const { favourites, setFavouritesClothes } = useFavourites();
	const clothes = useClothes();

	const favouritesClothes = favourites.map((id) => clothes.find((item) => String(item.id) === id)).filter((item): item is Clothe => Boolean(item));

	return (
		<section className="flex justify-center py-15">
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-219">
				{favouritesClothes.map((clothe) => (
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
							<div className="flex justify-center gap-2.5 absolute bottom-2.5 left-0 right-0">
								<button className="w-8.5 h-8.5 text-[#0c0c0c] bg-[#dcdcdc] hover:text-[#0c0c0c]/80 hover:bg-[#dcdcdc]/80 component-transition">
									+
								</button>
								<button
									className="items-center justify-center uppercase text-[12px] bg-[#d9d9d9] h-8.5 leading-8.5 px-5 hover:bg-[#d9d9d9]/80 hover:text-[#0c0c0c]/80 component-transition"
									onClick={() => setFavouritesClothes(String(clothe.id))}
								>
									remove
								</button>
							</div>
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
