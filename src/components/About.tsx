function About() {
  const softSkills = [
    "Creative spirit",
    "Reliable",
    "Professional",
    "Organized",
    "Time management",
    "Team player",
    "Fast learner",
    "Motivated",
  ];

  const aboutMe = [
    "Seasoned IT professional with a diverse background in web development and software engineering.",
    "HTML/CSS Developer at AnFas, specializing in web design and collaborating with designers.",
    "Experienced with version control and teamwork, contributing to projects on GitLab.",
    "Frontend Developer at Blue Lemons, specializing in React and TypeScript for user-centric interfaces.",
    "Proficient in Tailwind CSS to create responsive applications with clean code.",
    "Software Engineer at SwiftShift, excelling in React and TypeScript and contributing to backend development using Node.js, Express, and Prisma.",
    "Spearheaded the creation of a microservice to streamline communication processes.",
    "Currently, an IT Solution Lead at The Adecco Group, focusing on cutting-edge solutions using the Microsoft Power Platform.",
    "Passion for optimizing business processes, increasing efficiency, and driving productivity.",
    "Dedicated to bridging the gap between technology and success, thriving on challenges, and eager to contribute skills and experience to projects.",
  ];
  return (
    <>
      <div className="bg-slate-800 p-5">
        <h3>
          <span className="font-semibold">Soft skills:</span>
        </h3>
        <ul className="grid grid-cols-2 text-sm md:text-base">
          {softSkills.map((skill) => (
            <li key={skill} className="text-slate-300">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex list-inside list-disc flex-col gap-3 bg-slate-800 p-5 text-sm md:text-base">
        {aboutMe.map((paragraph) => (
          <li key={paragraph} className="text-slate-300">
            {paragraph}
          </li>
        ))}
      </ul>
      <div className="bg-slate-800 p-5">
        <h3>
          <span className="font-semibold">Languages:</span>
        </h3>
        <ul className="flex justify-between gap-2 text-sm text-slate-300 md:text-base">
          <li>
            English <span>C1</span>
          </li>
          <li>
            Czech <span>Native</span>
          </li>
          <li>
            Slovak <span>Native</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
