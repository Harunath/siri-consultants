"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const SERVICES = [
	{
		title: "Cement Plants",
		desc: "Comprehensive structural and engineering solutions for cement manufacturing facilities.",
		img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
	},
	{
		title: "Power Plants",
		desc: "Efficient and reliable engineering for thermal and industrial power projects.",
		img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
	},
	{
		title: "Industrial Projects",
		desc: "End-to-end engineering solutions for diverse industrial infrastructures.",
		img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c",
	},
	{
		title: "Residential & Commercial",
		desc: "Modern, safe, and sustainable building design for urban developments.",
		img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
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
						Industries We Serve
					</h2>

					<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
						Delivering specialized engineering solutions across industries with
						precision, safety, and efficiency.
					</p>
				</div>

				{/* Grid (ONLY 4) */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{SERVICES.map((service, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.08 }}
							className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
							{/* Image */}
							<img
								src={service.img}
								alt={service.title}
								className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-[#052B59]/95 via-[#052B59]/60 to-transparent" />

							{/* Content */}
							<div className="absolute bottom-0 p-5">
								<h3 className="text-white font-semibold text-lg">
									{service.title}
								</h3>

								<p className="text-gray-200 text-sm mt-2 line-clamp-2">
									{service.desc}
								</p>

								<div className="flex items-center gap-2 text-[#F59E0B] text-sm mt-3 opacity-0 group-hover:opacity-100 transition">
									Learn More
									<FiArrowRight size={14} />
								</div>
							</div>

							{/* Top Accent */}
							<div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#052B59] to-[#F59E0B]" />
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center mt-14">
					<Link href="/services">
						<button className="inline-flex items-center gap-2 px-8 py-3 bg-[#052B59] text-white rounded-xl font-semibold hover:bg-[#041f40] transition">
							View All Services
							<FiArrowRight size={18} />
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
