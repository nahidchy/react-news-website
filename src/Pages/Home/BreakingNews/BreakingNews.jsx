import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex gap-10 py-3">
         <button className="btn btn-error text-white">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
       <Link to='/'> I can be a React component, multiple React components, or just some text....</Link>
       <Link to='/'> I can be a React component, multiple React components, or just some text....</Link>
       <Link to='/'> I can be a React component, multiple React components, or just some text....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
