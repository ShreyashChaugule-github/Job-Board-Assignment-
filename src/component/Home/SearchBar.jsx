
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

// Component for the search bar
function SearchBar({ getUserInput }) {
  return (
    <div className="flex flex-col items-center h-20 bg-[#F4F6F8] dark:bg-[#121721]">
      {/* Small Screen searchBar */}
      <SmallScreenSearchBar getUserInput={getUserInput} />

      {/* Medium to large screen searchbar */}
      <div className="hidden md:flex">
        <LargeScreenSearchBar getUserInput={getUserInput} />
      </div>
    </div>
  );
}

export default SearchBar;

// Component for the search bar on small screens
function SmallScreenSearchBar({ getUserInput }) {
  const [jobPosition, setJobPosition] = useState();
 
  // Function to handle form submission
  function onSubmitHandler(e) {
    e.preventDefault();
    getUserInput(jobPosition);
  }
  return (
    // Form for the search bar
    <form onSubmit={onSubmitHandler}>
      <div className="md:hidden w-[80Vw] max-w-sm min-w-[19rem] mt-[-2rem] rounded-lg bg-white py-3 px-3 drop-shadow-lg dark:bg-[#19202D] ">
        <div className="flex flex-row justify-between">
          <div className="relative w-full">
            {/* Select dropdown for position */}
            <select
              className=" dark:bg-[#19202D] dark:text-white dark:placeholder-white border-none w-full py-2 pr-10 pl-2"
              onChange={(e) => setJobPosition(e.target.value)}
              value={jobPosition}
            >
              <option value=""> Position</option>
              <option value="ios">ios</option>
              <option value="frontend">frontend</option>
              <option value="backend">backend</option>
              <option value="tech lead">tech lead</option>
              <option value="android">android</option>
            </select>
            <input
              type="text"
              name="position"
              className="hidden dark:bg-[#19202D] py-2 pr-10 dark:text-white dark:placeholder-white border-none w-full pl-2"
              placeholder="Position"
              onChange={(e) => setJobPosition(e.target.value)}
              value={jobPosition}
            />
          </div>
          <button
            type="submit"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="flex items-center rounded bg-primary px-3 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover: focus:outline-none focus:ring-0 active:bg-primary-700 ml-3 dark:border-white bg-[#5964E0]"
          >
            <SearchIcon size="large" />
          </button>
        </div>
      </div>
    </form>
  );
}

// Component for the search bar on large screens
function LargeScreenSearchBar({ getUserInput }) {
   // State variables for search filters
  const [searchPosition, setSearchPosition] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchExperience, setSearchExperience] = useState("");
  const [searchCompanyName, setSearchCompanyName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  function onCheckboxChangeHandler() {
    setIsChecked(!isChecked);
  }
  // Function to handle form submission
  function userInputSubmitHandler(e) {
    e.preventDefault();
    getUserInput(searchPosition, searchLocation, isChecked, searchExperience, searchCompanyName);
  }

  return (
     // Form for the search bar
    <form onSubmit={userInputSubmitHandler}>
      <div className="hidden w-[100%] min-w-fit mt-[-1rem] rounded-lg bg-white px-3 drop-shadow-lg dark:bg-[#19202D] md:flex flex-row justify-around">
        {/* Search by position */}
        <div className="flex flex-row justify-evenly items-center grow py-2 border-r-2 dark:border-[#6E8098] px-1">
        <div className="relative w-full gap-4">
            <select
              className=" dark:bg-[#19202D] dark:text-white dark:placeholder-white border-none w-full py-2 pr-10 pl-2"
              onChange={(e) => setSearchPosition(e.target.value)}
              value={searchPosition}
            >
              <option value=""> Position</option>
              <option value="ios">ios</option>
              <option value="frontend">frontend</option>
              <option value="backend">backend</option>
              <option value="tech lead">tech lead</option>
              <option value="android">android</option>
            </select>
            <input
              type="text"
              name="position"
              className="hidden dark:bg-[#19202D] py-2 pr-10 dark:text-white dark:placeholder-white border-none w-full pl-2"
              placeholder="Position"
              onChange={(e) => setSearchPosition(e.target.value)}
              value={searchPosition}
            />
          </div>
        </div>

        {/* Search by experience */}
        <div className="flex flex-row justify-evenly items-center grow py-1 border-r-2 dark:border-[#6E8098] px-1">
        <div className="relative w-full">
            <select
              className=" dark:bg-[#19202D] dark:text-white dark:placeholder-white border-none w-full py-2 pr-10 pl-2"
              onChange={(e) => setSearchExperience(e.target.value)}
              value={searchExperience}
            >
              <option value="Experience">Experience</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <input
              type="text"
              name="Experience"
              className="hidden dark:bg-[#19202D] py-2 pr-10 dark:text-white dark:placeholder-white border-none w-full pl-2"
              placeholder="Experience"
              onChange={(e) => setSearchExperience(e.target.value)}
              value={searchExperience}
            />
          </div>
        </div>

        {/* Search by company name */}
        <div className="flex flex-row justify-evenly items-center grow py-1 border-r-2 dark:border-[#6E8098] px-1">
        <select
              className=" dark:bg-[#19202D] dark:text-white dark:placeholder-white border-none w-full py-2 pr-10 pl-2"
              onChange={(e) => setSearchCompanyName(e.target.value)}
              value={searchCompanyName}
            >
              <option value="Company Search" >Company Search</option>
              <option value="Dropbox"> Dropbox</option>
              <option value="LG">LG</option>
              <option value="Sony">Sony</option>
              <option value="Adobe Systems">Adobe Systems</option>
              <option value="HP">HP</option>
              <option value="eBay">eBay</option>
              <option value="Tencent">Tencent</option>
              <option value="Apple">Apple</option>
              <option value="Asus">Asus</option>
              <option value="Intel Corporation">Intel Corporation</option>
            </select>
            <input
              name="companyName"
              type="text"
              className="hidden dark:bg-[#19202D] py-3 dark:text-white grow  dark:placeholder:text-white border-none  focus:ring-0 placeholder:text-lg text-lg font-semibold"
              placeholder="Company Name"
              value={searchCompanyName}
              onChange={(e) => setSearchCompanyName(e.target.value)}
            />
          </div>

        {/* Search by location */}
        <div className="flex flex-row justify-evenly items-center grow py-2 border-r-2 dark:border-[#6E8098] px-2">
          <select
            className=" dark:bg-[#19202D] dark:text-white dark:placeholder-white border-none w-full py-2 pr-10 pl-2"
            onChange={(e) => setSearchLocation(e.target.value)}
            value={searchLocation}
          >
            <option value="Location">Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi ncr">Delhi ncr</option>
            <option value="Banglore">Banglore</option>
            <option value="Chennai">Chennai</option>
            <option value="Remote">Remote</option>
          </select>
          <input
            name="location"
            type="text"
            className="hidden dark:bg-[#19202D] py-3 dark:text-white grow dark:placeholder:text-white border-none outline-none focus:ring-0 placeholder:text-lg text-lg font-semibold"
            placeholder="Location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </div>

        {/* Full time and submit button */}
        <div className="flex flex-row justify-evenly items-center grow px-2">
          <div className="mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] flex flex-row items-center dark:text-white">
            <div class="flex flex-row items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                checked={isChecked}
                onChange={onCheckboxChangeHandler}
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="default-checkbox" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Remote
              </label>
            </div>
          </div>
          <button
            type="submit"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="flex items-center rounded bg-primary p-3 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover: focus:outline-none focus:ring-0 active:bg-primary-700 ml-3 dark:border-white bg-[#5964E0]"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
