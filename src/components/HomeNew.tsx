'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
import { useClothes } from '../contexts/ClothesContextProvider';
import Image from 'next/image';
import { useRef } from 'react';

export default function HomeNew() {
	const clothes = useClothes();

	const prevNewRef = useRef(null);
	const nextNewRef = useRef(null);

	return (
		<section className="flex flex-col py-15 scroll-mt-37.5" id="new">
			<h2 className="text-5xl font-extrabold tracking-[0.04em] leading-[83%] uppercase max-w-70.75 mb-7.5">
				New <strong className="sm:text-nowrap">this week</strong>
			</h2>
			{/* <div className="flex flex-col items-center"> */}
			<Swiper
				key="new-slider"
				modules={[Navigation]}
				onBeforeInit={(swiper) => {
					// @ts-ignore
					swiper.params.navigation.prevEl = prevNewRef.current;
					// @ts-ignore
					swiper.params.navigation.nextEl = nextNewRef.current;
				}}
				navigation={{
					prevEl: prevNewRef.current,
					nextEl: nextNewRef.current,
				}}
				slidesPerView={1}
				slidesPerGroup={1}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 12,
					},
					1024: {
						slidesPerView: 4,
						slidesPerGroup: 2,
						spaceBetween: 18,
					},
				}}
				initialSlide={0}
				grabCursor
				loop={true}
				className="flex justify-center max-w-323.75 w-full mb-7.5"
			>
				{clothes.map((clothe, index) => (
					<>
						<SwiperSlide key={clothe.id} className="w-76.25">
							<div className="border border-black/40 mb-3.5 relative h-78.25">
								<Image src={clothe.images.at(0)} alt={clothe.title} fill className="object-cover object-center" />
								<button
									className="w-8.5 h-8.5 text-[#0c0c0c] bg-[#dcdcdc] absolute bottom-0 left-0 right-0 mx-auto"
								>
									+
								</button>
							</div>
							<div className="flex justify-between text-[14px] px-2.5">
								<p>{clothe.title}</p>
								<p className="text-[20px]">{clothe.price}$</p>
							</div>
						</SwiperSlide>
					</>
				))}
			</Swiper>
			<div className="flex justify-center">
				<button
					ref={prevNewRef}
					className="flex items-center justify-center h-10 w-10 border-2 border-black/60 hover:border-black/40 group component-transition mr-3"
				>
					<div className='bg-[#1e1e1e] group-hover:bg-black/60 mask-[url("../assets/hero-slider-prev-arr.svg")] mask-no-repeat mask-center mask-contain w-1.75 h-3.25 component-transition'></div>
				</button>
				<button
					ref={nextNewRef}
					className="flex items-center justify-center h-10 w-10 border-2 border-black/60 hover:border-black/40 group component-transition"
				>
					<div className='bg-[#1e1e1e] group-hover:bg-black/60 mask-[url("../assets/hero-slider-next-arr.svg")] mask-no-repeat mask-center mask-contain w-1.75 h-3.25 component-transition'></div>
				</button>
			</div>
			{/* </div> */}
		</section>
	);
}
