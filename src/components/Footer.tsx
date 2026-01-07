import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
	subsets: ['latin'],
});

export default function Footer() {
	return (
		<footer className={`${inter.className} w-full bg-[url('/footer-bg.png')]`}>
			<div className="flex flex-col lg:flex-row justify-center items-center px-4 py-10 lg:h-140">
				{/* <div className="flex flex-row lg:flex-col justify-between max-w-100 w-full uppercase px-5 lg:px-0 mb-10 lg:mg-0"> */}
					<nav className='lg:mb-15 uppercase lg:mr-100'>
						<h3 className="text-[10px] leading-[140%] text-[#787878] mb-7.5">Info</h3>
						<ul className='text-[12px] leading-[130%]'>
							{/* className={`${newsreader.className}`} */}
							<li>
								<Link className='hover:underline' href="/pricing">Pricing</Link>
							</li>
							<li>
								<Link className='hover:underline' href="/about">About</Link>
							</li>
							<li>
								<Link className='hover:underline' href="/contacts">Contacts</Link>
							</li>
						</ul>
					</nav>
					{/* <nav>
						<h3 className="text-[10px] leading-[140%] text-[#787878] mb-7.5">Languages</h3>
						<ul className='text-[12px] leading-[130%]'>
							<li>
								<Link className='hover:underline' href="/pricing">en</Link>
							</li>
							<li>
								<Link className='hover:underline' href="/about">esp</Link>
							</li>
							<li>
								<Link className='hover:underline' href="/contacts">ua</Link>
							</li>
						</ul>
					</nav> */}
				{/* </div> */}
				<Image src="/footer-pic.svg" alt="XIV QR" width={345} height={243} className='order-first lg:order-0 hidden lg:block' />
			</div>
			<p className='text-[10px] text-[#1e1e1e] text-center'>&copy; 2024 — copyright</p>
		</footer>
	);
}
