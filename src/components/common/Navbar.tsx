"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [projectOpen, setProjectOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);

	// Scroll detection
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 30);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Screen size detection
	useEffect(() => {
		const checkScreen = () => setIsMobile(window.innerWidth < 768);
		checkScreen();
		window.addEventListener("resize", checkScreen);
		return () => window.removeEventListener("resize", checkScreen);
	}, []);

	// Close dropdown on outside click
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setProjectOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const isSolid = scrolled || isMobile;

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isSolid ? "bg-white shadow-md py-3" : "bg-transparent py-5"
			}`}>
			<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex flex-col leading-tight">
					<span
						className={`text-xl font-bold tracking-wide ${
							isSolid ? "text-[#052B59]" : "text-white"
						}`}>
						SIRI CONSULTANTS
					</span>
					<span
						className={`text-xs ${
							isSolid ? "text-[#334155]" : "text-gray-300"
						}`}>
						Architects Engineers & Industrial Consultants
					</span>
				</Link>

				{/* Nav */}
				<nav className="hidden md:flex items-center gap-10 text-sm font-medium">
					{[
						{ name: "Home", href: "/" },
						{ name: "About Us", href: "/about" },
					].map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`px-2 py-1 rounded-md transition-all duration-300 ${
								isSolid
									? "text-[#334155] hover:text-[#052B59]"
									: "text-white hover:text-[#F59E0B]"
							} ${
								isSolid
									? "hover:shadow-[0_0_8px_rgba(5,43,89,0.4)]"
									: "hover:shadow-[0_0_8px_rgba(245,158,11,0.6)]"
							}`}>
							{link.name}
						</Link>
					))}

					{/* Projects Dropdown */}
					<div className="relative" ref={dropdownRef}>
						<button
							onClick={() => setProjectOpen(!projectOpen)}
							className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-300 ${
								isSolid
									? "text-[#334155] hover:text-[#052B59]"
									: "text-white hover:text-[#F59E0B]"
							} ${
								isSolid
									? "hover:shadow-[0_0_8px_rgba(5,43,89,0.4)]"
									: "hover:shadow-[0_0_8px_rgba(245,158,11,0.6)]"
							}`}>
							Projects <FaChevronDown size={12} />
						</button>

						{projectOpen && (
							<div className="absolute top-12 left-0 bg-white shadow-xl rounded-xl w-64 py-3 border border-gray-100">
								{[
									"Industrial Projects",
									"Residential Projects",
									"Commercial Projects",
									"Government Projects",
									"Educational Institutions",
									"Hospitality",
								].map((item) => (
									<Link
										key={item}
										href="#"
										className="block px-5 py-2 text-[#334155] hover:bg-[#F8FAFC] hover:text-[#052B59] transition">
										{item}
									</Link>
								))}
							</div>
						)}
					</div>

					{[
						{ name: "Clients", href: "/clients" },
						{ name: "Careers", href: "/careers" },
						{ name: "Contact", href: "/contact" },
					].map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`px-2 py-1 rounded-md transition-all duration-300 ${
								isSolid
									? "text-[#334155] hover:text-[#052B59]"
									: "text-white hover:text-[#F59E0B]"
							} ${
								isSolid
									? "hover:shadow-[0_0_8px_rgba(5,43,89,0.4)]"
									: "hover:shadow-[0_0_8px_rgba(245,158,11,0.6)]"
							}`}>
							{link.name}
						</Link>
					))}
				</nav>

				{/* CTA */}
				<Link
					href="/contact"
					className={`hidden md:inline-block px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300 ${
						isSolid
							? "bg-[#052B59] text-white hover:bg-[#F59E0B] hover:text-black"
							: "bg-white text-[#052B59] hover:bg-[#F59E0B] hover:text-black"
					}`}>
					Get Consultation
				</Link>

				{/* Mobile Icon */}
				<button
					className={`md:hidden text-2xl ${
						isSolid ? "text-[#052B59]" : "text-white"
					}`}>
					☰
				</button>
			</div>
		</header>
	);
}
