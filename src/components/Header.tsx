'use client';

import Image from 'next/image';
import Logo from '../assets/Shop-logo.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, UserProfile } from '@clerk/nextjs';
// import { useState } from 'react';
import Modal from 'react-modal';

export default function Header() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	// const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	useEffect(() => {
		Modal.setAppElement('body');
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
	}, [menuOpen]);

	return (
		// <header className="w-full sticky top-0 z-50 bg-[url('/body-bg.png')] border-b-2 border-b-[#d9d9d9] ">
		// 	<div className="max-w-330 mx-auto px-5">
		// 		<div className="flex items-center justify-between h-37.5">
		<header className="w-full sticky top-0 z-50 bg-[url('/body-bg.png')] border-b-2 border-[#d9d9d9]">
			<div className="max-w-330 mx-auto px-5">
				<div className="flex items-center justify-center sm:justify-between h-25 lg:h-37.5">
					<div
						className={`flex items-center justify-center fixed top-25 left-0 right-0 bottom-0 bg-[url('/body-bg.png')] outline-none component-transition scroll-auto max-h-screen ${
							menuOpen ? 'translate-x-0' : 'translate-x-full'
						}`}
					>
						<nav className="flex flex-col gap-6 uppercase tracking-widest">
							<Link className="active:underline" href="/" onClick={() => setMenuOpen(false)}>
								Home
							</Link>
							<Link className="active:underline" href="/#approach" onClick={() => setMenuOpen(false)}>
								Approach
							</Link>
							<div className="flex flex-col gap-6 pt-6 border-t-2 border-[#d9d9d9]">
								<Link className="active:underline" href="/products" onClick={() => setMenuOpen(false)}>
									Products
								</Link>
								<Link className="active:underline sm:hidden" href="/favourites" onClick={() => setMenuOpen(false)}>
									Favourites
								</Link>
								<Link className="active:underline sm:hidden" href="/cart" onClick={() => setMenuOpen(false)}>
									Cart
								</Link>
							</div>
							<div className="flex flex-col gap-6 pt-6 border-t-2 border-[#d9d9d9]">
								<SignedIn>
									<Link className="active:underline" href="/admin" onClick={() => setMenuOpen(false)}>
										Admin
									</Link>
								</SignedIn>
								<SignedOut>
									<SignInButton mode="modal">
										<button className="active:underline uppercase tracking-widest text-start">Sign In</button>
									</SignInButton>
								</SignedOut>
								<SignedIn>
									<Link className="active:underline sm:hidden" href="/account" onClick={() => setMenuOpen(false)}>
										Account
									</Link>
									<SignOutButton>
										<button className="active:underline uppercase tracking-widest text-start sm:hidden">Sign Out</button>
									</SignOutButton>
								</SignedIn>
							</div>
							
						</nav>
					</div>
					<nav className="text-black hidden lg:flex tracking-widest gap-8.5">
						<Link className={`hover:underline ${pathname === '/' ? 'underline' : ''}`} href="/">
							Home
						</Link>
						<Link className={`hover:underline ${pathname === '/#approach' ? 'underline' : ''}`} href="/#approach">
							Approach
						</Link>
						<Link className={`hover:underline ${pathname === '/products' ? 'underline' : ''}`} href="/products">
							Products
						</Link>
						<SignedIn>
							<Link className={`hover:underline ${pathname === '/admin' ? 'underline' : ''}`} href="/admin">
								Admin
							</Link>
						</SignedIn>
						
					</nav>
					<button
						onClick={() => setMenuOpen((prev) => !prev)}
						className={`component-transition ${menuOpen ? 'rotate-45' : 'rotate-0'} lg:pointer-events-none`}
					>
						<Image src={Logo} width={35} height={35} className="lg:w-8.75 lg:h-8.75" alt="Shop logo" />
					</button>
					<nav className="hidden sm:flex items-center gap-3 lg:gap-11">
						<Link
							href="/favourites"
							className="bg-black hover:bg-transparent h-12.5 leading-12.5 px-2.5 rounded-full flex items-center component-transition border-4 border-black group"
						>
							<div className='bg-white group-hover:bg-black mask-[url("../assets/favourites.svg")] mask-no-repeat mask-center mask-contain h-5.5 w-5.5 component-transition' />
							{/* <Image className='peer-hover:' src={Heart} alt="Favourits" /> */}
						</Link>
						<Link
							href="/cart"
							className="relative flex items-center h-12 pl-6 pr-14 bg-black hover:bg-transparent border-2 border-black rounded-full component-transition group"
						>
							<span className="text-[12px] font-medium tracking-wide text-white group-hover:text-black component-transition">
								Cart
							</span>
							<span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white group-hover:bg-black component-transition">
								<div className='bg-black group-hover:bg-white mask-[url("../assets/cart.svg")] mask-no-repeat mask-center mask-contain h-4 w-5.5 component-transition' />
								{/* <Image src={Cart} alt="Cart" /> */}
							</span>
						</Link>
						<SignedOut>
							<SignInButton mode="modal">
								<button className="flex items-center px-7 h-12 leading-12 bg-black hover:bg-transparent border-2 border-black rounded-full text-[12px] font-medium text-white hover:text-black component-transition">
									Sign In
								</button>
							</SignInButton>
						</SignedOut>
						<SignedIn>
							<button className="bg-black hover:bg-transparent h-12.5 leading-12.5 px-2.5 rounded-full flex items-center component-transition border-4 border-black group">
								<p className="text-[12px] font-medium mr-2 text-white group-hover:text-black component-transition">
									Account
								</p>

								<UserButton />
							</button>
						</SignedIn>
					</nav>
				</div>
			</div>
		</header>
	);
}
