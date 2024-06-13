import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSidenav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    return (
        <div className="">
            <Header/>
            <BreakingNews/>
            <Navbar/>
            
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <div>
            <LeftSideNav/>
           </div>
            <div className="md:col-span-2">
              {
                news.map(aNews => <NewsCard key={aNews._id} news = {aNews}></NewsCard>)
              }
            </div>
            <div>
                <RightSideNav/>
            </div>
           </div>
        </div>
    );
};

export default Home;