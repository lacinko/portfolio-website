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
      figcaption: "Microsoft Server SQL",
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
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {skills.map((skill) => (
        <li key={skill.id}>
          <SkillCard
            icon={skill.icon}
            className="h-10 w-10"
            fill="white"
            figcaption={skill.figcaption}
          />
        </li>
      ))}
    </ul>
  );
}

export default Skills;
