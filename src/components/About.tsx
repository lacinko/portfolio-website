import { useQuery } from "@tanstack/react-query";
import { getAllSoftSkills } from "../api/api";

function About() {
  // Convert the object to a URL-encoded query string
  const { data: softSkills } = useQuery({
    queryKey: ["soft_skills"],
    queryFn: () => getAllSoftSkills(),
  });

  const aboutMe = [
    "Full-time IT professional, part-time student. Currently living in Prague, Czech Republic.",
    "Finishing my masters's degree in Informatics at the University of Life Sciences in Prague.",
    "Passionate about web development and software engineering. Daily learning and improving skills.",
    "Intrested in new technologies and trends in the IT industry. Regularly attending conferences and meetups.",
    "HTML/CSS Developer at AnFas, specializing in web design and collaborating with designers.",
    "Experienced with version control and teamwork, contributing to projects on GitLab and Github.",
    "Frontend Developer at Blue Lemons, specializing in React and TypeScript for user-centric interfaces.",
    "Proficient in Tailwind CSS to create responsive applications with clean code.",
    "Software Engineer at SwiftShift, excelling in React and TypeScript and contributing to backend development using Node.js, Express, and Prisma.",
    "Responsible for the creation of a microservice to streamline communication processes using third party FAX API.",
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
          {softSkills
            ? softSkills.map((skill) => (
                <li key={skill.id} className="text-slate-300">
                  {skill.name}
                </li>
              ))
            : null}
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
        <ul className="flex gap-2 text-sm text-slate-300 md:text-base">
          <li>
            English <span>C1</span>,
          </li>
          <li>
            Czech <span>Native</span>,
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
