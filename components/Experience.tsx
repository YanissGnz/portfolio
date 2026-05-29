function Experience() {
	return (
		<div className="mt-32 flex flex-col items-center gap-10 w-full px-5 md:px-16">
			<h1 className="text-4xl font-bold text-center">My Experience</h1>
			<ExperienceCard
				title="Frontend developer"
				company="Namla"
				date="Sep 2023 - Present"
				description="Currently working on the development of the Namla web application. A platform that manages the deployment of edge computing applications."
			/>
			<ExperienceCard
				title="Frontend developer"
				company="Postlyy"
				date="Nov 2023 - Jun 2024"
				description="Created and maintained the front-end of the Postlyy web application. A social media management tool that allows users to schedule and publish posts on multiple social media platforms."
			/>

			<ExperienceCard
				title="Frontend developer"
				company="PivotPoint BMS"
				date="Jan 2023 - Des 2023"
				description="Co-founded PivotPoint BMS, a Erp software for small and medium-sized businesses. Developed the front-end of the application using Next.js, Redux and Tailwind CSS."
			/>
			<ExperienceCard
				title="Full-Stack developer"
				company="Anti-Cancer Clinic"
				date="Jan 2022 - Dec 2022"
				description="Created a management solution for the anti-cancer clinic’s staff and patients, with statistics and staff activities tracking, with multi-account with different specialties and privileges chosen by the admin"
			/>
			<ExperienceCard
				title="Full-Stack developer"
				company="Unetech"
				date="Jan 2019 - Dec 2021"
				description="Participated in pre-project analysis and technical assessments to validate the creation of a user-friendly interface. Built reusable code to utilize for other projects and to minimize costs. Scheduled meetings with clients to discuss website design preferences and requirements."
			/>
		</div>
	);
}

export default Experience;

type ExperienceCardProps = {
	title: string;
	company: string;
	date: string;
	description: string;
};

const ExperienceCard = ({
	title,
	company,
	date,
	description,
}: ExperienceCardProps) => {
	return (
		<div className="w-full space-y-2">
			<span className="bg-blue-200/50 dark:bg-blue-700/40 p-1 rounded text-blue-600 dark:text-blue-200">
				{date}
			</span>
			<div className="text-2xl font-medium">{title}</div>
			<p>{company}</p>
			<p>{description}</p>
		</div>
	);
};
