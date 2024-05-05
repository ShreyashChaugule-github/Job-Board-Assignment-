import initialJobData from "./data.json";
import { useState } from "react";

// Custom hook for filtering job data based on user input
export const useGetUserFilterInput = () => {
  
  const [filterJobList, setFilterJobList] = useState(initialJobData);


  function doFilter(jobRole, location = "", checked = false, experience = "", companyName = "") {
    let filteredList = initialJobData;
    // Filtering by job role if provided
    if (jobRole) {
      filteredList = filteredList.filter((job) =>
        job.jobRole.toLowerCase().includes(jobRole.toLowerCase())
      );
    }
     // Filtering by location if provided
    if (location) {
      filteredList = filteredList.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    // Filtering by experience if provided
    if (experience) {
      filteredList = filteredList.filter((job) =>
        String(job.minExp).toLowerCase().includes(experience.toLowerCase()) ||
        String(job.maxExp).toLowerCase().includes(experience.toLowerCase())
      );
    }
    // Filtering by company name if provided
    if (companyName) {
      filteredList = filteredList.filter((job) =>
        job.companyName.toLowerCase().includes(companyName.toLowerCase())
      );
    }
    // Filtering for remote jobs if checked
    if (checked) {
      filteredList = filteredList.filter((job) =>
        job.location.toLowerCase().includes("remote")
      );
    }
    setFilterJobList(filteredList);
  }

  return [filterJobList, doFilter];
};

