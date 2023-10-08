import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
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
        <div className="bg-base-100">
            <div>
                <div className="navbar justify-between bg-base-100 rounded-xl mt-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] pl-0 shadow bg-base-100 rounded-box w-52 gap-2">
                                {links}
                            </ul>
                        </div>

                        <a className="btn btn-ghost normal-case  text-fuchsia-900  text-3xl font-bold">
                            <img className='w-[30px] h-[30px]' src="https://i.ibb.co/Z60BpR3/logo2.png" alt="icon1" border="0" />EventDelight</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-4 px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div>
                            <img className='w-10 rounded-full' src="https://i.ibb.co/hcs6qMW/banner.png" alt="" />
                        </div>
                        {
                            user ?
                                <button onClick={handleSignOut} className='btn btn-primary text-white bg-fuchsia-700 border-fuchsia-500 normal-case'>Sign Out</button>
                                :
                                <button className='btn btn-primary text-white bg-fuchsia-700 border-fuchsia-500 normal-case'>
                                    <Link to='/login'>Login</Link>
                                </button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;