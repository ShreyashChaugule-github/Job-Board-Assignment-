import MainContainer from "./MainContainer";
import SearchBar from "./SearchBar";
import { useGetUserFilterInput } from "../../utils";
import Header from "../UI/Header";


function Home() {
  
 // Using custom hook to get user filter input and filtered job list
  const [filterJobList, doFilter] = useGetUserFilterInput();

    return (
      <div className="home min-w-[360px]">
        <Header></Header>
        {/* SearchBar component with callback function to handle user input */}
        <SearchBar getUserInput={doFilter}></SearchBar>
        {/* MainContainer component to display the list of jobs */}
        <MainContainer jobList={filterJobList} />
      </div>
    );
 
}
export default Home;
