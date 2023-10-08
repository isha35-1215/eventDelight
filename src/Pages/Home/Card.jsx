import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Use the correct path to your JSON file.
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    return (
        <div className="bg-fuchsia-200 bg-opacity-30 py-10">
            <h3 className="py-4 text-4xl text-center text-fuchsia-900 font-extrabold">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-12 my-6 px-12 md:px-20 lg:px-24">
                {cards.map((cart) => (
                    <div key={cart.id} className="card bg-base-100 shadow-xl">
                        <figure className="px-6 pt-6">
                            <img src={cart.img} alt={cart.title} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-fuchsia-900 font-bold text-xl">{cart.title}</h2>
                            <p className="text-sm font-light text-fuchsia-700">{cart.details}</p>
                            <p className="text-md font-semibold text-fuchsia-700"> Price: ${cart.price}</p>
                            <div className="card-actions">
                            <Link to={`/service/${cart.id}`}><button className="btn btn-primary text-white bg-fuchsia-700 border-fuchsia-500 normal-case">See Details</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;