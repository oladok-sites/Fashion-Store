import HomeApproach from "@/components/HomeApproach";
import HomeHero from "@/components/HomeHero";
import HomeNew from "@/components/HomeNew";

export default async function Home() {
	return (
		<>
			<HomeHero />
			<HomeNew />
			<HomeApproach />
		</>
	);
}
