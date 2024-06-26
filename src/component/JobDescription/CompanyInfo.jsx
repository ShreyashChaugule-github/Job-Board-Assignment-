import { Button } from "@mui/material";

// Component to display company information
function CompanyCard({ jobData }) {
  return (
    // Container for the company card with styling classes
    <div className="relative job-container flex flex-col items-center justify-between py-12 my-card max-w-[90%] min-h-[15rem] m-auto top-[-1rem] dark:bg-[#19202D] ">
      <div className="absolute top-[-1.5rem] w-[6rem] h-[4rem] p-1 rounded-xl flex justify-center " style={{ backgroundColor: jobData.logoBackground }}>
        <img src={jobData.logoUrl} className="p-2 rounded-2xl" alt="" />
      </div>
      <h1 className="pt-3 text-grey text-2xl font-bold dark:text-white">{jobData.companyName}</h1>
      <h4 className="text-zinc-500 text-xl">{jobData.jdLink}</h4>
      <Button variant="contained" sx={{ backgroundColor: "#5964E0" }} onClick={() => (window.location.href = `${jobData.jdLink}`)}>
        Company Site
      </Button>
    </div>
  );
}

export default CompanyCard;
