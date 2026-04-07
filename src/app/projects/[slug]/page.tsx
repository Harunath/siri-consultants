import { getProject } from "@/lib/getprojects";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";

export default async function IndustryPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const projects = getProject((await params).slug);

	return (
		<div>
			{projects?.completed.map((item) => (
				<div key={item.id}>
					<h2>{item.name}</h2>
					<p>{item.location}</p>
					{item.capacity && <p>Capacity: {item.capacity}</p>}
					{item.cost && <p>Cost: {item.cost}</p>}
				</div>
			))}
		</div>
	);
}
