import AboutPreview from "@/components/home/AboutPreview";
import ClientLogos from "@/components/home/ClientLogos";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyUs from "@/components/home/WhyUs";
import React from "react";
import ProjectsMini from "@/components/home/ProjectsMini";
import ExpertiseTools from "@/components/about/ExpertiseTools";
import ExperienceSection from "@/components/home/ExperienceSection";
import QualityPolicy from "@/components/home/QualityPolicy";

const page = () => {
	return (
		<>
			<Hero />
			<AboutPreview />
			<ClientLogos />
			<ServicesPreview />
			<ProjectsMini />
			<WhyUs />

			<ExperienceSection />
			<ExpertiseTools />
			<QualityPolicy />
		</>
	);
};

export default page;
