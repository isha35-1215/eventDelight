import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="hero bg-fuchsia-100 my-20 py-10">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-3">
                <div data-aos="zoom-out" className="justify-center col-span-2 max-w-6xl">
                    <div  className="text-center">
                        <h1 className="text-5xl font-bold text-fuchsia-900">Stay Connected</h1>
                    </div>
                    <div className=" w-96 text-center mx-auto shadow-sm justify-center">
                        <form className="px-4 py-4 ">
                            <input type="email" placeholder="Email" className="input input-bordered w-full" required />
                            <input type="password" placeholder="Password" className="input input-bordered my-2 w-full" required />
                            <input type="textbox" placeholder="Write Message..." className="input input-bordered w-full" />


                            <div className="form-control mt-4">
                                <button className="btn btn-primary bg-fuchsia-700 border-fuchsia-500 text-white">Contact Us</button>
                            </div>

                        </form>
                    </div>
                </div>
                <img data-aos="fade-down-left" src="https://i.ibb.co/1K41kBQ/contact-Us.png" className="max-w-sm rounded-lg shadow-2xl" />

            </div>
        </div>





    );
};

export default Contact;




