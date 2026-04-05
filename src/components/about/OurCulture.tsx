"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaCheckCircle } from "react-icons/fa";

export default function OurCulture() {
	return (
		<section className="py-28 bg-[#F8FAFC] relative overflow-hidden">
			{/* Subtle Background Glow */}
			<div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-[#052B59]/10 blur-3xl rounded-full" />
			<div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-[#F59E0B]/10 blur-3xl rounded-full" />

			<div className="max-w-6xl mx-auto px-6">
				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="text-center max-w-3xl mx-auto">
					<h2 className="text-4xl font-extrabold text-[#052B59]">
						Our <span className="text-[#F59E0B]">Culture</span>
					</h2>
				</motion.div>

				{/* QUOTE BLOCK */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					className="mt-14 bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center relative">
					<FaQuoteLeft className="text-[#F59E0B] text-3xl mx-auto mb-4" />

					<h3 className="text-3xl font-bold text-[#052B59]">
						“Work is Worship”
					</h3>

					<p className="mt-4 text-[#64748B] max-w-2xl mx-auto">
						At SIRI CONSULTANTS, our culture is built on strong values,
						professional integrity, and a deep commitment to excellence in every
						project we undertake.
					</p>

					{/* Divider */}
					<div className="mt-6 w-16 h-[3px] mx-auto bg-gradient-to-r from-[#052B59] to-[#F59E0B]" />
				</motion.div>

				{/* VALUES GRID */}
				<div className="mt-16 grid sm:grid-cols-2 gap-8">
					{[
						"Integrity and honesty in every project",
						"Strong team collaboration",
						"Clear methodology and execution",
						"Commitment to client satisfaction",
					].map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.05 }}
							className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition flex items-start gap-4">
							<div className="w-10 h-10 rounded-lg bg-[#052B59]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition">
								<FaCheckCircle className="text-[#052B59] group-hover:text-[#F59E0B]" />
							</div>

							<p className="text-[#052B59] font-medium leading-relaxed">
								{item}
							</p>
						</motion.div>
					))}
				</div>

				{/* FINAL STATEMENT */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="mt-16 text-center max-w-3xl mx-auto">
					<p className="text-lg text-[#475569] leading-relaxed">
						Every project — regardless of size — is treated with{" "}
						<span className="font-semibold text-[#052B59]">
							equal importance and respect
						</span>
						, ensuring consistent quality and client satisfaction.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
