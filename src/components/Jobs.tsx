import { useQuery } from "@tanstack/react-query";
import JobCard from "./JobCard";
import { getAllJobRoles } from "../api/api";
import { convertUrlParamsIntoURLString } from "../utils/utils";

function Jobs() {
  // Define an object to represent the parameters
  const rolesQueryParams = {
    include: {
      skills: true,
      company: true,
    },
    orderBy: {
      startDate: "desc",
    },
  };

  // Convert the object to a URL-encoded query string
  const rolesQueryString = convertUrlParamsIntoURLString(rolesQueryParams);

  const { data: jobRoles } = useQuery({
    queryKey: ["roles", rolesQueryString],
    queryFn: () => getAllJobRoles(rolesQueryString),
  });

  return (
    <div className="flex flex-col gap-3">
      {jobRoles
        ? jobRoles.map((jobRole) => <JobCard key={jobRole.id} {...jobRole} />)
        : null}
    </div>
  );
}

export default Jobs;
