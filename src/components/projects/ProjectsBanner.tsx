import HeroBanner from "@/components/common/HeroBanner";

export default function ProjectsBanner() {
	return (
		<HeroBanner
			subtitle="Our Projects"
			title="Engineering Excellence Built on Trust"
			image="https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1775559851/the-cement-industry-and-the-environment-air-quality-monitoring_yavzdu.jpg"
			primaryBtn={{
				label: "Contact Us",
				href: "/contact",
			}}
			secondaryBtn={{
				label: "Our Services",
				href: "/services",
			}}
		/>
	);
}
