import React from "react";

function Skills() {
	return (
		<div className="mt-20 flex flex-col items-center gap-10 w-screen px-5 md:px-16 relative">
			<div className="top-2 left-1 flex place-items-center absolute h-[100px] w-[180px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl after:absolute after:-z-20 after:h-[280px] after:w-[240px] rotate-90 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40"></div>
			<h1 className="text-4xl font-bold text-center">My Skills</h1>
			<div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-14 w-full">
				<div className="flex items-center justify-between">
					<h1 className="font-medium">React / NextJs</h1>
					<p className="text-green-400 font-semibold">Expert</p>
				</div>
				<div className="flex items-center justify-between">
					<h1 className="font-medium">React Native</h1>
					<p className="text-orange-400 font-semibold">Intermediate</p>
				</div>
				<div className="flex items-center justify-between">
					<h1 className="font-medium">Typescript</h1>
					<p className="text-green-400 font-semibold">Expert</p>
				</div>
				<div className="flex items-center justify-between">
					<h1 className="font-medium">Redux</h1>
					<p className="text-green-400 font-semibold">Expert</p>
				</div>
				<div className="flex items-center justify-between">
					<h1 className="font-medium">Angular</h1>
					<p className="text-blue-400 font-semibold">Proficient</p>
				</div>
				<div className="flex items-center justify-between">
					<h1 className="font-medium">NodeJs</h1>
					<p className="text-blue-400 font-semibold">Skilled</p>
				</div>
			</div>
			<h1 className="text-4xl font-bold text-center mt-20">Extra Skills</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-14 w-full text-center">
				<h1 className="font-medium">Design Tools</h1>
				<h1 className="font-medium">Git / Github</h1>
				<h1 className="font-medium">TailwindCSS</h1>
				<h1 className="font-medium">Agile Tools</h1>
				<h1 className="font-medium">Docker / K8S</h1>
				<h1 className="font-medium">CI / CD</h1>
			</div>
			<h1 className="text-4xl font-bold text-center mt-20">My Soft Skills</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-14 w-full text-center">
				<h1 className="font-medium">Problem Solving</h1>
				<h1 className="font-medium">Adaptability</h1>
				<h1 className="font-medium">Teamwork</h1>
				<h1 className="font-medium">Creativity</h1>
				<h1 className="font-medium">Fast Delivery</h1>
				<h1 className="font-medium">Responsibility</h1>
			</div>
			<div className="top-3/4 right-20 flex place-items-center absolute  rounded-full rotate-180 to-transparent -z-20 h-[180px] w-[340px] translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:bg-gradient-to-br dark:to-blue-700/10 dark:from-sky-900 dark:via-[#0141ff]/40"></div>
		</div>
	);
}

export default Skills;
