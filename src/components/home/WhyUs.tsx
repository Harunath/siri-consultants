"use client";

import { motion } from "framer-motion";
import { FaAward, FaLayerGroup, FaGlobe, FaCogs } from "react-icons/fa";

const FEATURES = [
	{
		title: "32+ Years of Expertise",
		desc: "Decades of proven engineering experience across diverse projects.",
		icon: FaAward,
	},
	{
		title: "End-to-End Solutions",
		desc: "From concept to execution with complete project ownership.",
		icon: FaLayerGroup,
	},
	{
		title: "Global Design Standards",
		desc: "Expertise in international and Indian structural codes.",
		icon: FaGlobe,
	},
	{
		title: "Technical Excellence",
		desc: "Focused on safety, efficiency, and real-world performance.",
		icon: FaCogs,
	},
];

export default function WhyUsUnique() {
	return (
		<section className="py-20 md:py-28 bg-white relative">
			<div className="max-w-6xl mx-auto px-6">
				{/* Heading */}
				<div className="text-center mb-14 md:mb-20">
					<p className="text-[#F59E0B] font-semibold uppercase tracking-widest text-sm">
						Why Siri
					</p>

					<h2 className="text-3xl md:text-4xl font-extrabold text-[#052B59] mt-3">
						Engineering You Can Trust
					</h2>
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Center Line (ONLY desktop) */}
					<div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-[#052B59] to-[#F59E0B]" />

					<div className="space-y-10 md:space-y-16">
						{FEATURES.map((item, i) => {
							const Icon = item.icon;
							const isLeft = i % 2 === 0;

							return (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5 }}
									className={`
                    flex items-center
                    ${isLeft ? "md:justify-start" : "md:justify-end"}
                    justify-start
                  `}>
									<div
										className={`
                      w-full md:w-1/2
                      ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}
                    `}>
										{/* Content */}
										<div className="flex items-start gap-4 md:gap-6">
											{/* Icon (always left on mobile) */}
											<div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#052B59] text-white">
												<Icon size={16} />
											</div>

											{/* Text */}
											<div>
												<h3 className="text-base md:text-lg font-semibold text-[#052B59]">
													{item.title}
												</h3>

												<p className="text-sm text-gray-600 mt-1">
													{item.desc}
												</p>
											</div>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
