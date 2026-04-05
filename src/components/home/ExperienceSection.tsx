"use client";

import { motion } from "framer-motion";
import {
	FaIndustry,
	FaBolt,
	FaCapsules,
	FaCogs,
	FaHandshake,
} from "react-icons/fa";

export default function ExperienceSection() {
	return (
		<section className="py-28 bg-[#052B59] text-white relative overflow-hidden">
			{/* BACKGROUND GLOW */}
			<div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#F59E0B]/20 blur-3xl rounded-full" />
			<div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-white/5 blur-3xl rounded-full" />

			<div className="relative max-w-7xl mx-auto px-6">
				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="text-center max-w-3xl mx-auto">
					<h2 className="text-4xl font-extrabold">
						Our <span className="text-[#F59E0B]">Experience</span>
					</h2>

					<p className="mt-4 text-gray-300 text-lg">
						Delivering excellence across industries with proven expertise and
						trusted partnerships.
					</p>
				</motion.div>

				{/* MAIN STAT */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					className="mt-16 text-center">
					<div className="inline-block px-10 py-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
						<h3 className="text-5xl font-extrabold text-[#F59E0B]">600+</h3>
						<p className="mt-2 text-gray-200 text-lg">
							Completed Medium & Large-Scale Industrial Projects
						</p>
					</div>
				</motion.div>

				{/* INDUSTRIES */}
				<div className="mt-20">
					<h3 className="text-2xl font-semibold text-center mb-10">
						Industries We Have Worked With
					</h3>

					<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
						{[
							{ name: "Cement Industry", icon: FaIndustry },
							{ name: "Power Sector", icon: FaBolt },
							{ name: "Ferro Alloys", icon: FaCogs },
							{ name: "Pharmaceuticals", icon: FaCapsules },
							{ name: "Material Handling", icon: FaCogs },
						].map((item, i) => {
							const Icon = item.icon;

							return (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.05 }}
									className="group bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition">
									<div className="flex justify-center">
										<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition">
											<Icon className="text-white group-hover:text-[#F59E0B]" />
										</div>
									</div>

									<p className="mt-4 text-sm font-medium text-gray-200 group-hover:text-[#F59E0B] transition">
										{item.name}
									</p>
								</motion.div>
							);
						})}
					</div>
				</div>

				{/* TRUST SECTION */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="mt-20 flex justify-center">
					<div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-xl border border-white/10">
						<FaHandshake className="text-[#F59E0B] text-xl" />
						<p className="text-gray-200 text-sm sm:text-base">
							Trusted by both{" "}
							<span className="text-white font-semibold">
								public and private sector organizations
							</span>
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
