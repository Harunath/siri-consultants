"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type HeroBannerProps = {
	title: string;
	subtitle?: string;
	description?: string;
	image: string;
	primaryBtn?: {
		label: string;
		href: string;
	};
	secondaryBtn?: {
		label: string;
		href: string;
	};
};

export default function HeroBanner({
	title,
	subtitle,
	description,
	image,
	primaryBtn,
	secondaryBtn,
}: HeroBannerProps) {
	return (
		<section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
			{/* Background Image */}
			<Image
				src={image}
				alt="banner"
				fill
				priority
				sizes="100vw"
				className="object-cover"
			/>

			{/* Overlay (VERY IMPORTANT for readability) */}
			<div className="absolute inset-0 bg-black/50 md:bg-black/40" />

			{/* Content */}
			<div className="relative z-10 max-w-4xl text-center px-4 sm:px-6">
				{/* Subtitle */}
				{subtitle && (
					<motion.p
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-[#F59E0B] uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
						{subtitle}
					</motion.p>
				)}

				{/* Title */}
				<motion.h1
					initial={{ opacity: 0, y: 25 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="
            text-2xl 
            sm:text-3xl 
            md:text-5xl 
            lg:text-6xl 
            font-extrabold 
            text-white 
            leading-tight
          ">
					{title}
				</motion.h1>

				{/* Description */}
				{description && (
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
						{description}
					</motion.p>
				)}

				{/* Buttons */}
				<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
					{primaryBtn && (
						<Link href={primaryBtn.href} className="w-full sm:w-auto">
							<button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F59E0B] text-white font-semibold hover:bg-[#d97706] transition">
								{primaryBtn.label}
							</button>
						</Link>
					)}

					{secondaryBtn && (
						<Link href={secondaryBtn.href} className="w-full sm:w-auto">
							<button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#052B59] transition">
								{secondaryBtn.label}
							</button>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}
