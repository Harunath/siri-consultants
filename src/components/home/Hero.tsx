"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775559793/powergeneration-1_npsbw4.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775559851/the-cement-industry-and-the-environment-air-quality-monitoring_yavzdu.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775559836/230823-maui-lahaina-wildfire-big-sugar-ag-plantations-water-climate-change-risk-history-colonialism-1-top-sugar-mill-credit-John-elk-getty-images_jzr4rq.jpg",
];

export default function HeroSlider() {
	const [index, setIndex] = useState(0);

	// Auto slide
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
			<AnimatePresence mode="wait">
				<motion.div
					key={index}
					initial={{ opacity: 0, scale: 1.1 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					className="absolute w-full h-full">
					<Image
						src={slides[index]}
						alt="Slide"
						fill
						className="object-cover"
						priority
					/>

					{/* Overlay */}
					<div className="absolute inset-0 bg-black/40" />

					{/* Content */}
					<motion.div
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
						<h1 className="text-3xl md:text-6xl font-bold mb-4">
							Engineering Excellence
						</h1>
						<p className="max-w-xl text-sm md:text-lg opacity-90">
							Delivering high-quality design and consulting solutions for
							industries worldwide.
						</p>
					</motion.div>
				</motion.div>
			</AnimatePresence>

			{/* Dots */}
			<div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
				{slides.map((_, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						className={`w-3 h-3 rounded-full ${
							index === i ? "bg-white" : "bg-white/40"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
