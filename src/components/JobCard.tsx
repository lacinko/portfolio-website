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
      <header className="flex justify-between ">
        <div>
          <h3 className="text-lg font-semibold ">{jobTitle}</h3>
          <p>{companyName}</p>
        </div>
        <div>
          <p className="text-right">
            {startDate} - {endDate}
          </p>
          <p className="text-right">{location}</p>
        </div>
      </header>
      <main className="py-4">
        <p className="text-slate-400">{description}</p>
      </main>
      <footer>
        <h4 className="font-semibold">Skills:</h4>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </footer>
    </article>
  );
}

export default JobCard;
