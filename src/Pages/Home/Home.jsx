import Navbar from "../../Navbar/Navbar";
import Card from "./Card";
import Header from "./Header";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Card></Card>
            <h2 className="text-3xl font-poppins font-bold">this is Home</h2>
        </div>
    );
};

export default Home;