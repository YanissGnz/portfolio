import Link from "next/link";

function Contact() {
	return (
		<div id="contact" className="mt-32 w-full px-5 md:px-16 pb-16 relative">
			<div className="top-3/4 left-5 flex place-items-center absolute rounded-full to-transparent -z-20 h-[150px] w-[140px] translate-x-1/3 bg-gradient-conic from-sky-300 via-blue-300 blur-2xl dark:bg-gradient-to-br dark:to-blue-700/10 dark:from-sky-900 dark:via-[#0141ff]/40"></div>
			<h1 className="text-4xl font-bold text-center mb-2">Contact Info</h1>
			<p className="text-center">
				Feel free to reach out for collaborations or just a friendly hello.
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
				<div>
					<h6 className="font-medium">Email</h6>
					<a
						href="mailto:guendouziyaniss@gmail.com"
						className="hover:underline"
						target="_blank">
						guendouziyaniss@gmail.com
					</a>
				</div>
				<div>
					<h6 className="font-medium">Phone</h6>
					<p>+213 542 662 874</p>
					<p>+971 583 061 668</p>
				</div>
				<div>
					<h6 className="font-medium">LinkedIn</h6>
					<Link
						href="https://www.linkedin.com/in/guendouziyaniss/"
						className="hover:underline"
						target="_blank">
						@guendouziyaniss
					</Link>
				</div>
				<div>
					<h6 className="font-medium">Github</h6>
					<Link
						href="https://github.com/YanissGnz"
						className="hover:underline"
						target="_blank">
						@YanissGnz
					</Link>
				</div>
				<div>
					<h6 className="font-medium">Fiverr</h6>
					<Link
						href="https://www.fiverr.com/yanissgnz"
						className="hover:underline"
						target="_blank">
						@yanissgnz
					</Link>
				</div>
				<div>
					<h6 className="font-medium">Upwork</h6>
					<Link
						href="https://www.upwork.com/freelancers/~0126fe2ee6278b952a"
						className="hover:underline"
						target="_blank">
						@Yaniss G.
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Contact;
