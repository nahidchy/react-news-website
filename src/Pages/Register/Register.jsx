import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
  const {createUser} = useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        createUser(email,password)
        .then(result=>{
               const user = result.user;
               console.log(user)
        })
        .catch(error=>{
          console.error(error)
        })
    }
    return (
        <div>
        <Navbar/>
        <h2 className="text-3xl text-center font-semibold mt-10">Please Register</h2>
        <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-black text-white">Register</button>
    </div>
  </form>
  <p className="text-center">Already have an account : <Link to='/login'><button className="btn">Login</button></Link></p>
    </div>
    );
};

export default Register;