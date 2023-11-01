import { Role } from "../types/types";
import { formatDateToMonthYear } from "../utils/utils";

type RoleWithDateEndDate = Role & {
  endDate: Date;
};

function JobCard({
  title,
  company,
  startDate,
  endDate,
  location,
  description,
  skills,
}: RoleWithDateEndDate) {
  return (
    <article className="bg-slate-800 p-5">
      <header className="flex justify-between gap-4 max-sm:flex-col">
        <div>
          <h3 className="font-semibold md:text-lg ">{title}</h3>
          <p className="max-md:text-sm">{company.name}</p>
        </div>
        <div className="max-sm:h-[2px] max-sm:w-full max-sm:bg-white"></div>
        <div className="text-sm sm:text-right md:text-base">
          <p>
            {formatDateToMonthYear(startDate)} -{" "}
            {formatDateToMonthYear(endDate)}
          </p>
          <p>{location}</p>
        </div>
      </header>
      <main className="py-4">
        <p className="text-sm text-slate-300 md:text-base">{description}</p>
      </main>
      <footer>
        <h4 className="font-semibold">Skills:</h4>
        <ul className="flex flex-wrap gap-2 text-sm md:text-base">
          {skills.map((skill, idx) => {
            const skillWithComa =
              idx === skills.length - 1 ? skill.name : `${skill.name}, `;
            return <li key={skill.id}>{skillWithComa}</li>;
          })}
        </ul>
      </footer>
    </article>
  );
}

export default JobCard;
