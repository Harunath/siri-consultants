import HeroBanner from "@/components/common/HeroBanner";

export default function ContactBanner() {
	return (
		<HeroBanner
			subtitle="Contact Us"
			title="Let’s Build Something Great Together"
			description="Have a project in mind or need expert engineering guidance? Get in touch with our team today."
			image="https://res.cloudinary.com/dgulr1hgd/image/upload/q_auto/f_auto/v1774978130/banner2_xbwinx.jpg"
			primaryBtn={{
				label: "Send Message",
				href: "/contact#form",
			}}
			secondaryBtn={{
				label: "Our Services",
				href: "/services",
			}}
		/>
	);
}
