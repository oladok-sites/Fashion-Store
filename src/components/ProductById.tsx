'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useClothes } from '@/contexts/ClothesContextProvider';
import type { Clothe } from '@/contexts/ClothesContextProvider';
import { useFavourites } from '@/contexts/FavouritesContextProvider';
import Modal from 'react-modal';
import Image from 'next/image';

export default function Component() {
	const { id } = useParams<{ id: string }>();
	const clothes = useClothes();
	const product: Clothe[] = clothes.filter((clothe) => clothe.id.toString() === id);

	const { hasFavourite, setFavouritesClothes } = useFavourites();

	const [expanded, setExpanded] = useState(false);

	const [isOpen, setIsOpen] = useState(false);
	const [activeImage, setActiveImage] = useState<string | null>(null);

	const openModal = (src: string) => {
		setActiveImage(src);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setActiveImage(null);
	};

	useEffect(() => {
		Modal.setAppElement('body');
	}, []);

	return (
		<>
			{product.map((product) => (
				<section className="flex items-center justify-center py-15 gap-25" key={product.id}>
					<Image
						className="border border-[#d9d9d9]"
						src={product.images[0]}
						width={367}
						height={438}
						alt={product.title}
						onClick={() => openModal(product.images[0])}
					/>
					{product.images.length !== 1 && (
						<div className="flex flex-col gap-3">
							{product.images.slice(1).map((image, index) => (
								<Image
									key={index}
									className="border border-[#d9d9d9]"
									src={image}
									width={62}
									height={75}
									alt="Image"
									onClick={() => openModal(image)}
								/>
							))}
						</div>
					)}
					<div className="max-w-76.5 text-[14px] tracking-[0.07em] p-10 border-2 border-[#d9d9d9]">
						<h1 className="mb-2">{product.title}</h1>
						<p className="text-[20px] font-semibold mb-10">{product.price}$</p>
						<div className="mb-12.5">
							<p className={`text-[12px] tracking-[0.08em] ${expanded ? '' : 'line-clamp-3'}`}>{product.description}</p>
							<button onClick={() => setExpanded((prev) => !prev)} className="text-sm text-blue-600 hover:underline mt-1">
								{expanded ? 'Show less' : 'Show more'}
							</button>
						</div>
						<div className="flex">
							<button
								className={`uppercase text-[12px] bg-[#d9d9d9] h-10 leading-10 mr-1.5 hover:bg-[#d9d9d9]/60 hover:text-black/60 component-transition ${
									hasFavourite(String(product.id)) ? 'px-12' : 'px-17'
								}`}
							>
								add
							</button>
							<button
								className="uppercase text-[12px] bg-[#d9d9d9] h-10 leading-10 px-5 hover:bg-[#d9d9d9]/60 hover:text-[#0c0c0c]/60 group component-transition"
								onClick={() => setFavouritesClothes(id)}
							>
								{hasFavourite(String(product.id)) ? (
									<p>remove</p>
								) : (
									<div className='bg-black mask-[url("@/assets/favourites.svg")] mask-center mask-no-repeat mask-contain w-4 h-4 group-hover:bg-black/60 component-transition'></div>
								)}
							</button>
						</div>
					</div>
				</section>
			))}
			<Modal
				isOpen={isOpen}
				onRequestClose={closeModal}
				overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
				className="relative outline-none max-w-[90vw] max-h-[90vh]"
			>
				{activeImage && (
					<div className="relative">
						<img src={activeImage} alt="" width={900} height={900} className="object-contain max-h-[90vh] w-auto" />
					</div>
				)}
			</Modal>
		</>
	);
}
