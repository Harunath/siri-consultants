"use client";

import { motion } from "framer-motion";
import {
	FaUsers,
	FaHardHat,
	FaDraftingCompass,
	FaCogs,
	FaCheckCircle,
} from "react-icons/fa";

export default function OurTeam() {
	return (
		<section className="py-28 bg-[#F8FAFC]">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-20 items-center">
					{/* LEFT */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}>
						<h2 className="text-4xl font-extrabold text-[#052B59] leading-tight">
							Our <span className="text-[#F59E0B]">Team</span>
						</h2>

						<p className="mt-6 text-[#475569] text-lg leading-relaxed max-w-xl">
							We are powered by a multi-disciplinary team of{" "}
							<span className="font-semibold text-[#052B59]">
								60+ skilled professionals
							</span>
							, bringing together expertise across engineering, design, and
							project execution.
						</p>

						{/* TEAM TYPES */}
						<div className="mt-10 space-y-6">
							{[
								{
									icon: FaHardHat,
									text: "Civil & Structural Engineers",
								},
								{
									icon: FaDraftingCompass,
									text: "Architects & Interior Designers",
								},
								{
									icon: FaCogs,
									text: "Mechanical & Electrical Engineers",
								},
							].map((item, i) => {
								const Icon = item.icon;

								return (
									<div key={i} className="flex items-center gap-5 group">
										<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#052B59]/10 to-[#F59E0B]/10 flex items-center justify-center group-hover:scale-105 transition">
											<Icon className="text-[#052B59]" />
										</div>

										<p className="text-[#052B59] font-medium text-lg">
											{item.text}
										</p>
									</div>
								);
							})}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="relative pl-4 lg:pl-10">
						{/* MAIN CARD */}
						<div className="relative bg-[#052B59] rounded-3xl p-10 shadow-2xl overflow-hidden">
							{/* Glow */}
							<div className="absolute top-[-40px] right-[-40px] w-40 h-40 bg-[#F59E0B]/20 blur-3xl rounded-full" />

							<div className="relative z-10">
								<div className="flex items-center gap-4 mb-8">
									<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
										<FaUsers className="text-white" />
									</div>
									<h3 className="text-xl font-bold text-white">
										What Our Team Delivers
									</h3>
								</div>

								<div className="space-y-5">
									{[
										"Optimized Designs",
										"Economical Solutions",
										"Functional & Sustainable Outcomes",
									].map((item, i) => (
										<div key={i} className="flex items-center gap-3">
											<FaCheckCircle className="text-[#F59E0B]" />
											<span className="text-gray-200 text-base">{item}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
