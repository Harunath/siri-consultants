"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";

export default function QualityPolicy() {
	return (
		<section className="py-28 bg-white relative overflow-hidden">
			{/* Subtle Background Accent */}
			<div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] bg-[#052B59]/10 blur-3xl rounded-full" />
			<div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] bg-[#F59E0B]/10 blur-3xl rounded-full" />

			<div className="max-w-6xl mx-auto px-6">
				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="text-center max-w-3xl mx-auto">
					<h2 className="text-4xl font-extrabold text-[#052B59]">
						Quality <span className="text-[#F59E0B]">Policy</span>
					</h2>
					<p className="mt-4 text-[#64748B] text-lg">
						Our commitment to delivering excellence through precision,
						integrity, and engineering standards.
					</p>
				</motion.div>

				{/* MAIN CARD */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="mt-16 bg-[#052B59] text-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
					{/* Glow */}
					<div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F59E0B]/20 blur-3xl rounded-full" />

					<div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
						{/* LEFT - ICON + MESSAGE */}
						<div>
							<div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
								<FaShieldAlt className="text-[#F59E0B] text-2xl" />
							</div>

							<h3 className="text-2xl font-bold mb-4">
								Commitment to Quality Excellence
							</h3>

							<p className="text-gray-200 leading-relaxed">
								We are dedicated to maintaining the highest standards in every
								project by ensuring precision, reliability, and adherence to
								ethical engineering practices.
							</p>
						</div>

						{/* RIGHT - CHECKLIST */}
						<div className="space-y-5">
							{[
								"Ensuring structural efficiency",
								"Following ethical engineering practices",
								"Delivering error-free designs & drawings",
								"Maintaining precision in detailing and execution",
							].map((item, i) => (
								<div
									key={i}
									className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
									<FaCheckCircle className="text-[#F59E0B] mt-1" />
									<span className="text-gray-200">{item}</span>
								</div>
							))}
						</div>
					</div>

					{/* BOTTOM LINE */}
					<div className="mt-10 h-[3px] w-full bg-gradient-to-r from-[#052B59] via-[#F59E0B] to-[#052B59]" />
				</motion.div>
			</div>
		</section>
	);
}
