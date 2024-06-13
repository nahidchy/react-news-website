import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        signIn(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          navigate(location?.state ? location.state : '/')
        })
        .then(error=>console.error(error))
      }
    return (
        <div>
            <Navbar/>
            <h2 className="text-3xl text-center font-semibold mt-10">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white">Login</button>
        </div>
      </form>
      <p className="text-center">Do not have any account : <Link to='/register'><button className="btn">Register</button></Link></p>
        </div>
    );
};

export default Login;