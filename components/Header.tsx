import React from "react";
import Link from "next/link";

import { Icon } from "@iconify/react";

function Header() {
	return (
		<header className="w-screen fixed flex items-center justify-between top-0 left-0 px-24 py-4 z-10 bg-[--background-start-rgb] backdrop-blur-md">
			{" "}
			<nav className=" items-center gap-10 hidden lg:flex">
				<Link
					href="#home"
					className="relative before:w-0 before:bottom-0 rounded-full hover:before:w-full before:transition-all  before:bg-white before:h-0.5 before:absolute"
				>
					Home
				</Link>
				<Link
					href="#about"
					className="relative before:w-0 before:bottom-0 rounded-full hover:before:w-full before:transition-all  before:bg-white before:h-0.5 before:absolute"
				>
					About
				</Link>
				<Link
					href="#work"
					className="relative before:w-0 before:bottom-0 rounded-full hover:before:w-full before:transition-all  before:bg-white before:h-0.5 before:absolute"
				>
					Work
				</Link>
				<Link
					href="#contact"
					className="relative before:w-0 before:bottom-0 rounded-full hover:before:w-full before:transition-all  before:bg-white before:h-0.5 before:absolute"
				>
					Contact
				</Link>
			</nav>
			<div className="flex items-center gap-5">
				<Link
					href="https://www.facebook.com/YanissGnendouzi/"
					className="hover:text-blue-500"
				>
					<Icon icon="gg:facebook" height={24} />
				</Link>
				<Link
					href="https://www.instagram.com/yanissguendouzi/"
					className="hover:text-blue-500"
				>
					<Icon icon="mdi:instagram" height={24} />
				</Link>
				<Link
					href="https://www.linkedin.com/in/guendouziyaniss/"
					className="hover:text-blue-500"
				>
					<Icon icon="ri:linkedin-fill" height={24} />
				</Link>
				<Link
					href="https://www.fiverr.com/yanissgnz"
					className="hover:text-blue-500"
				>
					<Icon icon="jam:fiverr" height={24} />
				</Link>
				<Link
					href="https://www.upwork.com/freelancers/~0126fe2ee6278b952a"
					className="hover:text-blue-500"
				>
					<Icon icon="simple-icons:upwork" height={24} />
				</Link>
			</div>
		</header>
	);
}

export default Header;
