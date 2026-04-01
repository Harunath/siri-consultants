"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1774978130/banner2_xbwinx.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1774978135/banner4_lstoqw.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1774978083/Cofrentes_nuclear_power_plant_cooling_towers_retouched_w1inid.jpg",
];

export default function HeroCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
	});

	// autoplay
	const autoplay = useCallback(() => {
		if (!emblaApi) return;

		const interval = setInterval(() => {
			emblaApi.scrollNext();
		}, 4500);

		return () => clearInterval(interval);
	}, [emblaApi]);

	useEffect(() => {
		const stop = autoplay();
		return stop;
	}, [autoplay]);

	return (
		<section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden">
			{/* Carousel */}
			<div className="overflow-hidden h-full" ref={emblaRef}>
				<div className="flex h-full">
					{slides.map((img, index) => (
						<div key={index} className="flex-[0_0_100%] relative h-full">
							{/* Image */}
							<div
								className="absolute inset-0 bg-cover bg-center will-change-transform animate-[zoom_8s_linear_infinite]"
								style={{
									backgroundImage: `url(${img})`,
								}}
							/>

							{/* 🔥 Brand Overlay (important upgrade) */}
							<div className="absolute inset-0 bg-gradient-to-b from-[#052B59]/80 via-[#052B59]/60 to-black/70" />
						</div>
					))}
				</div>
			</div>

			{/* Content */}
			<div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4 sm:px-6">
				<div className="max-w-5xl ">
					<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
						Building India’s Industrial Backbone Since 1981
					</h1>

					<p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10">
						Experts in Structural, Architectural & Industrial Engineering
						Solutions
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						{/* Primary CTA */}
						<Link
							href="/projects"
							className="bg-[#F59E0B] text-black px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition">
							View Projects
						</Link>

						{/* Secondary CTA */}
						<Link
							href="/contact"
							className="border border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#052B59] transition">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
