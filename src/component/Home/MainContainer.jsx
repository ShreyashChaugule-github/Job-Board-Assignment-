import JobCard from "./JobCard";

// MainContainer component displays the list of job cards
function MainContainer({ jobList }) {
  return (
    // Main container with styling for background color and layout
    <main className="main dark:bg-[#121721] bg-[#F4F6F8] min-h-screen flex flex-col items-center py-10">
      {/* <div className="listContainer flex flex-col justify-center items-center">
        {jobList.map((job) => {
          return <JobCard key={job.id} jobDetail={job} />;
        })}
      </div> */}
       {/* Mapping over the jobList array to render individual JobCard components */}
      <div className="listContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {jobList.map((job) => {
          return <JobCard key={job.jdUid} jobDetail={job} />;
        })}
      </div>
    </main>
  );
}

export default MainContainer;
