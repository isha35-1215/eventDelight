import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Subscribe = () => {

    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <div className="bg-fuchsia-100 mt-20 p-20 grid grid-cols-1 lg:grid-cols-2">
            <div data-aos="fade-right">
                <img src="https://i.ibb.co/bBT7Cpx/subscribe.png" alt="" />
            </div>
            <div data-aos="zoom-in-up">
                <h1 className="justify-center text-center pt-10 text-5xl font-bold text-fuchsia-900">Subscribe Now</h1>

                <h2 className="my-4 text-fuchsia-700 text-center">Your passport to unforgettable experiences is just a click away.</h2>
                <div className="form-control">
                    <div className="input-group justify-center">
                        <input
                            type="text"
                            placeholder="Your Email..."
                            className="input  border-fuchsia-300"
                        />
                        <button
                            className="bg-fuchsia-700 text-white px-4 py-2 rounded-r-lg"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Subscribe;