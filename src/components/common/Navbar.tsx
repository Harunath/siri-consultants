"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	// Scroll effect
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isSolid = scrolled;

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "About Us", href: "/about" },
		{ name: "Projects", href: "/projects" }, // ✅ only this
		{ name: "Clients", href: "/clients" },
		{ name: "Careers", href: "/careers" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 py-5 ${
				mobileOpen
					? "bg-white"
					: isSolid
						? "bg-white shadow-md"
						: "bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
				{/* LOGO */}
				<Link href="/" className="flex flex-col leading-tight">
					{/* <span
						className={`text-xl font-bold ${
							mobileOpen
								? "text-[#052B59]"
								: isSolid
									? "text-[#052B59]"
									: "text-white"
						}`}>
						SIRI CONSULTANTS
					</span>
					<span
						className={`text-xs ${
							mobileOpen
								? "text-[#052B59]"
								: isSolid
									? "text-[#052B59]"
									: "text-white"
						}`}>
						Architects Engineers & Industrial Consultants
					</span> */}
					<Image
						height={50}
						width={50}
						src="/0.jpg"
						alt="Siri Consultants Logo"
					/>
				</Link>

				{/* DESKTOP NAV */}
				<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`transition-all duration-300 ${
								isSolid
									? "text-[#334155] hover:text-[#052B59]"
									: "text-white hover:text-[#F59E0B]"
							}`}>
							{link.name}
						</Link>
					))}
				</nav>

				{/* CTA */}
				<Link
					href="/contact"
					className={`hidden md:inline-block px-5 py-2 rounded-full text-sm font-semibold transition ${
						isSolid
							? "bg-[#052B59] text-white hover:bg-[#F59E0B] hover:text-black"
							: "bg-white text-[#052B59] hover:bg-[#F59E0B] hover:text-black"
					}`}>
					Get Consultation
				</Link>

				{/* MOBILE BUTTON */}
				<button
					onClick={() => setMobileOpen(!mobileOpen)}
					className={`md:hidden text-2xl ${
						mobileOpen
							? "text-[#052B59]"
							: isSolid
								? "text-[#052B59]"
								: "text-white"
					}`}>
					☰
				</button>
			</div>

			{/* MOBILE MENU */}
			{mobileOpen && (
				<div className={`md:hidden bg-white shadow-lg px-6 py-5 space-y-4`}>
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							onClick={() => setMobileOpen(false)}
							className="block text-gray-700 text-sm font-medium">
							{link.name}
						</Link>
					))}
				</div>
			)}
		</header>
	);
}
