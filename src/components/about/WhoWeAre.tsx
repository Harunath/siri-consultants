"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
	return (
		<section className="py-20 bg-[#F8FAFC]">
			<div className="max-w-5xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-10 overflow-hidden">
					{/* TOP GRADIENT LINE */}
					<div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#F59E0B] via-[#052B59] to-[#F59E0B]" />

					{/* HEADER */}
					<div className="flex items-start gap-5 mb-6">
						<div className="w-14 h-14 rounded-xl bg-[#052B59] flex items-center justify-center text-white text-xl shadow">
							🏢
						</div>

						<div>
							<h2 className="text-3xl font-extrabold text-[#052B59]">
								Who We Are
							</h2>
							<p className="text-gray-500 mt-1">
								Delivering engineering excellence with trust and precision
							</p>
						</div>
					</div>

					{/* CONTENT */}
					<div className="space-y-5 text-[17px] leading-relaxed text-[#475569]">
						<p>
							<span className="font-semibold text-[#052B59]">
								SIRI CONSULTANTS
							</span>{" "}
							is a trusted engineering consultancy firm delivering{" "}
							<span className="font-semibold text-[#052B59]">
								high-quality, reliable, and efficient structural solutions
							</span>{" "}
							to clients across India and abroad.
						</p>

						<p>
							With decades of experience, we specialize in{" "}
							<span className="font-semibold text-[#F59E0B]">
								innovative, cost-effective, and technically sound engineering
							</span>{" "}
							services — ensuring every project meets the{" "}
							<span className="font-semibold text-[#052B59]">
								highest industry standards
							</span>
							.
						</p>

						<p>
							We are committed to delivering{" "}
							<span className="font-semibold text-[#F59E0B]">
								excellence with speed, precision, and professionalism
							</span>{" "}
							— without ever compromising on quality.
						</p>
					</div>

					{/* TAGS / BADGES */}
					<div className="mt-8 flex flex-wrap gap-3">
						<span className="px-4 py-2 rounded-full border border-[#052B59] text-[#052B59] text-sm font-medium">
							Structural Excellence
						</span>
						<span className="px-4 py-2 rounded-full border border-[#F59E0B] text-[#F59E0B] text-sm font-medium">
							Cost-Effective Design
						</span>
						<span className="px-4 py-2 rounded-full border border-[#052B59] text-[#052B59] text-sm font-medium">
							Reliable Delivery
						</span>
						<span className="px-4 py-2 rounded-full border border-[#F59E0B] text-[#F59E0B] text-sm font-medium">
							Industry Standards
						</span>
					</div>

					{/* BOTTOM LINE (like your screenshot) */}
					<div className="mt-8 h-[3px] w-full bg-gradient-to-r from-[#F59E0B] via-[#052B59] to-[#F59E0B] rounded-full" />
				</motion.div>
			</div>
		</section>
	);
}
