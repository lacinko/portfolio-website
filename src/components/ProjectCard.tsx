import { Project } from "../types/types";
import { cn } from "../utils/utils";
import { Icon } from "./Icons";

enum TAG_COLORS {
  "bg-green-500" = "bg-green-500",
  "bg-slate-400" = "bg-slate-400",
  "bg-red-500" = "bg-red-500",
  "bg-yellow-500" = "bg-yellow-500",
  "bg-blue-500" = "bg-blue-500",
  "bg-indigo-500" = "bg-indigo-500",
  "bg-orange-500" = "bg-orange-500",
}

const highlightsMap = new Map<string, string[]>([
  [
    "Resume API",
    [
      "Created a REST API using Node.js and Express to serve data from a PostgreSQL database.",
      "Written in TypeScript to ensure type safety and improve code quality.",
      "Utilized Prisma ORM to interact with the database and manage migrations.",
      "Used zod to validate the request body and response data.",
      "Structured the codebase using the MVC design pattern.",
      "Written documentation using Swagger UI and OpenAPI specification.",
      "Deployed the API to my own Hetzner VPS running Ubuntu server.",
      "Configured a Nginx reverse proxy to serve the API over HTTPS.",
      "And more, see the code on GitHub.",
    ],
  ],
  [
    "Social Media App Frontend",
    [
      "Created a web app Tailwind CSS and React and Shadcn UI library.",
      "Written in TypeScript to ensure type safety and improve code quality.",
      "Implemented authentication using JWT and refresh tokens.",
      "Used React Router to create a single page application.",
      "Used React Toolkit Query to fetch data from the API.",
      "Used React Hook Form and Zod to validate the contact form.",
      "Implemented nested comments using recursion.",
      "Ability to like and unlike posts and comments.",
      "Ability to create, edit and delete posts and comments.",
      "Sorting and searching of posts.",
      "And more, see the code on GitHub.",
    ],
  ],
]);

function ProjectCard({ name, tags, description, githubUrl, url }: Project) {
  const isHighlighted = tags.some((tag) => tag.name === "highlighted");
  return (
    <div className="bg-slate-800 p-5">
      <header className="flex items-start justify-between">
        <div>
          <h3 className="pb-1 pr-2 font-semibold md:text-lg">{name}</h3>
          <div>
            {tags.map((tag) => (
              <span
                key={tag.id}
                className={cn(
                  TAG_COLORS[tag.color as keyof typeof TAG_COLORS],
                  "mr-2 rounded-md bg-opacity-90 px-2 py-1 text-sm font-medium uppercase text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",
                )}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          {url ? (
            <a href={url}>
              <Icon icon="link" className="h-6 w-6" />
            </a>
          ) : null}
          <a href={githubUrl}>
            <Icon icon="github" className="h-6 w-6" fill="white" />
          </a>
        </div>
      </header>
      <main className="py-4 text-sm md:text-base">
        {isHighlighted ? (
          <ul className="mt-2 grid grid-cols-1 gap-1 text-sm md:text-base">
            {highlightsMap.get(name)!.map((highlight) => (
              <li key={highlight} className="flex items-center gap-1">
                <span className="text-gray-400">-</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </main>
    </div>
  );
}

export default ProjectCard;
