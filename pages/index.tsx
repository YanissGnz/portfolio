import Image from "next/image";
import { Montserrat } from "next/font/google";

import Header from "@/components/Header";

import About from "@/components/About";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

const openSans = Montserrat({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex flex-col items-center justify-between  ${openSans.className}`}
		>
			<Header />
			<Intro />
			<About />
			<Skills />
			<Education />
			<Work />
			<Contact />
		</main>
	);
}
