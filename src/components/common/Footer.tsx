"use client";

import Link from "next/link";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaMapMarkerAlt,
	FaPhone,
	FaEnvelope,
} from "react-icons/fa";

/* ================= CONFIG ================= */

const NAV_LINKS = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

const SERVICES = [
	"Architectural Services",
	"Structural Engineering",
	"Electrical & HVAC",
	"Project Management",
];

const CONTACT = [
	{
		icon: FaMapMarkerAlt,
		text: "Hyderabad, India",
	},
	{
		icon: FaPhone,
		text: "+91 XXXXX XXXXX",
	},
	{
		icon: FaEnvelope,
		text: "info@siriconsultants.com",
	},
];

const SOCIALS = [
	{ icon: FaFacebookF, href: "#" },
	{ icon: FaInstagram, href: "#" },
	{ icon: FaLinkedinIn, href: "#" },
];

/* ================= COMPONENT ================= */

export default function Footer() {
	return (
		<footer className="bg-[#052B59] text-white pt-16 pb-8">
			<div className="max-w-7xl mx-auto px-6">
				{/* GRID */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* BRAND (MATCH NAVBAR STYLE) */}
					<div>
						<Link href="/" className="flex flex-col leading-tight">
							<span className="text-xl font-bold tracking-wide">
								SIRI CONSULTANTS
							</span>
							<span className="text-xs text-gray-300">
								Architects Engineers & Industrial Consultants
							</span>
						</Link>

						<p className="mt-4 text-sm text-gray-300 leading-relaxed">
							Delivering high-performance engineering solutions with precision,
							reliability, and trust.
						</p>

						{/* SOCIAL */}
						<div className="flex gap-3 mt-6">
							{SOCIALS.map((item, i) => {
								const Icon = item.icon;
								return (
									<Link
										key={i}
										href={item.href}
										className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[#F59E0B] transition">
										<Icon size={14} />
									</Link>
								);
							})}
						</div>
					</div>

					{/* QUICK LINKS */}
					<div>
						<h4 className="text-lg font-semibold mb-4 text-[#F59E0B]">
							Quick Links
						</h4>

						<ul className="space-y-3 text-sm text-gray-300">
							{NAV_LINKS.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="hover:text-[#F59E0B] transition">
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* SERVICES */}
					<div>
						<h4 className="text-lg font-semibold mb-4 text-[#F59E0B]">
							Services
						</h4>

						<ul className="space-y-3 text-sm text-gray-300">
							{SERVICES.map((service, i) => (
								<li key={i} className="hover:text-[#F59E0B] transition">
									{service}
								</li>
							))}
						</ul>
					</div>

					{/* CONTACT */}
					<div>
						<h4 className="text-lg font-semibold mb-4 text-[#F59E0B]">
							Contact
						</h4>

						<ul className="space-y-4 text-sm text-gray-300">
							{CONTACT.map((item, i) => {
								const Icon = item.icon;
								return (
									<li key={i} className="flex gap-3">
										<Icon className="text-[#F59E0B] mt-1" />
										<span>{item.text}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				{/* DIVIDER */}
				<div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
					<p>
						© {new Date().getFullYear()} Siri Consultants. All rights reserved.
					</p>

					<p className="mt-3 md:mt-0">
						Developed by{" "}
						<a
							href="https://hsdev.in"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#F59E0B] font-medium hover:underline">
							HSDev
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
