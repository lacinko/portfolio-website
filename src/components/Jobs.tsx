import JobCard from "./JobCard";

function Jobs() {
  const todayDate = new Date();
  const currentMonth = todayDate.toLocaleString("default", { month: "long" });
  const currentYear = todayDate.getFullYear();
  const jobRoles = [
    {
      id: 1,
      jobTitle: "IT Solution Lead",
      companyName: "The Adecco Group",
      startDate: "March 2023",
      endDate: `${currentMonth} ${currentYear}`,
      location: "Prague, Czechia · On-site",
      description:
        "As an IT Solution Lead, I have successfully spearheaded the design, development, and implementation of cutting-edge solutions primarily using Microsoft Power Platform, including Power Apps and Power Automate, along with my knowledge in SQL. With a passion for streamlining business processes, enhancing efficiency, and driving productivity, I am committed to delivering solutions that bridge the gap between technology and business objectives.",
      skills: ["Power Automate", "Power Apps", "SQL"],
    },
    {
      id: 2,
      jobTitle: "Software Engineer",
      companyName: "SwiftShift",
      startDate: "December 2021",
      endDate: "March 2023",
      location: "New York · Remote",
      description:
        "As a Software Engineer, I primarily focused on frontend development using React with TypeScript and Bootstrap. My responsibilities included crafting intuitive user interfaces, enhancing user experiences, and ensuring seamless interactions within the application. Additionally, I spearheaded the creation of a microservice using Node.js and Express.js. This service integrated a fax service with a third-party API provider, streamlining communication processes. I also contributed to backend development efforts, collaborating on features for a job searching application. This involved using Node.js, Express, and Prisma to optimize functionality and data management. Furthermore, I engaged in daily tasks centered around maintaining and advancing micro applications within Power Apps. I crafted efficient Power Automate flows to complement these applications, automating essential workflows and enhancing operational efficiency. In summary, my role as a Software Engineer encompassed frontend development using React and TypeScript, microservice creation with Node.js and Express.js, backend contribution with Node.js, Express, and Prisma, and consistent work with micro applications and Power Automate flows within Power Apps.",
      skills: [
        "Power Automate",
        "Power Apps",
        "Prisma",
        "Bootstrap",
        "SQL",
        "Express.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "React",
        "CSS",
        "HTML5",
        "Git",
      ],
    },
    {
      id: 3,
      jobTitle: "Frontend Developer",
      companyName: "Blue Lemons",
      startDate: "June 2021",
      endDate: "December 2021",
      location: "Prague, Czechia · Remote",
      description:
        "As a Frontend Developer, I specialized in React with TypeScript to create UI interfaces that prioritized user experience. I utilized Tailwind CSS for styling and collaborated closely with design and backend teams to translate concepts into responsive applications. My responsibilities included building reusable components, adhering to coding best practices, and independently solving technical challenges. This role allowed me to seamlessly merge technical expertise with design sensibilities, resulting in user-friendly and visually appealing web applications.",
      skills: [
        "Tailwind",
        "Sass",
        "SQL",
        "TypeScript",
        "JavaScript",
        "React",
        "CSS",
        "HTML5",
        "Git",
      ],
    },
    {
      id: 4,
      jobTitle: "HTML / CSS Developer",
      companyName: "AnFas",
      startDate: "January 2021",
      endDate: "June 2021",
      location: "Prague, Czechia · On-site",
      description:
        "As an HTML/CSS Developer I collaborated with designers to implement web designs using the Foundation CSS framework. My role involved ensuring proper HTML semantics, adhering to web design best practices, and integrating new design elements. I contributed to projects on GitLab daily, ensuring version control and seamless teamwork.",
      skills: ["Sass", "JavaScript", "CSS", "jQuery", "HTML5", "Git"],
    },
  ];

  return (
    <div>
      {jobRoles.map((jobRole) => (
        <JobCard key={jobRole.id} {...jobRole} />
      ))}
    </div>
  );
}

export default Jobs;
