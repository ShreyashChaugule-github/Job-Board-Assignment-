import { Button } from "@mui/material";


// Component to display details about a job role
function RoleDescription({ jobData }) {
  return (
    // Container for the job description with styling classes
    <div className="jobDescription my-card dark:bg-[#19202D] p-9 px-5">
      <div className="min-h-[10rem] flex flex-col ">
        <p className="text-gray-400 text-xl font-medium p-2">{`${jobData.minExp} . ${jobData.minJdSalary}`}</p>
        <p className="p-2 text-2xl font-bold dark:text-white">{jobData.jobRole}</p>
        <p className="p-2 mb-8 text-xl text-violet font-bold">{jobData.location}</p>
        <p className="text-[#6E8098] pt-2">{jobData.jobDetailsFromCompany}</p>
      </div>
      <Button variant="contained" sx={{ backgroundColor: "#5964E0", width: "100%", marginBottom: "2rem" }} onClick={() => (window.location.href = `${jobData.apply}`)}>
        Apply Now
      </Button>
      {/* Job description sections */}
      <div>
        <div className="text-[#6E8098] pt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam pariatur consequuntur corporis recusandae deserunt dolor illo, aliquam eius eaque officiis quibusdam quod
          distinctio, doloremque suscipit cumque? Culpa, et amet!
        </div>
        {/* Requirements section */}
        <div className="py-6">
          <h2 className="font-bold text-2xl  dark:text-white">Requirements</h2>
          <div>
            <div className="pt-3 text-2xl text-gray-500 dark:text-[#9DAEC2]">{jobData.jobDetailsFromCompany?.content}</div>
            <ul className="list-disc list-inside pl-5 pt-3">
              {/* Mapping over each requirement item */}
              {jobData.jobDetailsFromCompany?.items?.map((item, index) => {
                return (
                  <li
                    key={index + 1}
                    className="pt-3 text-2xl text-gray-500 before:content-['/2022'] before:text-violet before:font-bold before:text-4xl before:mr-3 flex flex-row items-baseline dark:text-[#9DAEC2]"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Tasks section */}
        <div>
          <h2 className="font-bold text-2xl dark:text-white">What you will do</h2>
          <div className="pt-3">
            <div className="text-2xl text-gray-500 dark:text-[#9DAEC2]">{jobData.jobRole?.content}</div>
             {/* List of tasks */}
            <ol className="">
              {jobData.jobRole?.items?.map((item, index) => {
                return (
                  <li
                    key={index}
                    // className="pl-5 pt-3 text-2xl text-gray-500 dark:text-[#9DAEC2] before:content-['\2022'] before:text-violet before:font-bold before:text-4xl before:mr-3 flex flex-row items-baseline"
                  >
                    {item}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        {/* Apply Now button */}
        <div>
          <Button variant="contained" sx={{ backgroundColor: "#5964E0", width: "100%", marginTop: "2rem" }} onClick={() => (window.location.href = `${jobData.apply}`)}>
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RoleDescription;


