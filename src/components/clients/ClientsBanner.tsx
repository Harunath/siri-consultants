import HeroBanner from "@/components/common/HeroBanner";

export default function ClientsBanner() {
	return (
		<HeroBanner
			subtitle="Our Clients"
			title="Trusted by Industry Leaders Across Sectors"
			description="We partner with leading organizations to deliver reliable, high-quality engineering solutions across multiple industries."
			image="https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774978130/banner2_xbwinx.jpg"
			primaryBtn={{
				label: "Work With Us",
				href: "/contact",
			}}
			secondaryBtn={{
				label: "View Projects",
				href: "/projects",
			}}
		/>
	);
}
