import Image from "next/image";

export default function HomeApproach() {
	return (
		<section className="flex flex-col items-center py-15 leading-[83%] scroll-mt-37.5 text-center" id="approach">
			<h2 className="font-normal text-2xl lg:text-5xl uppercase tracking-[0.04em] mb-3.5">Our Approach to fashion design</h2>
			<p className="tracking-[0.12em] font-light text-center max-w-172.5 mb-25">at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish</p>
			<div className="grid grid-cols-2 gap-4 lg:flex lg:gap-9">
				<Image src="/approach-1.png" alt="Our approach" width={317} height={389} className="mb-18" loading="lazy"/>
				<Image src="/approach-2.png" alt="Our approach" width={317} height={389} className="mt-18" loading="lazy"/>
				<Image src="/approach-3.png" alt="Our approach" width={317} height={389} className="mb-18" loading="lazy"/>
				<Image src="/approach-4.png" alt="Our approach" width={317} height={389} className="mt-18" loading="lazy"/>
			</div>
		</section>
	);
}