"use client";

import { useState } from "react";
import Image from "next/image";

const logos = [
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774979640/client_image6_r94c8m.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774979617/client_image13_wmjb2p.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774979605/client_image8_modhms.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774979588/client_image2_cs3ggi.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774979578/client_image1_mxjijg.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774979574/client_image18_ehpelr.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774979553/client_image5_z3plfn.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774979551/client_image12_dpuq7k.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774979535/client_image23_jp6y1b.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774979527/client_image22_mbb9lo.jpg",
];

export default function ClientsSection() {
	const [showAll, setShowAll] = useState(false);

	const visibleLogos = showAll ? logos : logos.slice(0, 5); // show 2 rows initially

	return (
		<section className="py-24 bg-white">
			{/* Heading */}
			<div className="text-center mb-14 px-6">
				<h2 className="text-3xl sm:text-5xl font-bold text-[#052B59]">
					Our Clients
				</h2>
				<p className="mt-4 text-[#334155] max-w-2xl mx-auto">
					Trusted by leading organizations across industries.
				</p>
			</div>

			{/* Logos Grid */}
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-8 items-center">
					{visibleLogos.map((logo, i) => (
						<div
							key={i}
							className="flex items-center justify-center transition duration-300 hover:scale-110">
							<Image
								src={logo}
								alt="Client Logo"
								width={480}
								height={240}
								className="object-contain max-h-20 "
							/>
						</div>
					))}
				</div>
			</div>

			{/* Toggle Button */}
			<div className="text-center mt-12">
				<button
					onClick={() => setShowAll(!showAll)}
					className="px-6 py-2 rounded-full border border-[#052B59] text-[#052B59] font-medium hover:bg-[#052B59] hover:text-white transition">
					{showAll ? "Show Less" : "View More"}
				</button>
			</div>
		</section>
	);
}
