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

  console.log(projects);

  const oldProjects = [
    {
      id: 1,
      name: "Social Media App Frontend",
      tags: [{ title: "new", color: "bg-green-500" }],
      description:
        "Social media app built with React, Redux Toolkit, TypeScript, Tailwind",
      github_url: "https://github.com/lacinko/social-app-frontend",
      url: null,
    },
    {
      id: 2,
      name: "Social Media App Backend",
      tags: [{ title: "new", color: "bg-green-500" }],
      description:
        "Social media app built with Node.js, Express, TypeScript, PostgreSQL, Prisma",
      github_url: "https://github.com/lacinko/social-app-backend",
      url: null,
    },
    {
      id: 3,
      name: "Fake Store",
      tags: [{ title: "new", color: "bg-green-500" }],
      description:
        "Basic e-commerce app built with React, Redux Toolkit, TypeScript, Tailwind and Fake Store API",
      github_url: "https://github.com/lacinko/fake-st",
      url: "fake-st.vercel.app/",
    },
    {
      id: 4,
      name: "Portfolio Website",
      tags: [{ title: "new", color: "bg-green-500" }],
      description:
        "Portfolio website built with React, TypeScript, Tailwind and React Query.",
      github_url: "https://github.com/lacinko/portfolio-website",
      url: null,
    },
    {
      id: 5,
      name: "Weather App",
      tags: [{ title: "old", color: "bg-slate-400" }],
      description:
        "Small weather app built with vanila JavaScript, HTML and CSS",
      github_url: "https://github.com/lacinko/weather-app",
      url: "https://lacinko.github.io/weather-app",
    },
    {
      id: 6,
      name: "Calendar App",
      tags: [{ title: "old", color: "bg-slate-400" }],
      description:
        "Basic calendar app built with vanila JavaScript, HTML and CSS",
      github_url: "https://github.com/lacinko/CalendarApp",
      url: "https://lacinko.github.io/CalendarApp/",
    },
    {
      id: 7,
      name: "Recipe App",
      tags: [{ title: "old", color: "bg-slate-400" }],
      description: "Recipe app built with React, CSS and Firebase.",
      github_url: "https://github.com/lacinko/recipe-app",
      url: "https://recipe-app-19802.web.app/",
    },
  ];
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
