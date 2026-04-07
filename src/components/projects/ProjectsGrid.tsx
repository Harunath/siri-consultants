"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/ProjectsData";

export default function ProjectsGrid() {
	return (
		<section className="py-24 bg-[#F8FAFC]">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, i) => (
						<motion.div
							key={project.slug}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.05 }}
							className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer">
							{/* IMAGE */}
							<Image
								src={
									// fallback image (important)
									project.image ||
									"https://res.cloudinary.com/your-cloud-name/image/upload/v123/spinning.jpg"
								}
								alt={project.title}
								width={500}
								height={400}
								className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
							/>

							{/* OVERLAY */}
							<div className="absolute inset-0 bg-gradient-to-t from-[#052B59]/90 via-[#052B59]/50 to-transparent" />

							{/* CONTENT */}
							<div className="absolute bottom-0 p-6 text-white w-full">
								<h3 className="text-xl font-bold">{project.title}</h3>

								{/* OPTIONAL description */}
								{project.description && (
									<p className="text-sm text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
										{project.description}
									</p>
								)}

								{/* LINE */}
								<div className="mt-3 h-[2px] w-10 bg-[#F59E0B] group-hover:w-16 transition-all duration-300" />

								{/* BUTTONS */}
								<div className="mt-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
									<Link href={`/projects/${project.slug}/completed`}>
										<button className="px-4 py-2 text-xs rounded-lg bg-[#F59E0B] text-white font-medium hover:bg-[#d97706] transition">
											Completed ({project.completed.length})
										</button>
									</Link>

									<Link href={`/projects/${project.slug}/ongoing`}>
										<button className="px-4 py-2 text-xs rounded-lg border border-white text-white hover:bg-white hover:text-[#052B59] transition">
											Ongoing ({project.ongoing.length})
										</button>
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
