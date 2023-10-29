import { cn } from "../utils/utils";
import { Icon } from "./Icons";

type ProjectCardProps = {
  name: string;
  tags: {
    title: string;
    color: string;
  }[];
  description: string;
  github_url: string;
  url: string | null;
};

function ProjectCard({
  name,
  tags,
  description,
  github_url,
  url,
}: ProjectCardProps) {
  return (
    <div className="my-6 bg-slate-800 p-5 first:mt-0 last:mb-0">
      <header className="flex items-start justify-between">
        <div className="text-blue-500">
          <h3 className="text-lg font-semibold ">{name}</h3>
          <div>
            {tags.map((tag) => (
              <span
                key={tag.title}
                className={cn(
                  tag.color,
                  "mr-2 rounded-md px-2 py-1 text-sm font-medium uppercase text-black",
                )}
              >
                {tag.title}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <a href={url}>
            <Icon icon="link" className="h-6 w-6" />
          </a>
          <a href={github_url}>
            <Icon icon="github" className="h-6 w-6" fill="white" />
          </a>
        </div>
      </header>
      <main className="py-4">
        <p>{description}</p>
      </main>
    </div>
  );
}

export default ProjectCard;
