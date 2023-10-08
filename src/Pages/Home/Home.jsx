import Navbar from "../../Navbar/Navbar";
import Card from "./Card";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Subscribe from "./Subscribe";


const Home = () => {
    return (
        <div>
            <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto font-poppins">
                <Navbar></Navbar>
                <Header></Header>
                <Card></Card>
                <Subscribe></Subscribe>
                <Contact></Contact>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;