import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceDetails = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        AOS.init();

        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                const findDetail = data.find((item) => item.id === parseInt(id));
                if (findDetail) {
                    setDetail(findDetail);
                }
            });
    }, [id]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-xl md:max-w-4xl lg:max-w-6xl mx-10 lg:mx-auto pb-10">
                <div data-aos="fade-up" className="w-full rounded-md bg-cover bg-center " >
                    <img
                        src={detail.img}
                        alt={detail.title}
                        className="rounded-md w-full h-[72vh] object-cover"
                    />
                </div>
                <div className="text-neutral-content">
                    <h1 className="pt-10 text-3xl font-bold text-fuchsia-900">
                        {detail.title}
                    </h1>
                    <p className=" pt-4 text-base font-normal text-fuchsia-600 ">
                        {detail.details}
                    </p>
                    <h2 className="pt-6 text-xl font-medium text-fuchsia-700">Date: {detail.date}</h2>
                    <h2 className="pt-2 text-xl font-medium text-fuchsia-700">Time: {detail.time}</h2>
                    <div className="flex justify-between">
                        <button className="my-6 btn normal-case btn-primary bg-fuchsia-700 text-white border-none">
                            Purchase Ticket: ${detail.price}
                        </button><Link to='/'><button className="btn btn-ghost border-white bg-fuchsia-400 text-white shadow-2xl my-6">
                            Go Back to Home
                        </button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;