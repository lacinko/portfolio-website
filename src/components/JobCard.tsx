type JobCardProps = {
  id: number;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  skills: string[];
};

function JobCard({
  jobTitle,
  companyName,
  startDate,
  endDate,
  location,
  description,
  skills,
}: JobCardProps) {
  return (
    <article className="my-6 bg-slate-800 p-5 first:mt-0 last:mb-0">
      <header className="flex justify-between gap-4 max-sm:flex-col">
        <div>
          <h3 className="font-semibold md:text-lg ">{jobTitle}</h3>
          <p className="max-md:text-sm">{companyName}</p>
        </div>
        <div className="max-sm:h-[2px] max-sm:w-full max-sm:bg-white"></div>
        <div className="text-sm sm:text-right md:text-base">
          <p>
            {startDate} - {endDate}
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
              idx === skills.length - 1 ? skill : `${skill}, `;
            return <li key={skill}>{skillWithComa}</li>;
          })}
        </ul>
      </footer>
    </article>
  );
}

export default JobCard;
