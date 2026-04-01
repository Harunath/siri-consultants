"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const SERVICES = [
	{
		title: "Architectural Services",
		desc: "Designing modern, functional, and sustainable spaces tailored to your vision.",
	},
	{
		title: "Structural Engineering",
		desc: "Delivering safe, efficient, and high-performance structural solutions.",
	},
	{
		title: "Electrical & HVAC Engineering",
		desc: "Smart, energy-efficient systems ensuring comfort and operational reliability.",
	},
	{
		title: "Project Management",
		desc: "End-to-end project execution with quality control and timely delivery.",
	},
];

export default function ServicesPreview() {
	return (
		<section className="py-24 bg-[#F8FAFC]">
			<div className="max-w-7xl mx-auto px-6">
				{/* Heading */}
				<div className="text-center mb-16">
					<p className="text-[#F59E0B] font-semibold uppercase tracking-widest text-sm">
						Our Services
					</p>

					<h2 className="text-4xl sm:text-5xl font-extrabold text-[#052B59] mt-3">
						Comprehensive Engineering Solutions
					</h2>
				</div>

				{/* Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{SERVICES.map((service, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							className="group relative bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition duration-300">
							{/* Top Accent Line */}
							<div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#052B59] to-[#F59E0B] rounded-t-2xl" />

							{/* Icon Circle */}
							<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#052B59]/10 text-[#052B59] mb-5 group-hover:bg-[#052B59] group-hover:text-white transition">
								{i + 1}
							</div>

							{/* Title */}
							<h3 className="text-lg font-semibold text-[#052B59] mb-3">
								{service.title}
							</h3>

							{/* Description */}
							<p className="text-sm text-gray-600 leading-relaxed">
								{service.desc}
							</p>

							{/* Hover Glow */}
							<div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#052B59]/5 to-[#F59E0B]/5 transition" />
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center mt-14">
					<Link href="/services">
						<button className="inline-flex items-center gap-2 px-8 py-3 bg-[#052B59] text-white rounded-xl font-semibold hover:bg-[#041f40] transition">
							View More Services
							<FiArrowRight size={18} />
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
