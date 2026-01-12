'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
import Link from 'next/link';
import Search from '../../assets/search.svg';
import Arrow from '../../assets/arrow-to-shop.svg';
import Image from 'next/image';
import { useRef, useState } from 'react';
import type { Product } from '../../../types/types';


export default function HomeHeroClient({ products }: { products: Product[] }) {
	const prevHeroRef = useRef(null);
	const nextHeroRef = useRef(null);

	const [isOpen, setIsOpen] = useState(false);

	const [searchInputQuery, setSearchInputQuery] = useState('');
	const searchProducts = searchInputQuery
		? products.filter((product) => product.title.toLowerCase().includes(searchInputQuery.toLowerCase()))
		: products;

	return (
		<>
			<section
				className="flex flex-col items-center lg:justify-between lg:flex-row py-8 lg:py-15 scroll-mt-14 lg:scroll-mt-37.5"
				id="collections"
			>
				<div className="mr-3">
					<div className="relative max-w-92 w-full mb-25">
						<form role="search" className="flex items-center gap-4 bg-[#d9d9d9] p-4 w-full">
							<Image src={Search} alt="Search" />
							<input
								type="search"
								placeholder="Search"
								aria-label="Search products"
								className="flex-1 bg-transparent outline-none placeholder:text-black/60 text-black [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
								onChange={(e) => {
									setSearchInputQuery(e.target.value);
									setIsOpen(true);
								}}
								onFocus={() => setIsOpen(true)}
								onBlur={() => setTimeout(() => setIsOpen(false), 100)}
							/>
						</form>

						{isOpen && (
							<ul className="absolute top-full left-0 w-full bg-white border border-black/10 shadow-lg z-50 max-h-80 overflow-auto">
								{searchProducts.length !== 0 ? (
									searchProducts.map((product) => (
										<Link key={product.id} href={`products/${product.id}`}>
											<li className="flex justify-between items-center p-4 hover:bg-black/5 cursor-pointer transition">
												<p>{product.title}</p>
												<Image src={product.images[0]} width={20} height={30} alt={product.title} />
											</li>
										</Link>
									))
								) : (
									<li className="p-4 text-black/50">Nothing found</li>
								)}
							</ul>
						)}
					</div>
					<h2 className="text-3xl lg:text-5xl font-extrabold leading-[90%] lg:leading-[83%] uppercase max-w-full lg:max-w-85 mb-2">
						New colletion
					</h2>
					<p className="font-normal tracking-[0.12em] max-w-22 lg:mb-52">Winter 2026</p>
					<div className="flex items-center mb-15 lg:mb-0">
						<Link
							href="/products"
							className="hidden lg:flex items-center justify-between min-w-66.5 h-10 leading-10 pr-6.5 pl-7.5 bg-[#d9d9d9] mr-10 group"
						>
							<p className="">Go To Shop</p>
							<Image src={Arrow} alt="Arrow" />
						</Link>
						<div className="hidden lg:flex">
							<button
								ref={prevHeroRef}
								className="flex items-center justify-center h-10 w-10 border-2 border-black/60 hover:border-black/40 group component-transition mr-3"
							>
								<div className='bg-[#1e1e1e] group-hover:bg-black/60 mask-[url("../assets/hero-slider-prev-arr.svg")] mask-no-repeat mask-center mask-contain w-1.75 h-3.25 component-transition'></div>
							</button>
							<button
								ref={nextHeroRef}
								className="flex items-center justify-center h-10 w-10 border-2 border-black/60 hover:border-black/40 group component-transition"
							>
								<div className='bg-[#1e1e1e] group-hover:bg-black/60 mask-[url("../assets/hero-slider-next-arr.svg")] mask-no-repeat mask-center mask-contain w-1.75 h-3.25 component-transition'></div>
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center max-w-102.5 w-full lg:max-w-194 mb-6 lg:mb-0 lg:mt-auto">
					<Swiper
						key="hero-slider"
						modules={[Navigation]}
						onBeforeInit={(swiper) => {
							// @ts-ignore
							swiper.params.navigation.prevEl = prevHeroRef.current;
							// @ts-ignore
							swiper.params.navigation.nextEl = nextHeroRef.current;
						}}
						navigation={{
							prevEl: prevHeroRef.current,
							nextEl: nextHeroRef.current,
						}}
						spaceBetween={10}
						slidesPerView={2}
						slidesPerGroup={1}
						breakpoints={{
							640: {
								spaceBetween: 10,
							},
						}}
						initialSlide={5}
						grabCursor
						loop={true}
						className="w-full"
					>
						{products.map((product, index) => (
							<SwiperSlide key={index} className="">
								<div className="border border-black/40 mb-3.5 relative max-w-42 w-full h-43.25 lg:max-w-none lg:w-91.5 lg:h-91.75">
									<Image
										src={product.images[0]}
										alt={product.title}
										// width={366}
										// height={367}
										fill
										className="object-cover w-42 h-43.25 lg:w-91.5 lg:h-91.75"
										loading='lazy'
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<Link
						href="/products"
						className="flex lg:hidden items-center justify-between max-w-66.5 w-full h-10 leading-10 pr-6.5 pl-7.5 bg-[#d9d9d9] lg:mr-10 group"
					>
						<p className="">Go To Shop</p>
						<Image src={Arrow} alt="Arrow" />
					</Link>
				</div>
			</section>
		</>
	);
}
