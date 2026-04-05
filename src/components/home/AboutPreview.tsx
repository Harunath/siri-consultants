"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
	return (
		<section className="relative py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white overflow-hidden">
			{/* Soft Background Glow */}
			<div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-[#052B59]/10 blur-[100px] rounded-full" />

			<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
				{/* LEFT CONTENT */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<p className="text-[#F59E0B] font-semibold tracking-widest uppercase text-sm mb-4">
						About Us
					</p>

					<h2 className="text-4xl sm:text-5xl font-extrabold text-[#052B59] leading-tight">
						Engineering Excellence
						<span className="block text-[#F59E0B]">Built on Trust</span>
					</h2>

					<p className="mt-6 text-[#475569] text-lg leading-relaxed max-w-xl">
						SIRI CONSULTANTS is a Hyderabad-based multidisciplinary engineering
						firm led by{" "}
						<span className="font-semibold text-[#052B59]">
							Sri D. Srinivasa Rao
						</span>
						, IIT Chennai Gold Medalist, delivering architectural, civil,
						structural, and mechanical engineering solutions with precision and
						innovation.
					</p>

					<p className="mt-4 text-[#475569] text-base leading-relaxed max-w-xl">
						With over 32+ years of experience and 700+ projects executed across
						industrial, commercial, and residential sectors, we specialize in
						cost-effective design, advanced engineering standards, and
						end-to-end project execution — serving both public and private
						sector clients, including major organizations like BHEL, GAIL, and
						leading cement and steel industries.
					</p>

					{/* CTA */}
					<div className="mt-8 flex gap-4">
						<Link href="/about">
							<button className="px-6 py-3 rounded-xl bg-[#052B59] text-white font-semibold hover:bg-[#041f40] transition">
								Learn More
							</button>
						</Link>

						<Link href="/contact">
							<button className="px-6 py-3 rounded-xl border border-[#052B59] text-[#052B59] font-semibold hover:bg-[#052B59] hover:text-white transition">
								Contact Us
							</button>
						</Link>
					</div>
				</motion.div>

				{/* RIGHT IMAGE CARD */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="relative">
					<div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775294574/about-01_wq8mbp.jpg"
							alt="Siri Consultants"
							width={600}
							height={400}
							className="rounded-2xl object-cover w-full h-full"
						/>
					</div>

					{/* Badge */}
					<div className="absolute bottom-6 left-6 bg-[#052B59] text-white px-4 py-2 rounded-lg shadow-md">
						<span className="text-sm font-semibold">32+ Years Experience</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
