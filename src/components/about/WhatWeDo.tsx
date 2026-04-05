"use client";

import { motion } from "framer-motion";
import {
	FaBuilding,
	FaChartBar,
	FaFileAlt,
	FaTools,
	FaClipboardCheck,
	FaBalanceScale,
	FaIndustry,
	FaHospital,
	FaSchool,
	FaCity,
} from "react-icons/fa";

const services = [
	{ title: "Structural Design & Analysis", icon: FaBuilding },
	{ title: "Bar Bending Schedule (BBS)", icon: FaChartBar },
	{ title: "BOQ & Tender Documentation", icon: FaFileAlt },
	{ title: "Repair & Rehabilitation", icon: FaTools },
	{ title: "Project Management", icon: FaClipboardCheck },
	{ title: "Arbitration & Consultancy", icon: FaBalanceScale },
	{ title: "Infrastructure Development", icon: FaIndustry },
];

const industries = [
	{ title: "Industrial", icon: FaIndustry },
	{ title: "Residential & Commercial", icon: FaCity },
	{ title: "Educational Institutions", icon: FaSchool },
	{ title: "Healthcare", icon: FaHospital },
	{ title: "Multiplexes & Infrastructure", icon: FaBuilding },
];

export default function WhatWeDo() {
	return (
		<section className="py-24 bg-[#F8FAFC]">
			<div className="max-w-7xl mx-auto px-6">
				{/* HEADER */}
				<div className="max-w-2xl mb-16">
					<h2 className="text-4xl font-extrabold text-[#052B59] leading-tight">
						What <span className="text-[#F59E0B]">We Do</span>
					</h2>
					<p className="mt-4 text-[#475569] text-lg">
						Comprehensive engineering and consultancy services designed to
						deliver efficiency, reliability, and long-term value.
					</p>
				</div>

				{/* MAIN */}
				<div className="grid lg:grid-cols-3 gap-10">
					{/* FEATURE CARD */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						className="lg:col-span-1 rounded-3xl p-8 relative overflow-hidden text-white">
						{/* Gradient BG */}
						<div className="absolute inset-0 bg-gradient-to-br from-[#052B59] to-[#031c3a]" />

						{/* Glow */}
						<div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F59E0B]/20 blur-3xl rounded-full" />

						<div className="relative z-10">
							<h3 className="text-2xl font-bold mb-4">
								End-to-End Engineering Solutions
							</h3>

							<p className="text-gray-200 leading-relaxed">
								We combine deep technical expertise with practical execution to
								deliver high-performance, cost-effective engineering solutions
								across industries.
							</p>

							<div className="mt-6 h-[3px] w-16 bg-[#F59E0B]" />
						</div>
					</motion.div>

					{/* SERVICES */}
					<div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
						{services.map((service, i) => {
							const Icon = service.icon;

							return (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.05 }}
									className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 flex gap-4 items-start overflow-hidden">
									{/* HOVER GLOW */}
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#052B59]/5 to-[#F59E0B]/10" />

									{/* ICON */}
									<div className="relative z-10 w-12 h-12 rounded-xl bg-[#052B59]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition">
										<Icon className="w-6 h-6 text-[#052B59] group-hover:text-[#F59E0B]" />
									</div>

									{/* TEXT */}
									<div className="relative z-10">
										<h4 className="text-lg font-semibold text-[#052B59] group-hover:text-[#F59E0B] transition">
											{service.title}
										</h4>

										<div className="mt-2 h-[2px] w-8 bg-[#052B59] group-hover:w-14 group-hover:bg-[#F59E0B] transition-all duration-300" />
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>

				{/* INDUSTRIES - BLUE SECTION */}
				<div className="mt-24 rounded-3xl bg-[#052B59] py-16 px-8 relative overflow-hidden">
					{/* Glow Background */}
					<div className="absolute -top-20 -right-20 w-72 h-72 bg-[#F59E0B]/20 blur-3xl rounded-full" />
					<div className="absolute bottom-[-80px] left-[-80px] w-72 h-72 bg-white/5 blur-3xl rounded-full" />

					<div className="relative z-10">
						<h3 className="text-3xl font-bold text-white text-center mb-12">
							Industries We Serve
						</h3>

						<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
							{industries.map((item, i) => {
								const Icon = item.icon;

								return (
									<motion.div
										key={i}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: i * 0.05 }}
										className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 hover:shadow-lg transition-all duration-300">
										{/* ICON */}
										<div className="flex justify-center">
											<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition">
												<Icon className="text-white text-xl group-hover:text-[#F59E0B]" />
											</div>
										</div>

										{/* TEXT */}
										<p className="mt-4 font-semibold text-white text-sm group-hover:text-[#F59E0B] transition">
											{item.title}
										</p>
									</motion.div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
