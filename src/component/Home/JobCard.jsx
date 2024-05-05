import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function JobCard({ jobDetail }) {
  if (!jobDetail) {
    return <div>Loading...</div>; // or some other fallback UI
  }
   // Destructure jobDetail object for easier access to its properties
  const {
    logoUrl,
    companyName,
    jobDetailsFromCompany,
    minExp,
    minJdSalary,
    jobRole,
    location,
  } = jobDetail;

  return (
     // Link to the JobDescription component with jobDetail as state
    <Link to="/job" state={{ jobData: jobDetail }}>
      <div className="jobCard relative bg-white dark:bg-[#19202D] p-6 m-2 w-[90%] max-w-sm min-w-[19rem] flex flex-col justify-evenly min-h-fit rounded-xl drop-shadow-lg border border-black">
        <div className="logo-container absolute top-[0.5rem]">
           {/* Logo */}
          <img
            src={logoUrl}
            alt={companyName}
            className="p-1 rounded-2xl h-[4rem] w-[3.5rem]"
            style={{ backgroundColor: jobDetail.logoBackground }}
          />
        </div>
        {/* Minimum experience required */}
        <p className="text-[#6E8098] pt-[4rem]">
          {minExp}
        </p>
        <div className="text-[#19202D] font-bold text-lg pt-2 dark:text-white">
          {jobRole.substring(0, 25).length >= 25
            ? jobRole.substring(0, 25) + "..."
            : jobRole.substring(0, 25)}
        </div>
        <div className="text-black  pt-2 pb-2">{location}</div>
        <div className="text-[#19202D]  font-bold pt-2">{companyName}</div>
        {/* Job details */}
        <div className=" text-[#6E8098] pt-2">
          {jobDetailsFromCompany.substring(0, 25).length >= 25
            ? jobDetailsFromCompany.substring(0, 150) + "..."
            : jobDetailsFromCompany.substring(0, 25)}
        </div>
        {/* Minimum JD salary */}
        <div className=" text-[#6E8098] font-bold pt-4 pb-4"> {minJdSalary}</div>
        {/* Apply Now button */}
        <Button variant="contained" sx={{ backgroundColor: "#09EEF2", width: "100%", marginBottom: "1rem" }} onClick={() => (window.location.href = `${jobDetail.apply}`)}>
        Apply Now
      </Button>
      </div>
    </Link>
  );
}

export default JobCard;
