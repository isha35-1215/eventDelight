import Navbar from "../../Navbar/Navbar";

const Blog = () => {
    return (
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto font-poppins">
            <Navbar></Navbar>
            <div className="bg-fuchsia-50 my-10 md:my-16 lg:my-20 p-10">
                <div className="">
                    <h1 className="text-4xl font-bold text-fuchsia-950 py-2">Welcome to Our <span className="font-extrabold text-fuchsia-800">EventDelight</span> Event Management Website</h1>
                    <p className="text-lg font-normal text-fuchsia-700 pt-4">In a world filled with constant demands on our time and attention, finding the perfect entertainment event can be a daunting task. Whether you're planning a night out with friends, a romantic evening, or a family gathering, the choices seem endless, and the search overwhelming.</p>
                    <p className="text-lg font-normal text-fuchsia-700 py-4">But fear not! We're here to introduce you to the ultimate solution - our Entertainment Event Management website. We understand the importance of creating unforgettable memories, and that's why we've designed this platform to help you discover, plan, and experience the entertainment events of your dreams with ease.</p>
                </div>
                {/* section-1 */}
                <div className="pt-6 md:pt-8 lg:pt-12">
                    <h2 className="text-3xl font-semibold text-fuchsia-900">The Journey Begins - Navigating Our Website</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">User-Friendly Interface</h2>
                                <p className="text-base font-normal text-fuchsia-700">Our website is your gateway to the world of entertainment. From the moment you arrive, you'll notice the clean, intuitive interface that makes navigation a breeze. Whether you're a tech-savvy enthusiast or a casual user, our website ensures a seamless experience for everyone.</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Personalized Recommendations
                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">We know that your preferences matter, which is why we employ advanced algorithms to offer personalized event recommendations. Tell us your interests, location, and budget, and we'll curate a list of events that are tailored just for you. No more sifting through endless options that don't quite fit your taste.
                                </p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Event Categories</h2>
                                <p className="text-base font-normal text-fuchsia-700">
                                    We've categorized events to simplify your search. From concerts and theater performances to sports events and festivals, you'll find a diverse range of options neatly organized. Just click on the category that suits your mood, and you're on your way to discovering exciting possibilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section-2 */}
                <div className="pt-6 md:pt-8 lg:pt-12">
                    <h2 className="text-3xl font-semibold text-fuchsia-900">Discovering the Best Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Comprehensive Event Listings</h2>
                                <p className="text-base font-normal text-fuchsia-700">Our website features a vast database of events from all over the world. Whether it's a local gig or an international festival, you'll find them all here. Explore detailed event listings that include dates, venues, artists, and ticket information.</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Artist Profiles
                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">If you're a fan of a particular artist or performer, we've got you covered. Dive into artist profiles to learn more about their background, upcoming shows, and even exclusive content. Get to know the artists who will be making your entertainment experience unforgettable.
                                </p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Reviews and Ratings</h2>
                                <p className="text-base font-normal text-fuchsia-700">
                                    Making informed decisions is essential. That's why we provide user-generated reviews and ratings for events. Read what other attendees have to say, and share your own experiences to help fellow entertainment enthusiasts make their choices.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section-3 */}
                <div className="pt-6 md:pt-8 lg:pt-12">
                    <h2 className="text-3xl font-semibold text-fuchsia-900">Planning Made Easy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Seamless Ticket Booking</h2>
                                <p className="text-base font-normal text-fuchsia-700">Gone are the days of waiting in long lines or worrying about sold-out shows. Our website offers a hassle-free ticket booking experience. Select your preferred seats, pay securely, and receive e-tickets instantly. You can even print them if you prefer a physical copy.
                                </p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">PGroup Bookings

                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">Planning a night out with friends or organizing a family outing? Our group booking feature lets you reserve multiple tickets in one go. It's convenient, time-saving, and ensures that everyone gets to join in on the fun.

                                </p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Event Reminders
                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">
                                    Never miss an event again! Set up event reminders and receive notifications for your chosen events. We'll make sure you're always up to date with the latest information, so you can plan your entertainment calendar effortlessly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section-4 */}
                <div className="pt-6 md:pt-8 lg:pt-12">
                    <h2 className="text-3xl font-semibold text-fuchsia-900">Making Memories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Share Your Experience
                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">We believe that the joy of entertainment should be shared. Share your event experiences with friends and family through our integrated social sharing feature. Let your loved ones know about the fantastic time you had.

                                </p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Exclusive Merchandise

                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">Commemoorate your event with exclusive merchandise available on our website. From t-shirts and posters to limited-edition collectibles, you'll find a range of items to help you cherish the memories.

                                </p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Feedback and Suggestions

                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">We value your feedback and are constantly striving to improve our services. Have a suggestion? Let us know, and we'll do our best to make your future entertainment experiences even better.


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section-5 */}
                <div className="pt-6 md:pt-8 lg:pt-12">
                    <h2 className="text-3xl font-semibold text-fuchsia-900">Your Entertainment Hub</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Mobile App</h2>
                                <p className="text-base font-normal text-fuchsia-700">Take the entertainment experience with you wherever you go! Download our mobile app, available on both Android and iOS devices, for on-the-go access to events, ticketing, and more.

                                </p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Newsletter


                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">
                                    Stay in the know with our newsletter. Subscribe to receive the latest event announcements, exclusive offers, and entertainment news delivered directly to your inbox.
                                </p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Customer Support
                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">
                                    Need assistance? Our dedicated customer support team is here to help. Reach out to us through various channels, including live chat, email, and phone support. Your satisfaction is our priority.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section-4 */}
                <div className="pt-6 md:pt-8 lg:pt-12">
                    <h2 className="text-3xl font-semibold text-fuchsia-900">Join the Entertainment Revolution
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Community
                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">Become part of our vibrant community of entertainment enthusiasts. Connect with like-minded individuals, share your passion, and discover events together
                                </p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Loyalty Program


                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">
                                    Rewarding your loyalty is important to us. Join our loyalty program to enjoy exclusive benefits, discounts, and early access to tickets.
                                </p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Sustainability Initiatives
                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">
                                    We care about the planet. We're committed to sustainability, and we partner with eco-conscious events and venues to minimize our environmental footprint.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section-4 */}
                <div className="pt-6 md:pt-8 lg:pt-12">
                    <h2 className="text-3xl font-semibold text-fuchsia-900">Security and Privacy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Secure Transactions
                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">Your security is paramount. We employ industry-standard encryption and security protocols to ensure your financial information is always protected.

                                </p>
                            </div>
                        </div>
                        <div className="card w-96 bg-fuchsia-100 shadow-sm my-10">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-medium text-fuchsia-800">Privacy Policy
                                </h2>
                                <p className="text-base font-normal text-fuchsia-700">
                                    We respect your privacy. Our privacy policy outlines our commitment to safeguarding your personal information and using it responsibly.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blog;