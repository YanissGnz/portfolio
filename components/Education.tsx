import React from "react";

function Education() {
	return (
		<div className="mt-32 flex flex-col items-center gap-10 w-full px-5 md:px-16">
			<h1 className="text-4xl font-bold text-center">My Education</h1>
			<div className="w-full space-y-2">
				<span className="bg-blue-700/40 p-1 rounded text-blue-200">
					2020 - 2023
				</span>
				<div className="text-2xl font-medium">
					Master&apos;s Degree in Information Systems and Web development
				</div>
				<p>Higher School Of Computer Science</p>
			</div>
			<div className="w-full space-y-2">
				<span className="bg-blue-700/40 p-1 rounded text-blue-200">
					2018 - 2023
				</span>
				<div className="text-2xl font-medium">
					Engineering Degree in Computer Science
				</div>
				<p>Higher School Of Computer Science</p>
			</div>
			<div className="w-full space-y-2">
				<span className="bg-blue-700/40 p-1 rounded text-blue-200">2018</span>
				<div className="text-2xl font-medium">High School Diploma</div>
				<p>Belkbir High School</p>
			</div>
		</div>
	);
}

export default Education;
