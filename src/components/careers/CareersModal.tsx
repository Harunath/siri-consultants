"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
	{
		title: "Sr. Design Engineer",
		desc: "M.E./M.Tech (Structure) or B.E (Civil) with 2+ years experience in RCC & structural design.",
	},
	{
		title: "Asst. Design Engineer",
		desc: "B.E (Civil) with 2+ years experience in structural design. Freshers can also apply.",
	},
	{
		title: "Site Inspection & Quality Control Engineer",
		desc: "BE/Diploma Civil with 2–3 years experience in RCC/steel work inspection and quality control.",
	},
	{
		title: "Admin Assistant",
		desc: "Graduate with 2+ years admin experience. Computer literacy is mandatory.",
	},
	{
		title: "Civil Draughtsman",
		desc: "DCE/ITI with AutoCAD experience. Freshers can apply.",
	},
	{
		title: "Receptionist",
		desc: "Graduate with communication skills & English fluency.",
	},
	{
		title: "Billing Engineer / Quantity Surveyor",
		desc: "DCE/B.E Civil with RCC billing & AutoCAD knowledge.",
	},
];

export default function CareersModal() {
	const [selectedJob, setSelectedJob] = useState<any>(null);

	return (
		<section className="py-20 bg-[#F8FAFC]">
			<div className="max-w-6xl mx-auto px-6">
				{/* Heading */}
				<h2 className="text-4xl font-bold text-[#052B59] text-center mb-12">
					Join Our Team
				</h2>

				{/* Jobs */}
				<div className="grid md:grid-cols-2 gap-6">
					{jobs.map((job, i) => (
						<div
							key={i}
							className="group p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition border border-gray-100">
							<h3 className="text-lg font-semibold text-[#052B59]">
								{job.title}
							</h3>

							<p className="text-sm text-gray-600 mt-2">{job.desc}</p>

							{/* CTA */}
							<button
								onClick={() => setSelectedJob(job)}
								className="mt-4 text-[#F59E0B] font-medium flex items-center gap-2 group-hover:gap-3 transition">
								Apply Now →
							</button>
						</div>
					))}
				</div>

				{/* MODAL */}
				<AnimatePresence>
					{selectedJob && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
							<motion.div
								initial={{ scale: 0.9, y: 40 }}
								animate={{ scale: 1, y: 0 }}
								exit={{ scale: 0.9, y: 40 }}
								className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">
								{/* LEFT - JOB INFO */}
								<div className="p-6 md:p-8">
									<h3 className="text-2xl font-bold text-[#052B59]">
										{selectedJob.title}
									</h3>

									<p className="text-gray-600 mt-4 leading-relaxed">
										{selectedJob.desc}
									</p>

									<div className="mt-6 text-sm text-gray-500">
										✔ Growth Opportunities <br />
										✔ Diverse Engineering Projects <br />✔ Skill Development
										Programs
									</div>
								</div>

								{/* RIGHT - APPLY PANEL */}
								<div className="bg-gradient-to-br from-[#052B59] to-[#041f40] text-white p-6 md:p-8 flex flex-col justify-between">
									<div>
										<h4 className="text-xl font-semibold">
											Apply for this role
										</h4>

										<p className="text-sm text-gray-200 mt-3">
											Send your resume and details to:
										</p>

										<a
											href="mailto:info@siriconsultants.com"
											className="block mt-4 text-[#F59E0B] font-semibold text-lg hover:underline">
											info@siriconsultants.com
										</a>
									</div>

									<div className="mt-8">
										<a
											href="mailto:info@siriconsultants.com"
											className="block text-center px-6 py-3 rounded-xl bg-[#F59E0B] text-white font-semibold hover:bg-[#d97706] transition">
											Send Application
										</a>

										<button
											onClick={() => setSelectedJob(null)}
											className="mt-3 w-full text-sm text-gray-300 hover:text-white">
											Close
										</button>
									</div>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
