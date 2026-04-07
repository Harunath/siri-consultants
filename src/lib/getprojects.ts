import { projects } from "@/lib/ProjectsData";

export function getProject(slug: string) {
	return projects.find((p) => p.slug === slug);
}
