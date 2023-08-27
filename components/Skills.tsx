import React from "react";
import CountUp from "react-countup";

import { Progress } from "./ui/Progress";

function Skills() {
	return (
		<div className="mt-20 flex flex-col items-center gap-10 w-screen px-5 md:px-16 relative">
			<div className="top-2 left-1 flex place-items-center absolute h-[100px] w-[180px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl after:absolute after:-z-20 after:h-[280px] after:w-[240px] rotate-90 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40"></div>
			<h1 className="text-4xl font-bold text-center">My Skills</h1>
			<div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 w-full">
				<div className="w-full">
					<h1 className="font-medium">React</h1>
					<div className="flex items-center gap-2">
						<Progress progress={98} />
						<p className="font-medium">
							<CountUp end={98} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
				<div className="w-full">
					<h1 className="font-medium">NextJs</h1>
					<div className="flex items-center gap-2">
						<Progress progress={95} />
						<p className="font-medium">
							<CountUp end={95} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
				<div className="w-full">
					<h1 className="font-medium">HTML / CSS / JS</h1>
					<div className="flex items-center gap-2">
						<Progress progress={95} />
						<p className="font-medium">
							<CountUp end={95} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
				<div className="w-full">
					<h1 className="font-medium">Typescript</h1>
					<div className="flex items-center gap-2">
						<Progress progress={98} />
						<p className="font-medium">
							<CountUp end={98} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
				<div className="w-full">
					<h1 className="font-medium">Angular</h1>
					<div className="flex items-center gap-2">
						<Progress progress={75} />
						<p className="font-medium">
							<CountUp end={75} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
				<div className="w-full">
					<h1 className="font-medium">Redux</h1>
					<div className="flex items-center gap-2">
						<Progress progress={95} />
						<p className="font-medium">
							<CountUp end={95} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
				<div className="w-full">
					<h1 className="font-medium">Tailwind</h1>
					<div className="flex items-center gap-2">
						<Progress progress={99} />
						<p className="font-medium">
							<CountUp end={99} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
				<div className="w-full">
					<h1 className="font-medium">NodeJs</h1>
					<div className="flex items-center gap-2">
						<Progress progress={80} />
						<p className="font-medium">
							<CountUp end={80} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
				<div className="w-full">
					<h1 className="font-medium">MySQL</h1>
					<div className="flex items-center gap-2">
						<Progress progress={75} />
						<p className="font-medium">
							<CountUp end={75} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
				<div className="w-full">
					<h1 className="font-medium">MongoDB</h1>
					<div className="flex items-center gap-2">
						<Progress progress={75} />
						<p className="font-medium">
							<CountUp end={75} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
				<div className="w-full">
					<h1 className="font-medium">SpringBoot</h1>
					<div className="flex items-center gap-2">
						<Progress progress={75} />
						<p className="font-medium">
							<CountUp end={75} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
				<div className="w-full">
					<h1 className="font-medium">Python</h1>
					<div className="flex items-center gap-2">
						<Progress progress={75} />
						<p className="font-medium">
							<CountUp end={75} enableScrollSpy scrollSpyOnce duration={1} />%
						</p>
					</div>
				</div>
			</div>
			<h1 className="text-4xl font-bold text-center mt-20">Extra Skills</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-14 w-full text-center">
				<h1 className="font-medium">Design Tools</h1>
				<h1 className="font-medium">Responsive Web Design</h1>
				<h1 className="font-medium">Version Control (Git)</h1>
				<h1 className="font-medium">Unit Testing</h1>
				<h1 className="font-medium">RESTful API Design</h1>
				<h1 className="font-medium">UI/UX Design Principles</h1>
				<h1 className="font-medium">Performance Optimization</h1>
				<h1 className="font-medium">Docker</h1>
				<h1 className="font-medium">CI/CD</h1>
				<h1 className="font-medium">Agile/Scrum Methodologies</h1>
				<h1 className="font-medium">Microservices</h1>
				<h1 className="font-medium">Search Engine Optimization (SEO)</h1>
			</div>
			<h1 className="text-4xl font-bold text-center mt-20">My Soft Skills</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-14 w-full text-center">
				<h1 className="font-medium">Communication</h1>
				<h1 className="font-medium">Problem Solving</h1>
				<h1 className="font-medium">Adaptability</h1>
				<h1 className="font-medium">Attention to Detail</h1>
				<h1 className="font-medium">Time Management</h1>
				<h1 className="font-medium">Leadership</h1>
				<h1 className="font-medium">Teamwork</h1>
				<h1 className="font-medium">Creativity</h1>
				<h1 className="font-medium">Empathy</h1>
				<h1 className="font-medium">Continuous Learning</h1>
				<h1 className="font-medium">Fast Delivery</h1>
				<h1 className="font-medium">Responsibility</h1>
			</div>
			<div className="top-3/4 right-20 flex place-items-center absolute  rounded-full rotate-180 to-transparent -z-20 h-[180px] w-[340px] translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:bg-gradient-to-br dark:to-blue-700/10 dark:from-sky-900 dark:via-[#0141ff]/40"></div>
		</div>
	);
}

export default Skills;
