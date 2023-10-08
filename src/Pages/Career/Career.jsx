import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const Career = () => {
    return (
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto font-poppins">
            <Navbar></Navbar>
            <img className="w-full h-96" src="https://i.ibb.co/YBRdw4K/career2.jpg" alt="" />

            <div className="bg-fuchsia-100 py-6 md:py-10 lg:py-16 px-10">
                <h1 className="text-4xl font-bold text-fuchsia-700 text-center py-2">Start Your Career with <span className="font-extrabold text-fuchsia-800">EventDelight</span></h1>
                <p className="text-base font-normal text-fuchsia-700 pt-4">EvenDelight values innovation and creativity. As part of our team, you will have the chance to brainstorm and execute innovative event concepts, performances, and marketing campaigns. Your creativity will play a vital role in delivering unique and memorable entertainment experiences.We believe in the power of teamwork. Working with EvenDelight means collaborating with talented professionals who are passionate about their craft. You'll have the opportunity to learn from and work alongside some of the best in the industry.</p>
                <p className="text-base font-normal text-fuchsia-700 pt-4"> If you have a passion for entertainment, EvenDelight is the perfect place to channel your enthusiasm. Whether you're a performer, a technician, or an event planner, your dedication to making people smile and creating unforgettable moments will be highly valued.</p>
                <h2 className=" text-3xl font-semibold text-fuchsia-700 py-6">Interested In Growing Your Career?</h2>
                <div className="flex justify-between">
                        <button className=" btn normal-case btn-primary bg-fuchsia-700 text-white border-none">
                            Apply Now
                        </button><Link to='/'><button className="btn btn-ghost border-white bg-fuchsia-400 text-white shadow-2xl">
                            Go Back to Home
                        </button></Link>
                    </div>
            </div>
        </div>
    );
};

export default Career;