import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Icon } from "@iconify/react";

function Header() {
	const { theme, setTheme } = useTheme();

	return (
		<header className="w-screen fixed flex items-center justify-between top-0 left-0 px-24 py-4 z-10 bg-[--background-start-rgb] backdrop-blur-md">
			{" "}
			<nav className=" items-center gap-10 hidden lg:flex">
				<Link
					href="#home"
					className="relative before:w-0 before:bottom-0 rounded-full hover:before:w-full before:transition-all before:bg-blue-500  dark:before:bg-blue-200 before:h-0.5 before:absolute"
				>
					Home
				</Link>
				<Link
					href="#about"
					className="relative before:w-0 before:bottom-0 rounded-full hover:before:w-full before:transition-all before:bg-blue-500  dark:before:bg-blue-200 before:h-0.5 before:absolute"
				>
					About
				</Link>
				<Link
					href="#work"
					className="relative before:w-0 before:bottom-0 rounded-full hover:before:w-full before:transition-all before:bg-blue-500  dark:before:bg-blue-200 before:h-0.5 before:absolute"
				>
					Work
				</Link>
				<Link
					href="#contact"
					className="relative before:w-0 before:bottom-0 rounded-full hover:before:w-full before:transition-all before:bg-blue-500  dark:before:bg-blue-200 before:h-0.5 before:absolute"
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
				<button
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className="ml-5 hover:text-blue-500"
				>
					<Icon
						icon={
							theme === "dark" ? "ic:baseline-light-mode" : "ic:round-dark-mode"
						}
						height={24}
					/>
				</button>
			</div>
		</header>
	);
}

export default Header;
