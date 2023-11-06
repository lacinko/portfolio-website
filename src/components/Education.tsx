import { useQuery } from "@tanstack/react-query";
import { convertUrlParamsIntoURLString } from "../utils/utils";
import { Icon } from "./Icons";
import { getAllEducation } from "../api/api";
import { EducationType } from "../types/types";

function Education() {
  // Define an object to represent the parameters
  const educationQueryParams = {
    include: {
      establishment: true,
    },
  };

  // Convert the object to a URL-encoded query string
  const educationQueryString =
    convertUrlParamsIntoURLString(educationQueryParams);
  const { data: education } = useQuery({
    queryKey: ["education", educationQueryString],
    queryFn: () => getAllEducation(educationQueryString),
  });

  return (
    <div className="flex flex-col gap-3">
      {education
        ? education.map((item, idx) => {
            return (
              <div key={item.id}>
                {idx === 0 || idx === 2 ? (
                  <h3 className="pb-2 text-lg font-bold text-blue-500">
                    {item.type === EducationType.SCHOOL
                      ? "School"
                      : "Certifications"}
                    <br />
                  </h3>
                ) : null}
                <div className="bg-slate-800 p-5 ">
                  <header className="flex items-start justify-between">
                    <span>
                      <h3 className="font-semibold md:text-lg ">
                        {item.title}
                      </h3>
                      {!item.endDate ? <p>Not quite...</p> : null}
                    </span>
                    {item.certificate && (
                      <a href={item.certificate}>
                        <Icon icon="link" className="h-6 w-6" />
                      </a>
                    )}
                  </header>
                  <main className="py-2 text-sm  text-slate-300 md:text-base">
                    <p>{item.establishment.name}</p>
                  </main>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Education;
