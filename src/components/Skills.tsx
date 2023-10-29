import SkillCard from "./SkillCard";

function Skills() {
  const skills = [
    {
      id: 1,
      icon: "HTML5",
      figcaption: "HTML5",
      fill: "#f06529",
    },
    {
      id: 2,
      icon: "CSS3",
      figcaption: "CSS3",
    },
    {
      id: 3,
      icon: "JavaScript",
      figcaption: "JavaScript",
    },
    {
      id: 4,
      icon: "TypeScript",
      figcaption: "TypeScript",
    },
    {
      id: 5,
      icon: "NodeJs",
      figcaption: "Node",
    },
    {
      id: 6,
      icon: "Express",
      figcaption: "Express",
    },
    {
      id: 7,
      icon: "React",
      figcaption: "React",
    },
    {
      id: 8,
      icon: "VueJS",
      figcaption: "Vue",
    },
    {
      id: 9,
      icon: "TailwindCSS",
      figcaption: "Tailwind",
    },
    {
      id: 10,
      icon: "Bootstrap",
      figcaption: "Bootstrap",
    },
    {
      id: 11,
      icon: "Redux",
      figcaption: "Redux",
    },
    {
      id: 12,
      icon: "ReactRouter",
      figcaption: "React Router",
    },
    {
      id: 13,
      icon: "jQuerry",
      figcaption: "jQuerry",
    },
    {
      id: 14,
      icon: "PostgreSQL",
      figcaption: "PostgreSQL",
    },
    {
      id: 15,
      icon: "MongoDB",
      figcaption: "MongoDB",
    },
    {
      id: 16,
      icon: "MSSQLServer",
      figcaption: "MS Server SQL",
    },
    {
      id: 17,
      icon: "MSAzure",
      figcaption: "Microsoft Azure",
    },
    {
      id: 18,
      icon: "MSSharePoint",
      figcaption: "SharePoint",
    },
    {
      id: 19,
      icon: "Prisma",
      figcaption: "Prisma",
    },
    {
      id: 20,
      icon: "Git",
      figcaption: "Git",
    },
    {
      id: 21,
      icon: "MSPowerAutomate",
      figcaption: "Power Automate",
    },
    {
      id: 22,
      icon: "MSPowerApps",
      figcaption: "Power Apps",
    },
  ];
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
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <li key={skill.id}>
              <SkillCard
                icon={skill.icon}
                className="h-10 w-10 pt-2"
                fill="white"
                figcaption={skill.figcaption}
              />
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

export default Skills;
