import { useQuery } from "@tanstack/react-query";
import { convertUrlParamsIntoURLString } from "../utils/utils";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "../api/api";

function Projects() {
  // Define an object to represent the parameters
  const projectsQueryParams = {
    include: {
      tags: true,
    },
  };

  // Convert the object to a URL-encoded query string
  const projectsQueryString =
    convertUrlParamsIntoURLString(projectsQueryParams);
  const { data: projects } = useQuery({
    queryKey: ["projects", projectsQueryString],
    queryFn: () => getAllProjects(projectsQueryString),
  });

  return (
    <div className="flex flex-col gap-3">
      {projects
        ? projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        : null}
    </div>
  );
}

export default Projects;
