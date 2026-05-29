import { Montserrat } from "next/font/google";

import Header from "@/components/Header";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

const openSans = Montserrat({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex flex-col items-center justify-between  ${openSans.className}`}>
			<Header />
			<Intro />
			<About />
			<Skills />
			<Education />
			<Experience />
			<Work />
			<Contact />
		</main>
	);
}
