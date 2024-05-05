import initialJobData from "./data.json";
import { useState } from "react";

export const useGetUserFilterInput = () => {
  const [filterJobList, setFilterJobList] = useState(initialJobData);

  function doFilter(filters) {
    let filteredList = initialJobData;

    // Apply job role filter
    if (filters.jobRole) {
      filteredList = filteredList.filter((job) =>
        job.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase())
      );
    }

    // Apply minExp filter
    if (experience) {
      filteredList = filteredList.filter((job) =>
        String(job.minExp).toLowerCase().includes(experience.toLowerCase()) ||
        String(job.maxExp).toLowerCase().includes(experience.toLowerCase())
      );
    }

    // Apply companyName filter
    if (filters.companyName) {
      filteredList = filteredList.filter((job) =>
        String(job.companyName).toLowerCase().includes(filters.companyName.toLowerCase())
      );
    }

    setFilterJobList(filteredList);
  }

  return [filterJobList, doFilter];
};
