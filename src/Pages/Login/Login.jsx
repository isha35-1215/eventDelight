import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email =form.get('Email');
        const password =form.get('Password');
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error);
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-fuchsia-100">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card w-96 shadow-sm bg-fuchsia-50">
                        <form onSubmit={handleLogin} className="p-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="Password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-fuchsia-700 border-fuchsia-500 text-white">Login</button>
                            </div>
                            <p className="">Do not have an account? <Link className="text-fuchsia-700 font-medium" to="/register">Register</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;