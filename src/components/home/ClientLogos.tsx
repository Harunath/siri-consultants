"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LOGOS = [
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1774979640/client_image6_r94c8m.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1774979578/client_image1_mxjijg.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1774979551/client_image12_dpuq7k.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1774979605/client_image8_modhms.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1774979617/client_image13_wmjb2p.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1774979527/client_image22_mbb9lo.jpg",
];

function LogoStrip({ reverse = false }: { reverse?: boolean }) {
	return (
		<div className="overflow-hidden py-6">
			<motion.div
				animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "linear",
				}}
				className="flex gap-12 w-max">
				{[...LOGOS, ...LOGOS].map((logo, i) => (
					<div
						key={i}
						className="min-w-[200px] flex items-center justify-center transition duration-300 hover:scale-110">
						<Image
							src={logo}
							alt="Client Logo"
							width={200}
							height={100}
							className="object-contain max-h-[70px]"
							style={{ width: "auto", height: "auto" }}
						/>
					</div>
				))}
			</motion.div>
		</div>
	);
}

export default function LogoShowcase() {
	return (
		<section className="relative bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] py-20 overflow-hidden">
			{/* Subtle Glow */}
			<div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#052B59]/10 blur-[100px] rounded-full" />

			{/* Heading */}
			<div className="text-center mb-12 px-6 relative z-10">
				<h2 className="text-3xl sm:text-5xl font-extrabold text-[#052B59]">
					Trusted by <span className="text-[#F59E0B]">Leading Clients</span>
				</h2>

				<p className="mt-4 text-[#334155] max-w-2xl mx-auto text-base sm:text-lg">
					Siri Consultants delivers structural engineering excellence across
					industries.
				</p>
			</div>

			{/* Rows */}
			<LogoStrip />
			<LogoStrip reverse />
		</section>
	);
}
