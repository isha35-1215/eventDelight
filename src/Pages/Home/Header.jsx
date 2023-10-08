
const Header = () => {
    return (
        <div className="hero min-h-screen mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/fSjNsB5/event-mngm.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-bold">Unlock Memorable Moments:</h1>
                    <h2 className="mb-5 text-4xl font-bold"> Your Event, Our Expertise</h2>
                    <p className="mb-5">Let us transform your event into something extraordinary.</p>
                    <button className="btn btn-primary bg-fuchsia-900 text-white border-fuchsia-600">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;