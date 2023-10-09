import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Career = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div>
            <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto font-poppins mb-20">
                <Navbar></Navbar>
                <img data-aos="zoom-in" className="w-full h-[62vh]" src="https://i.ibb.co/YBRdw4K/career2.jpg" alt="" />

                <div className="bg-fuchsia-100 py-6 md:py-10 lg:py-12 px-10">
                    <h1 className="text-4xl font-bold text-fuchsia-700 text-center py-2">Start Your Career with <span className="font-extrabold text-fuchsia-800">EventDelight</span></h1>
                    <p className="text-base font-normal text-fuchsia-700 pt-4">EvenDelight values innovation and creativity. As part of our team, you will have the chance to brainstorm and execute innovative event concepts, performances, and marketing campaigns. Your creativity will play a vital role in delivering unique and memorable entertainment experiences.We believe in the power of teamwork. Working with EvenDelight means collaborating with talented professionals who are passionate about their craft. You will have the opportunity to learn from and work alongside some of the best in the industry.</p>
                    <p className="text-base font-normal text-fuchsia-700 pt-4"> If you have a passion for entertainment, EvenDelight is the perfect place to channel your enthusiasm. Whether you are a performer, a technician, or an event planner, your dedication to making people smile and creating unforgettable moments will be highly valued.</p>
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-fuchsia-700 py-2">Job Requirements</h3>
                        <ul className="pl-4 text-base font-normal text-fuchsia-700">
                            <li>1. Age 22 to 30 years</li>
                            <li>2. Male/ females both are allowed to apply.</li>
                            <li>3. Ability to work independently and under time pressure.</li>
                            <li>4. Last Date of Submission : 25 October ,2023</li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-fuchsia-700 py-2">Educational Requirements</h3>
                        <ul className="pl-4 text-base font-normal text-fuchsia-700">
                            <li>1. Under graduated will be part-time.</li>
                            <li>2. Post graduated will work Full–time with terms-Condition.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 mt-10 ">
                        <h2 className=" text-3xl font-semibold text-fuchsia-700">Interested In Growing Your Career?</h2>
                        <button data-aos="zoom-in" className=" btn normal-case btn-primary bg-fuchsia-700 text-white border-none">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Career;