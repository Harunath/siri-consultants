import AboutBanner from "@/components/about/AboutBanner";
import OurCulture from "@/components/about/OurCulture";
import OurTeam from "@/components/about/OurTeam";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhoWeAre from "@/components/about/WhoWeAre";
import React from "react";

const page = () => {
	return (
		<>
			<AboutBanner />
			<WhoWeAre />
			<WhatWeDo />
			<OurTeam />
			<OurCulture />
		</>
	);
};

export default page;
