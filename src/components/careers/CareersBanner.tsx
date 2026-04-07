import HeroBanner from "@/components/common/HeroBanner";

export default function CareersBanner() {
	return (
		<HeroBanner
			subtitle="Careers"
			title="Build Your Future With Us"
			description="Join a team driven by innovation, engineering excellence, and a passion for delivering impactful solutions."
			image="https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775559851/the-cement-industry-and-the-environment-air-quality-monitoring_yavzdu.jpg"
			primaryBtn={{
				label: "View Open Positions",
				href: "/careers/jobs",
			}}
			secondaryBtn={{
				label: "Contact HR",
				href: "/contact",
			}}
		/>
	);
}
