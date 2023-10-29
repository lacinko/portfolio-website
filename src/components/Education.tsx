import { Icon } from "./Icons";

function Education() {
  const education = [
    {
      title: "Czech University of Life Sciences Prague",
      description: "Master's degree, Informatics",
      link: null,
      type: "school",
    },
    {
      title: "Czech University of Life Sciences Prague",
      description: "Bachelor's degree, Informatics",
      link: null,
      type: "school",
    },
    {
      title: "FreeCodeCamp",
      description: "Responsive Web Design",
      link: "https://www.freecodecamp.org/certification/lacinko/responsive-web-design",
      type: "certification",
    },
    {
      title: "FreeCodeCamp",
      description: "JavaScript Algorithms and Data Structures",
      link: "https://www.freecodecamp.org/certification/lacinko/javascript-algorithms-and-data-structures",
      type: "certification",
    },
    {
      title: "FreeCodeCamp",
      description: "Front End Development Libraries",
      link: "https://www.freecodecamp.org/certification/lacinko/front-end-development-libraries",
      type: "certification",
    },
  ];
  return (
    <>
      {education.map((item, idx) => {
        return (
          <div key={item.link}>
            {idx === 0 || idx === 2 ? (
              <h3 className="pb-2 text-lg font-bold text-blue-500">
                {item.type === "school" ? "School" : "Certifications"}
                <br />
              </h3>
            ) : null}
            <div className="my-6 mt-0 bg-slate-800 p-5">
              <header className="flex items-start justify-between">
                <h3 className="font-semibold md:text-lg ">{item.title}</h3>
                {item.link && (
                  <a href={item.link}>
                    <Icon icon="link" className="h-6 w-6" />
                  </a>
                )}
              </header>
              <main className="py-2 text-sm  text-slate-300 md:text-base">
                <p>{item.description}</p>
              </main>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Education;
