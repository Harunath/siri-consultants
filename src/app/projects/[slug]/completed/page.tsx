import { getProject } from "@/lib/getprojects";
import { notFound } from "next/navigation";

export default async function CompletedPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const project = getProject((await params).slug);

	if (!project) return notFound();

	return (
		<section className="pt-32 pb-20 bg-gradient-to-b from-[#052B59] to-[#021933] min-h-screen text-white">
			<div className="max-w-7xl mx-auto px-6">
				{/* HEADER */}
				<div className="mb-10">
					<h1 className="text-4xl font-bold">{project.title}</h1>
					<p className="text-gray-300 mt-2">Completed Projects Overview</p>

					<div className="mt-4 h-[3px] w-20 bg-[#F59E0B]" />
				</div>

				{/* EMPTY STATE */}
				{project.completed.length === 0 ? (
					<div className="text-center py-20 text-gray-400">
						No completed projects available.
					</div>
				) : (
					<div className="overflow-x-auto rounded-2xl shadow-lg">
						<table className="w-full text-left border-collapse">
							{/* HEADER */}
							<thead className="bg-[#021933] text-gray-300 text-sm uppercase">
								<tr>
									<th className="px-6 py-4">SI No</th>
									<th className="px-6 py-4">Project Name</th>
									<th className="px-6 py-4">Location</th>
									<th className="px-6 py-4">Capacity</th>
									<th className="px-6 py-4">Cost</th>
									<th className="px-6 py-4 text-center">Status</th>
								</tr>
							</thead>

							{/* BODY */}
							<tbody>
								{project.completed.map((item, index) => (
									<tr
										key={item.id}
										className="border-b border-white/10 hover:bg-white/5 transition">
										{/* SI NO */}
										<td className="px-6 py-4 font-medium text-gray-300">
											{index + 1}
										</td>

										{/* NAME */}
										<td className="px-6 py-4 font-semibold text-white">
											{item.name}
										</td>

										{/* LOCATION */}
										<td className="px-6 py-4 text-gray-300">
											{item.location || "-"}
										</td>

										{/* CAPACITY */}
										<td className="px-6 py-4">
											{item.capacity ? (
												<span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 font-medium">
													{item.capacity}
												</span>
											) : (
												"-"
											)}
										</td>

										{/* COST */}
										<td className="px-6 py-4">
											{item.cost ? (
												<span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-300 font-medium">
													{item.cost}
												</span>
											) : (
												"-"
											)}
										</td>

										{/* STATUS */}
										<td className="px-6 py-4 text-center">
											<span className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
												Completed
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</section>
	);
}
