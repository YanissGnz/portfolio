import Image from "next/image";
import Link from "next/link";

import bazzarShot from "@/public/assets/shots/bazzar_shot.png";
import clinicShot from "@/public/assets/shots/clinic_shot.png";
import homeArtShot from "@/public/assets/shots/home_art_shot.png";
import macosShot from "@/public/assets/shots/macos_shot.png";
import pivotpointbms from "@/public/assets/shots/pivotpointbms_shot.png";
import postlyy from "@/public/assets/shots/postlyy_shot.png";
import tesShot from "@/public/assets/shots/tes_shot.png";

function Work() {
	return (
		<div
			id="work"
			className="mt-32 flex flex-col items-center gap-10 w-screen px-5 md:px-16 relative scroll-m-16">
			<h1 className="text-4xl font-bold">My Work</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
				<Link href="https://postlyy.com" target="_blank">
					<Image src={postlyy} alt="postlyy" className="rounded-md mb-3" />
					<span className="bg-blue-200/50 dark:bg-blue-700/40 p-1 rounded text-blue-600 dark:text-blue-200">
						Nov 2023 - Present
					</span>
					<h6 className="text-lg font-semibold">Postlyy </h6>
					<p>
						All in one platform to create, schedule, and analyze content on X
						and LinkedIn.
					</p>
				</Link>{" "}
				<Link href="https://pivotpointbms.com" target="_blank">
					<Image
						src={pivotpointbms}
						alt="pivotpointbms"
						className="rounded-md mb-3"
					/>
					<span className="bg-blue-200/50 dark:bg-blue-700/40 p-1 rounded text-blue-600 dark:text-blue-200">
						Jan 2023 - dec 2023
					</span>
					<h6 className="text-lg font-semibold">PivotPoint BMS</h6>
					<p>An AI powered business management Website.</p>
				</Link>{" "}
				<Link href="https://pivotpointbms.com" target="_blank">
					<Image
						src={clinicShot}
						alt="pivotpointbms"
						className="rounded-md mb-3"
					/>
					<span className="bg-blue-200/50 dark:bg-blue-700/40 p-1 rounded text-blue-600 dark:text-blue-200">
						Jan 2022 - Jul 2022
					</span>
					<h6 className="text-lg font-semibold">Clinic Management System</h6>
					<p>
						A system for managing and tracking clinic staffs and and patients.
					</p>
				</Link>{" "}
				<Link
					href="https://github.com/YanissGnz/ecommerce_frontend"
					target="_blank">
					<Image
						src={bazzarShot}
						alt="pivotpointbms"
						className="rounded-md mb-3"
					/>
					<span className="bg-blue-200/50 dark:bg-blue-700/40 p-1 rounded text-blue-600 dark:text-blue-200">
						Nov 2022 - Jan 2023
					</span>
					<h6 className="text-lg font-semibold">Bazzar</h6>
					<p>
						A multi-vendor E-commerce Website with admin dashboard, analytics
						and logistics.
					</p>
				</Link>{" "}
				<Link
					href="https://github.com/YanissGnz/tes-concept-react-tree"
					target="_blank">
					<Image
						src={tesShot}
						alt="pivotpointbms"
						className="rounded-md mb-3"
					/>
					<span className="bg-blue-200/50 dark:bg-blue-700/40 p-1 rounded text-blue-600 dark:text-blue-200">
						Oct 2022
					</span>
					<h6 className="text-lg font-semibold">Tes Close</h6>
					<p>A clone of Tes website with react three 3D animations.</p>
				</Link>
				<Link href="https://github.com/YanissGnz/macos" target="_blank">
					<Image
						src={macosShot}
						alt="pivotpointbms"
						className="rounded-md mb-3"
					/>
					<span className="bg-blue-200/50 dark:bg-blue-700/40 p-1 rounded text-blue-600 dark:text-blue-200">
						Oct 2022
					</span>
					<h6 className="text-lg font-semibold">MacOS Clone</h6>
					<p>A clone of MacOS operating system.</p>
				</Link>
				<Link href="https://github.com/YanissGnz/Home_Art" target="_blank">
					<Image
						src={homeArtShot}
						alt="home art shot"
						className="rounded-md mb-3"
					/>
					<span className="bg-blue-200/50 dark:bg-blue-700/40 p-1 rounded text-blue-600 dark:text-blue-200">
						Jan 2021- Dec 2021
					</span>
					<h6 className="text-lg font-semibold">Home Art</h6>
					<p>An E-commerce Website for home appliances.</p>
				</Link>
			</div>
			<div className="-top-20 left-20 flex place-items-center absolute h-[200px] w-[280px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl after:absolute after:-z-20 after:h-[280px] after:w-[240px] after:bg-gradient-conic after:from-sky-300 after:via-blue-300 after:blur-2xl after dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 -z-20"></div>
			<div className="top-3/4 right-20 flex place-items-center absolute  rounded-full  to-transparent -z-20 h-[380px] w-[340px] translate-x-1/3 bg-gradient-conic from-sky-300 via-blue-300 blur-2xl dark:bg-gradient-to-br dark:to-blue-700/10 dark:from-sky-900 dark:via-[#0141ff]/40"></div>
		</div>
	);
}

export default Work;
