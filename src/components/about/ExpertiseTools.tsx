"use client";

import { motion } from "framer-motion";
import {
	FaLaptopCode,
	FaDraftingCompass,
	FaTools,
	FaCheckCircle,
} from "react-icons/fa";

export default function ExpertiseTools() {
	return (
		<section className="py-24 bg-[#F8FAFC]">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* LEFT CONTENT */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						<h2 className="text-4xl font-extrabold text-[#052B59] leading-tight">
							Our Expertise & <span className="text-[#F59E0B]">Tools</span>
						</h2>

						<p className="mt-6 text-[#475569] text-lg leading-relaxed">
							We leverage advanced tools, proven methodologies, and global
							standards to deliver accurate, efficient, and reliable engineering
							solutions.
						</p>

						{/* FEATURE LIST */}
						<div className="mt-10 space-y-6">
							{[
								{
									icon: FaLaptopCode,
									title: "Advanced Software",
									desc: "Tools like STAAD Pro for structural analysis & design",
								},
								{
									icon: FaDraftingCompass,
									title: "Design Standards",
									desc: "National & international engineering codes",
								},
								{
									icon: FaTools,
									title: "Modern Infrastructure",
									desc: "Precision-driven design and execution systems",
								},
							].map((item, i) => {
								const Icon = item.icon;

								return (
									<div key={i} className="flex gap-4 items-start">
										<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#052B59]/10 to-[#F59E0B]/10 flex items-center justify-center">
											<Icon className="text-[#052B59]" />
										</div>

										<div>
											<h4 className="text-[#052B59] font-semibold">
												{item.title}
											</h4>
											<p className="text-[#64748B] text-sm mt-1">{item.desc}</p>
										</div>
									</div>
								);
							})}
						</div>
					</motion.div>

					{/* RIGHT VISUAL PANEL */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="relative">
						{/* MAIN CARD */}
						<div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
							<h3 className="text-xl font-bold text-[#052B59] mb-6">
								Standards & Compliance
							</h3>

							<div className="space-y-4">
								{[
									"Indian Standards (IS Codes)",
									"International Codes (where applicable)",
									"Strict Quality & Safety Compliance",
								].map((item, i) => (
									<div key={i} className="flex items-center gap-3">
										<FaCheckCircle className="text-[#F59E0B]" />
										<span className="text-[#475569]">{item}</span>
									</div>
								))}
							</div>

							{/* DIVIDER */}
							<div className="mt-6 h-[2px] w-full bg-gradient-to-r from-[#052B59] to-[#F59E0B]" />

							{/* BADGES */}
							<div className="mt-6 flex flex-wrap gap-3">
								<span className="px-4 py-2 text-sm rounded-full bg-[#052B59]/10 text-[#052B59] font-medium">
									STAAD Pro
								</span>
								<span className="px-4 py-2 text-sm rounded-full bg-[#F59E0B]/10 text-[#F59E0B] font-medium">
									IS Codes
								</span>
								<span className="px-4 py-2 text-sm rounded-full bg-[#052B59]/10 text-[#052B59] font-medium">
									International Standards
								</span>
							</div>
						</div>

						{/* FLOATING TECH TAG */}
						<div className="mt-6 lg:absolute lg:-bottom-6 lg:-right-6">
							<div className="bg-[#052B59] text-white px-5 py-3 rounded-xl shadow-lg">
								<p className="text-sm font-semibold">
									Precision • Compliance • Innovation
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
