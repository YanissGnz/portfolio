import React from "react";

function About() {
	return (
		<div
			id="about"
			className="flex items-center justify-center w-screen px-5 md:px-16 scroll-m-16"
		>
			<p className="md:max-w-4xl leading-10 text-lg text-center text-gray-600 dark:text-gray-400">
				I&apos;m{" "}
				<span className="text-black dark:text-white underline underline-offset-2 decoration-2">
					Guendouzi Mohamed Yaniss
				</span>
				, a computer science graduate and accomplished{" "}
				<span className="text-black dark:text-white underline underline-offset-2 decoration-2">
					front-end developer
				</span>{" "}
				with over{" "}
				<span className="text-black dark:text-white underline underline-offset-2 decoration-2">
					5 years of experience
				</span>
				. My focus is on utilizing{" "}
				<span className="text-black dark:text-white underline underline-offset-2 decoration-2">
					React and Next.js
				</span>{" "}
				to craft{" "}
				<span className="text-black dark:text-white underline underline-offset-2 decoration-2">
					immersive web experiences
				</span>
				. With a strong foundation in computer science, I&apos;m driven to
				create user-friendly and visually impressive applications. My goal is to
				continually push the boundaries of web development and contribute
				meaningful solutions to the digital landscape.
			</p>
		</div>
	);
}

export default About;
