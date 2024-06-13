import { FaGoogle,FaGithub, FaFacebook,  FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
  return (
    <div >
      <div className="p-4 space-y-3 mb-6">
        <h2 className=" text-3xl font-semibold mb-3">Login with</h2>
        <button className="btn text-xl btn-outline w-full">
        <FaGoogle /> Google
        </button>
        <button className="btn text-xl btn-outline w-full">
        <FaGithub /> GitHub
        </button>
      </div>
      <div className="p-4  mb-6">
        <h2 className=" text-3xl font-semibold mb-4">Find Us On</h2>
        <a className="p-4 flex items-center gap-3 text-xl " href=""><FaFacebook/> Facebook</a>
        <a className="p-4 flex items-center gap-3 text-xl " href=""><IoLogoTwitter/> Twitter</a>
        <a className="p-4 flex items-center gap-3 text-xl " href=""><FaInstagram/> Instagram</a>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className=" text-3xl font-semibold mb-3">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
        
      </div>
    </div>
  );
};

export default RightSideNav;
