import Header from "../UI/Header";
import CompanyCard from "./CompanyInfo";
import RoleDescription from "./RoleDescription";

import { useLocation } from "react-router";


// Function component to display job description
function JobDescription() {
  const { state } = useLocation();
  const { jobData } = state;
  // Returning JSX to render the job description page
  return (
    <div className="dark:bg-[#121721]">
      <Header></Header>
      <CompanyCard jobData={jobData}></CompanyCard>
      <RoleDescription jobData={jobData} />
    </div>
  );
}
export default JobDescription;
