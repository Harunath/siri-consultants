import AboutPreview from "@/components/home/AboutPreview";
import ClientLogos from "@/components/home/ClientLogos";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyUs from "@/components/home/WhyUs";
import React from "react";

const page = () => {
	return (
		<>
			<Hero />
			<AboutPreview />
			<ClientLogos />
			<ServicesPreview />
			<WhyUs />
		</>
	);
};

export default page;
