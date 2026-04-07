"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const SERVICES = [
	{
		title: "Cement Plants",
		desc: "Comprehensive structural and engineering solutions for cement manufacturing facilities.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1774978135/banner4_lstoqw.jpg",
	},
	{
		title: "Power Plants",
		desc: "Efficient and reliable engineering for thermal and industrial power projects.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1774978130/banner2_xbwinx.jpg",
	},
	{
		title: "Industrial Projects",
		desc: "End-to-end engineering solutions for diverse industrial infrastructures.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1774978083/Cofrentes_nuclear_power_plant_cooling_towers_retouched_w1inid.jpg",
	},
	{
		title: "Residential & Commercial",
		desc: "Modern, safe, and sustainable building design for urban developments.",
		img: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1774978135/banner4_lstoqw.jpg",
	},
];

export default function ServicesPreview() {
	return (
		<section className="py-20 bg-[#F8FAFC]">
			<div className="max-w-7xl mx-auto px-6">
				{/* Heading */}
				<div className="text-center mb-14">
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

				{/* Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{SERVICES.map((service, i) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }} // ✅ prevents re-animation lag
							transition={{ duration: 0.5, ease: "easeOut" }} // ✅ removed delay stacking
							className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition will-change-transform">
							{/* Image */}
							<div className="relative w-full h-56 overflow-hidden">
								<Image
									src={service.img}
									alt={service.title}
									fill
									sizes="(max-width: 768px) 100vw, 25vw"
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>

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

							{/* Accent Line */}
							<div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#052B59] to-[#F59E0B]" />
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center mt-12">
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
