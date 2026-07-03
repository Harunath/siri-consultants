"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
	{
		title: "Cement & Industrial Plants",
		// img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774978083/Cofrentes_nuclear_power_plant_cooling_towers_retouched_w1inid.jpg",
		img: "/4.jpg",
	},
	{
		title: "Power & Energy Projects",
		// img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774978083/Cofrentes_nuclear_power_plant_cooling_towers_retouched_w1inid.jpg",
		img: "/11.jpg",
	},
	{
		title: "Commercial & Residential",
		// img: "https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774978083/Cofrentes_nuclear_power_plant_cooling_towers_retouched_w1inid.jpg",
		img: "/19.jpg",
	},
];

export default function ProjectsMini() {
	return (
		<section className="relative py-28 overflow-hidden">
			{/* 🔥 Background Image */}
			<div className="absolute inset-0">
				<img
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774978083/Cofrentes_nuclear_power_plant_cooling_towers_retouched_w1inid.jpg"
					alt="background"
					className="w-full h-full object-cover"
				/>

				{/* 🔥 Blue Overlay */}
				<div className="absolute inset-0 bg-[#052B59]/90" />

				{/* 🔥 Gradient Depth */}
				<div className="absolute inset-0 bg-gradient-to-b from-[#052B59]/90 via-[#052B59]/80 to-[#052B59]/95" />
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-6xl mx-auto px-6">
				{/* Heading */}
				<div className="text-center mb-20">
					<h2 className="text-3xl sm:text-5xl font-bold text-white">
						Our Projects
					</h2>
					<p className="mt-4 text-gray-200 max-w-xl mx-auto">
						A glimpse into our diverse engineering expertise across industries.
					</p>
				</div>

				{/* 🔥 Glass Cards Layout */}
				<div className="flex flex-col md:flex-row items-center justify-center gap-6">
					{projects.map((project, i) => (
						<div
							key={i}
							className={`group relative w-full ${
								i === 1 ? "md:w-[40%] h-[280px]" : "md:w-[28%] h-[220px]"
							} rounded-2xl overflow-hidden
							bg-white/10 backdrop-blur-md border border-white/20
							shadow-lg`}>
							{/* Image */}
							<Image
								src={project.img}
								alt={project.title}
								fill
								className="object-cover group-hover:scale-110 transition duration-500"
							/>

							{/* Overlay inside card */}
							<div className="absolute inset-0 bg-[#052B59]/70" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

							{/* Content */}
							<div className="absolute bottom-6 left-6 right-6 text-white">
								<h3 className="text-lg sm:text-xl font-semibold mb-3">
									{project.title}
								</h3>

								<Link
									href="/projects"
									className="inline-flex items-center gap-2 text-sm font-medium text-[#F59E0B] group-hover:gap-3 transition-all">
									View Project →
								</Link>
							</div>

							{/* Accent highlight */}
							<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F59E0B] to-transparent opacity-80" />
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center mt-16">
					<Link
						href="/projects"
						className="inline-block bg-white text-[#052B59] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#F59E0B] hover:text-black transition">
						View More Projects →
					</Link>
				</div>
			</div>
		</section>
	);
}
