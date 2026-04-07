export type ProjectItem = {
	id: number;
	name: string;
	location?: string;
	capacity?: string;
	cost?: string;
	status: "completed" | "ongoing";
};

export type IndustryProject = {
	image: string;
	title: string;
	slug: string;
	description?: string;
	completed: ProjectItem[];
	ongoing: ProjectItem[];
};

export const projects: IndustryProject[] = [
	{
		title: "Cement Plants",
		slug: "cement",
		image:
			"https://res.cloudinary.com/your-cloud-name/image/upload/v123/cement-plant.jpg",
		description:
			"We have successfully completed several cement plant projects, showcasing our expertise in delivering high-quality solutions for the cement industry. Our portfolio includes a range of projects, from grinding plants to large-scale cement production facilities, demonstrating our commitment to excellence and customer satisfaction.",
		completed: [
			{
				id: 1,
				name: "Shree Cement Ltd., Grinding Plant",
				location: "Khushkhera, Rajasthan",
				capacity: "250 TPH",
				status: "completed",
			},
			{
				id: 2,
				name: "Hemadri Cements Limited",
				location: "Jaggayyapet, AP",
				capacity: "200 TPD",
				status: "completed",
			},
			{
				id: 3,
				name: "P.R. Cements Limited",
				location: "Nalgonda, AP",
				capacity: "200 TPD",
				status: "completed",
			},
			{
				id: 4,
				name: "Essar Cements Limited",
				location: "Matampally, Nalgonda, AP",
				capacity: "200 TPD",
				status: "completed",
			},
			{
				id: 5,
				name: "Viswam Cements Limited",
				location: "Kodada, AP",
				capacity: "100 TPD",
				status: "completed",
			},
			{
				id: 6,
				name: "Vasudeva Cements Limited",
				location: "Kodada, AP",
				capacity: "100 TPD",
				status: "completed",
			},
			{
				id: 7,
				name: "Shez Cements (Anjani Cements)",
				location: "Kodada, AP",
				capacity: "200 TPD",
				status: "completed",
			},
			{
				id: 8,
				name: "My Home Cements Ltd. Unit I",
				location: "Mellacheruvu, AP",
				capacity: "1000 TPD",
				status: "completed",
			},
			{
				id: 9,
				name: "My Home Cements Ltd. Unit II",
				location: "Mellacheruvu, AP",
				capacity: "1500 TPD",
				status: "completed",
			},
			{
				id: 10,
				name: "Sri Shimhadri Cements Ltd.",
				location: "Vizianagaram, AP",
				capacity: "1000 TPD",
				status: "completed",
			},
			{
				id: 11,
				name: "Murli Industries Cement Project",
				location: "Chandrapur, Maharashtra",
				capacity: "6000 TPD",
				status: "completed",
			},
			{
				id: 12,
				name: "Bhavya Cements Ltd.",
				location: "Guntur",
				capacity: "3000 TPD",
				status: "completed",
			},
		],

		ongoing: [
			{
				id: 1,
				name: "Shree Cement Unit X",
				location: "Rajasthan",
				capacity: "2500 TPD",
				status: "ongoing",
			},
			{
				id: 2,
				name: "Shree Cement Grinding Unit",
				location: "Bihar",
				capacity: "250 TPH",
				status: "ongoing",
			},
			{
				id: 3,
				name: "Shree Raipur Cement",
				location: "Chhattisgarh",
				capacity: "6000 TPD",
				status: "ongoing",
			},
			{
				id: 4,
				name: "Ghorahi Cement Industry",
				location: "Nepal",
				capacity: "2500 TPD",
				status: "ongoing",
			},
		],
	},

	{
		title: "Power Plants",
		slug: "power",
		image:
			"https://res.cloudinary.com/your-cloud-name/image/upload/v123/power-plant.jpg",
		description:
			"We have successfully completed several power plant projects, showcasing our expertise in delivering high-quality solutions for the power industry. Our portfolio includes a range of projects, from gas turbine plants to large-scale power generation facilities, demonstrating our commitment to excellence and customer satisfaction.",
		completed: [
			{
				id: 1,
				name: "BHEL Gas Turbine Plant",
				location: "Hyderabad",
				cost: "₹100 Lakhs",
				status: "completed",
			},
			{
				id: 2,
				name: "Navabharat Ferro Alloys Power Plant",
				location: "Khammam",
				cost: "₹100 Lakhs",
				status: "completed",
			},
			{
				id: 3,
				name: "Chhattisgarh Electricity Supply Co.",
				location: "Raipur",
				cost: "₹500 Lakhs",
				status: "completed",
			},
			{
				id: 4,
				name: "IOCL Co-generation Plant",
				location: "Bihar",
				cost: "₹500 Lakhs",
				status: "completed",
			},
		],
		ongoing: [
			{
				id: 1,
				name: "Pinakine Power Projects",
				location: "Kadapa",
				cost: "₹500 Lakhs",
				status: "ongoing",
			},
			{
				id: 2,
				name: "Redan Infrastructure",
				cost: "₹450 Lakhs",
				status: "ongoing",
			},
		],
	},

	{
		title: "Ferro Alloys",
		slug: "ferro",
		image:
			"https://res.cloudinary.com/your-cloud-name/image/upload/v123/ferro-alloys.jpg",
		description:
			"We have successfully completed several ferro alloy plant projects, showcasing our expertise in delivering high-quality solutions for the ferro alloy industry. Our portfolio includes a range of projects, from small-scale ferro alloy production facilities to large-scale plants, demonstrating our commitment to excellence and customer satisfaction.",
		completed: [
			{
				id: 1,
				name: "Navabharat Ferro Alloys Plant",
				location: "Khammam",
				cost: "₹300 Lakhs",
				status: "completed",
			},
			{
				id: 2,
				name: "VBC Ferro Alloys",
				location: "Medak",
				cost: "₹300 Lakhs",
				status: "completed",
			},
			{
				id: 3,
				name: "Ispat Alloys Phase III",
				location: "Orissa",
				cost: "₹120 Lakhs",
				status: "completed",
			},
		],
		ongoing: [
			{
				id: 1,
				name: "Rohit Ferro Tech",
				location: "Orissa",
				capacity: "67.5 MW",
				status: "ongoing",
			},
			{
				id: 2,
				name: "Abhijeet Gabon Ferro Alloys",
				location: "Africa",
				capacity: "27.5 MW",
				status: "ongoing",
			},
		],
	},

	{
		title: "Spinning Mills",
		slug: "spinning",
		image:
			"https://res.cloudinary.com/your-cloud-name/image/upload/v123/spinning.jpg",
		description:
			"We have successfully completed several spinning mill projects, showcasing our expertise in delivering high-quality solutions for the textile industry. Our portfolio includes a range of projects, from small-scale spinning mills to large-scale facilities, demonstrating our commitment to excellence and customer satisfaction.",
		completed: [
			{
				id: 1,
				name: "Nandyal Co-op Spinning Mills",
				location: "Kurnool",
				cost: "₹250 Lakhs",
				status: "completed",
			},
			{
				id: 2,
				name: "Suryavanshi Spinning Mills",
				location: "Medak",
				cost: "₹350 Lakhs",
				status: "completed",
			},
			{
				id: 3,
				name: "Surya Jyothi Spinning Mills",
				location: "Mahaboobnagar",
				cost: "₹100 Lakhs",
				status: "completed",
			},
		],
		ongoing: [],
	},

	{
		title: "Sugar Plants",
		slug: "sugar",
		image:
			"https://res.cloudinary.com/your-cloud-name/image/upload/v123/sugar-plant.jpg",
		description:
			"We have successfully completed several sugar plant projects, showcasing our expertise in delivering high-quality solutions for the sugar industry. Our portfolio includes a range of projects, from small-scale sugar mills to large-scale production facilities, demonstrating our commitment to excellence and customer satisfaction.",
		completed: [
			{
				id: 1,
				name: "Deccan Sugar Expansion",
				location: "East Godavari",
				cost: "₹20 Lakhs",
				status: "completed",
			},
			{
				id: 2,
				name: "Sree Vani Sugars",
				location: "Chittoor",
				cost: "₹200 Lakhs",
				status: "completed",
			},
		],
		ongoing: [],
	},

	{
		title: "Granite & Ceramic Plants",
		slug: "granite",
		image:
			"https://res.cloudinary.com/your-cloud-name/image/upload/v123/granite-ceramic.jpg",
		description:
			"We have successfully completed several granite and ceramic plant projects, showcasing our expertise in delivering high-quality solutions for the stone and ceramic industry. Our portfolio includes a range of projects, from small-scale granite processing units to large-scale ceramic production facilities, demonstrating our commitment to excellence and customer satisfaction.",
		completed: [
			{
				id: 1,
				name: "Gopikrishna Granites",
				location: "Medak",
				cost: "₹50 Lakhs",
				status: "completed",
			},
			{
				id: 2,
				name: "Stiles India Ltd.",
				location: "Tirupati",
				cost: "₹150 Lakhs",
				status: "completed",
			},
		],
		ongoing: [],
	},
];
