import { Project } from "../types/types";
import { cn } from "../utils/utils";
import { Icon } from "./Icons";

function ProjectCard({ name, tags, description, githubUrl, url }: Project) {
  return (
    <div className="bg-slate-800 p-5">
      <header className="flex items-start justify-between">
        <div className="text-blue-500">
          <h3 className="pb-1 pr-2 font-semibold md:text-lg">{name}</h3>
          <div>
            {tags.map((tag) => (
              <span
                key={tag.id}
                className={cn(
                  tag.color,
                  "mr-2 rounded-md px-2 py-1 text-sm font-medium uppercase text-black",
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
        <p>{description}</p>
      </main>
    </div>
  );
}

export default ProjectCard;
