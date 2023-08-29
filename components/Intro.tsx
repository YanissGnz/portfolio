import React from "react";
import Image from "next/image";

import profileImage from "@/public/assets/profile_pic.png";

function Intro() {
	return (
		<div
			id="home"
			className="h-screen w-screen flex flex-col items-center justify-center relative pt-16"
		>
			<div className="-top-20 left-40 flex place-items-center absolute h-[400px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl after:absolute after:-z-20 after:h-[280px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-300 after:via-blue-300 after:blur-2xl after dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40"></div>
			<div className="top-3/4 right-20 flex place-items-center absolute  rounded-full  to-transparent -z-20 h-[180px] w-[240px] translate-x-1/3 bg-gradient-conic from-sky-300 via-blue-300 blur-2xl dark:bg-gradient-to-br dark:to-blue-700/10 dark:from-sky-900 dark:via-[#0141ff]/40"></div>

			<div className="relative aspect-square h-56 w-56 mb-10">
				<div className="absolute flex place-items-center rounded-full to-transparent -z-20 h-60 w-60 bg-gradient-conic from-sky-500 via-blue-500 blur-2xl dark:bg-gradient-to-br dark:to-blue-700/10 dark:from-sky-500 dark:via-[#0033ff]/80"></div>
				<Image
					src={profileImage}
					alt="image"
					className=" rounded-full aspect-square object-cover bg-blue-300/10 dark:bg-blue-700/10"
				/>
			</div>
			<h1 className="text-3xl md:text-6xl font-light mb-3">Hi!, I&apos;m</h1>
			<h1 className="text-3xl md:text-6xl font-light mb-3">
				Guendouzi M. Yaniss
			</h1>
			<h1 className="text-3xl md:text-6xl font-bold mb-20">
				Front End Developer
			</h1>
		</div>
	);
}

export default Intro;
