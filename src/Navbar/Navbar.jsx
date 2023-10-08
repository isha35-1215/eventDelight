import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = ()=>{
        logOut()
        .then()
        .catch()
    }

    const navlinks = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-fuchsia-700 font-bold underline" : ""
                            }>Home</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-fuchsia-700 font-bold underline" : ""
                            }>Blog</NavLink></li>
        <li><NavLink to="/career" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-fuchsia-700 font-bold underline" : ""
                            }>Career</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                {
                    user? 
                    <button onClick={handleSignOut} className="btn bg-fuchsia-700 text-white">Log Out</button>
                    :
                    <Link to="/login"><button className="btn btn-primary bg-fuchsia-700 text-white border-fuchsia-500">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;