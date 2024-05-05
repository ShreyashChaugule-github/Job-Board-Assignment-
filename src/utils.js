import initialJobData from "./data.json";
import { useState } from "react";

export const useGetUserFilterInput = () => {
  const [filterJobList, setFilterJobList] = useState(initialJobData);

  function doFilter(jobRole, location = "", checked = false, experience = "", companyName = "") {
    let filteredList = initialJobData;

    if (jobRole) {
      filteredList = filteredList.filter((job) =>
        job.jobRole.toLowerCase().includes(jobRole.toLowerCase())
      );
    }

    if (location) {
      filteredList = filteredList.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (experience) {
      filteredList = filteredList.filter((job) =>
        String(job.minExp).toLowerCase().includes(experience.toLowerCase()) ||
        String(job.maxExp).toLowerCase().includes(experience.toLowerCase())
      );
    }

    if (companyName) {
      filteredList = filteredList.filter((job) =>
        job.companyName.toLowerCase().includes(companyName.toLowerCase())
      );
    }

    if (checked) {
      filteredList = filteredList.filter((job) =>
        job.location.toLowerCase().includes("remote")
      );
    }
    setFilterJobList(filteredList);
  }

  return [filterJobList, doFilter];
};

