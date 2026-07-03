"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

/* =========================
   Floating Input
========================= */
function FloatingInput({ label, type = "text" }: any) {
	return (
		<div className="relative">
			<input
				type={type}
				placeholder=" "
				className="
          peer w-full px-4 pt-5 pb-2
          rounded-xl border border-gray-200
          bg-white text-sm outline-none
          focus:ring-2 focus:ring-[#F59E0B]
          focus:shadow-[0_0_0_3px_rgba(245,158,11,0.15)]
          transition
        "
			/>
			<label
				className="
          absolute left-4 top-2 text-xs text-gray-500
          transition-all duration-200
          peer-placeholder-shown:top-3.5
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400
          peer-focus:top-2
          peer-focus:text-xs
          peer-focus:text-[#F59E0B]
        ">
				{label}
			</label>
		</div>
	);
}

/* =========================
   Floating Textarea
========================= */
function FloatingTextarea({ label }: any) {
	return (
		<div className="relative">
			<textarea
				rows={4}
				placeholder=" "
				className="
          peer w-full px-4 pt-5 pb-2
          rounded-xl border border-gray-200
          bg-white text-sm outline-none resize-none
          focus:ring-2 focus:ring-[#F59E0B]
          focus:shadow-[0_0_0_3px_rgba(245,158,11,0.15)]
          transition
        "
			/>
			<label
				className="
          absolute left-4 top-2 text-xs text-gray-500
          transition-all duration-200
          peer-placeholder-shown:top-3.5
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400
          peer-focus:top-2
          peer-focus:text-xs
          peer-focus:text-[#F59E0B]
        ">
				{label}
			</label>
		</div>
	);
}

/* =========================
   Main Component
========================= */
export default function ContactSection() {
	return (
		<section className="py-20 bg-[#F8FAFC]">
			<div className="max-w-7xl mx-auto px-6">
				{/* Header */}
				<div className="text-center mb-14">
					<h1 className="text-4xl md:text-5xl font-extrabold text-[#052B59]">
						Contact Us
					</h1>
					<p className="text-gray-600 mt-3 max-w-xl mx-auto">
						Have a project in mind? Let’s discuss how we can help you build it
						efficiently.
					</p>
				</div>

				{/* Main Card */}
				<div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white grid lg:grid-cols-2">
					{/* LEFT - INFO */}
					<div className="p-6 md:p-10 bg-gradient-to-br from-[#052B59] to-[#041f40] text-white flex flex-col justify-between">
						<div>
							<h2 className="text-2xl font-bold">Get In Touch</h2>
							<p className="text-gray-300 mt-2 text-sm max-w-sm">
								Reach out to us for reliable engineering and consulting
								solutions.
							</p>

							{/* Info Blocks */}
							<div className="mt-10 space-y-7">
								<div className="flex items-start gap-4">
									<div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
										<FiMapPin size={18} />
									</div>
									<div>
										<p className="font-semibold">Address</p>
										<p className="text-sm text-gray-300 mt-1">
											Ameerpet, Hyderabad – 500 016
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 bg-[#F59E0B]/20 rounded-xl">
										<FiPhone size={18} />
									</div>
									<div>
										<p className="font-semibold">Phone</p>
										<a
											href="tel:+919848025312"
											className="text-sm text-gray-300 mt-1 block hover:text-white">
											+91 9848025312
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 bg-white/10 rounded-xl">
										<FiMail size={18} />
									</div>
									<div>
										<p className="font-semibold">Email</p>
										<a
											href="mailto:siriconsultants.dsr@gmail.com"
											className="text-sm text-gray-300 mt-1 block hover:text-white">
											siriconsultants.dsr@gmail.com
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Bottom highlight */}
						<div className="mt-12 text-sm text-gray-400 border-t border-white/10 pt-4">
							We usually respond within 24 hours
						</div>
					</div>

					{/* RIGHT - FORM */}
					<div className="p-6 md:p-10 relative">
						{/* subtle glow */}
						<div className="absolute -inset-1 bg-gradient-to-r from-[#052B59]/5 to-[#F59E0B]/10 blur-2xl rounded-3xl" />

						<div className="relative">
							<h3 className="text-2xl font-bold text-[#052B59] mb-6">
								Send a Message
							</h3>

							<form className="space-y-5">
								<div className="grid sm:grid-cols-2 gap-4">
									<FloatingInput label="First Name" />
									<FloatingInput label="Last Name" />
								</div>

								<FloatingInput label="Email Address" type="email" />

								<FloatingInput label="Phone Number" type="tel" />

								<FloatingTextarea label="Your Message" />

								<button
									type="submit"
									className="
                    w-full py-3 rounded-xl
                    bg-[#052B59] text-white font-semibold
                    hover:bg-[#041f40]
                    transition
                    shadow-md hover:shadow-lg
                  ">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>

				{/* Map */}
				<div className="mt-16 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.502665150513!2d78.4501988!3d17.4356391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c85189f999%3A0x5911ad062c13e523!2sSiri%20Consultants!5e0!3m2!1sen!2sin!4v1783059736670!5m2!1sen!2sin"
						height="450"
						className="w-full border-0"
						loading="lazy"></iframe>
				</div>
			</div>
		</section>
	);
}
