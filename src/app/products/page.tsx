'use client';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useClothes } from '@/contexts/ClothesContextProvider';
import { useFavourites } from '@/contexts/FavouritesContextProvider';
import { useCart } from '@/contexts/CartContextProvider';
import Image from 'next/image';
import Link from 'next/link';
import Search from '../../assets/search.svg';

export default function Component() {
	const searchParams = useSearchParams();
	const category = searchParams.get('cat');
	console.log(category);
	const router = useRouter();

	const clothes = useClothes();
	const { hasFavourite, setFavouritesClothes } = useFavourites();
	const { hasCart, setCartClothes } = useCart();

	const [searchInputQuery, setSearchInputQuery] = useState('');

	const searchClothes = searchInputQuery
		? clothes.filter((clothe) => clothe.title.toLowerCase().includes(searchInputQuery.toLowerCase()))
		: clothes;

	const queryClothes = category ? searchClothes.filter((clothe) => clothe.category.includes(category)) : searchClothes;

	const deleteCatQuery = () => {
		const params = new URLSearchParams(searchParams.toString());
		if (params.size === 0) return
		console.log(params);
		params.delete('cat');

		router.replace(`${window.location.pathname}?${params.toString()}`);
		console.log(`${window.location.pathname}?${params.toString()}`);
	};

	return (
		<section className="flex justify-center py-8 lg:py-15">
			{/* <aside className="max-w-66.5"></aside> */}
			<div className="flex flex-col justify-center items-center sm:block max-w-219 w-full">
				<h2 className="font-bold text-[20px] tracking-[0.05em] uppercase mb-3.5">products</h2>
				<div className="flex flex-col sm:flex-row items-center gap-10 mb-10">
					<form role="search" className="flex items-center gap-4 bg-[#d9d9d9] p-4 max-w-92 w-full">
						<Image src={Search} alt="Search" />
						<input
							type="search"
							placeholder="Search"
							value={searchInputQuery}
							aria-label="Search products"
							className="flex-1 bg-transparent outline-none placeholder:text-black/60 text-black [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
							onChange={(e) => setSearchInputQuery(e.target.value)}
						/>
					</form>
					<div className="flex justify-between gap-3.5 flex-1">
						<div className="flex flex-col gap-0.5">
							<Link
								className="uppercase text-[10px] h-6 leading-6 border border-black w-25 text-center hover:border-black/40 hover:text-black/40 active:border-black/10 active:text-black/60 active:translate-y-0.5 active:translate-x-0.5 component-transition-short"
								href="?cat=Jackets"
							>
								Jackets
							</Link>
							<Link
								className="uppercase text-[10px] h-6 leading-6 border border-black w-25 text-center hover:border-black/40 hover:text-black/40 active:border-black/10 active:text-black/60 active:translate-y-0.5 active:translate-x-0.5 component-transition-short"
								href="?cat=Jeans"
							>
								Jeans
							</Link>
						</div>
						<div className="flex flex-col gap-0.5">
							<Link
								className="uppercase text-[10px] h-6 leading-6 border border-black w-25 text-center hover:border-black/40 hover:text-black/40 active:border-black/10 active:text-black/60 active:translate-y-0.5 active:translate-x-0.5 component-transition-short"
								href="?cat=Parfums"
							>
								Parfums
							</Link>
							<Link
								className="uppercase text-[10px] h-6 leading-6 border border-black w-25 text-center hover:border-black/40 hover:text-black/60 active:border-black/10 active:text-black/40 active:translate-y-0.5 active:translate-x-0.5 component-transition-short"
								href="?cat=T-shirts"
							>
								T-shirts
							</Link>
						</div>
						<button
							className="uppercase text-[10px] h-12.5 border border-black w-20 sm:w-25 text-center hover:border-black/40 hover:text-black/40 active:border-black/10 active:text-black/60 active:translate-y-0.5 active:translate-x-0.5 component-transition-short flex-1"
							onClick={deleteCatQuery}
						>
							Reset Category
						</button>
					</div>
				</div>
				<div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
					{queryClothes.map((clothe) => (
						<div className="max-w-76.25 w-full" key={clothe.id}>
							<div className="border border-black/40 mb-3.5 relative h-78.25">
								<Link href={`/products/${clothe.id}`}>
									<Image src={clothe.images.at(0)} alt={clothe.title} fill className="object-cover" />
								</Link>
								<div className="flex justify-center gap-2.5 absolute bottom-2.5 left-0 right-0">
									<button
										className={`w-8.5 h-8.5 text-[#0c0c0c] bg-[#dcdcdc] hover:text-[#0c0c0c]/80 hover:bg-[#dcdcdc]/80 component-transition ${
											hasCart(String(clothe.id)) ? 'bg-[#d9d9d9]/80 cursor-not-allowed' : 'bg-[#d9d9d9]'
										}`}
										onClick={() => setCartClothes(String(clothe.id))}
										disabled={hasCart(String(clothe.id))}
									>
										+
									</button>
									<button
										className={`flex items-center justify-center uppercase text-[12px] w-8.5 h-8.5 hover:bg-[#d9d9d9]/80 group component-transition ${
											hasFavourite(String(clothe.id)) ? 'bg-[#d9d9d9]/80 cursor-not-allowed' : 'bg-[#d9d9d9]'
										}`}
										onClick={() => setFavouritesClothes(String(clothe.id))}
										disabled={hasFavourite(String(clothe.id))}
									>
										<div
											className={`mask-[url("@/assets/favourites.svg")] mask-center mask-no-repeat mask-contain w-4 h-4 group-hover:bg-black/80 component-transition ${
												hasFavourite(String(clothe.id)) ? 'bg-black/80' : 'bg-black'
											}`}
										></div>
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
			</div>
		</section>
	);
}
