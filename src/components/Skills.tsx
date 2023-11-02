import { useQuery } from "@tanstack/react-query";
import SkillCard from "./SkillCard";
import { getAllHardSkills } from "../api/api";

function Skills() {
  // Convert the object to a URL-encoded query string
  const { data: skills } = useQuery({
    queryKey: ["hard_skills"],
    queryFn: () => getAllHardSkills(),
  });

  return (
    <>
      <article>
        <h3 className="pb-2 text-lg font-bold text-blue-500">
          Favourite technologies
          <br />
        </h3>
        <ul className="bg-slate-800 p-5 text-sm md:text-base">
          <li>TypeScript</li>
          <li>Front-end: React</li>
          <li>Styling: Tailwind</li>
          <li>State management: Redux Toolkit & Redux Toolkit Query</li>
          <li>Back-end: Node.js, Express</li>
          <li>Database: PostgreSQL, Prisma</li>
        </ul>
      </article>
      <article className="mt-4">
        <h3 className="pb-2 pt-4 text-lg font-bold text-blue-500">
          Technologies I worked with
        </h3>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {skills
            ? skills.map((skill) => (
                <li key={skill.id}>
                  <SkillCard
                    icon={skill.icon}
                    className="h-10 w-10 pt-2"
                    fill="white"
                    name={skill.name}
                  />
                </li>
              ))
            : null}
        </ul>
      </article>
    </>
  );
}

export default Skills;
