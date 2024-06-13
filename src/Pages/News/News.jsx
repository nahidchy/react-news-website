import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSidenav/RightSideNav";
import Navbar from "../Shared/Navbar";

const News = () => {
    const {id} = useParams();   
    const data = useLoaderData();

    const news = data.find((n)=> n._id == id)
    console.log(news)
    // console.log(data)
  
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="grid md:grid-cols-4 gap-10">
                 <div className="col-span-3">
                    <h2 className="text-2xl text-gray-600 font-semibold">Dragon News</h2>
                    <div className="mt-10">
                    {
                        <img src={news.image_url} alt="" />
                    }
                    <h2 className="text-2xl font-semibold">{news.title}</h2>
                    <p>{news.details}</p>
                    </div>
                 </div>
                 <div>
                    <RightSideNav/>
                 </div>
            </div>
        </div>
    );
};

export default News;