import ProjectCard from "./ProjectCard";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      name: "Weather App",
      tags: ["old"],
      description:
        "Small weather app built with vanila JavaScript, HTML and CSS",
      github_url: "https://github.com/lacinko/weather-app",
      url: "https://lacinko.github.io/weather-app",
    },
    {
      id: 2,
      name: "Calendar App",
      tags: ["old"],
      description:
        "Basic calendar app built with vanila JavaScript, HTML and CSS",
      github_url: "https://github.com/lacinko/CalendarApp",
      url: "https://lacinko.github.io/CalendarApp/",
    },
    {
      id: 3,
      name: "Recipe App",
      tags: ["old"],
      description: "Recipe app built with React, CSS and Firebase.",
      github_url: "https://github.com/lacinko/recipe-app",
      url: "https://recipe-app-19802.web.app/",
    },
  ];
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default Projects;
