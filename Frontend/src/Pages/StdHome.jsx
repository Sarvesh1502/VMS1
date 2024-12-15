import React from "react";
import "./Stdhome.css"; // Import custom CSS file


const StdHome = () => {
    return (
        <div>
            {/* Floating Shapes */}
            <div className="shape shape-small animate_animated animate_pulse"></div>
            <div className="shape shape-medium animate_animated animate_pulse animate_delay-2s"></div>
            <div className="shape shape-large animate_animated animate_pulse animate_delay-4s"></div>

            {/* Jumbotron Section */}
            <div className="container my-5">
                <div className="jumbotron animate_animated animate_zoomIn">
                    <h1 className="display-4">Make a Difference Today!</h1>
                    <p className="lead">
                        Join our community of dedicated student volunteers. Explore your passions, develop new skills, and create positive change.
                    </p>
                    <a href="#signup" className="btn btn-light btn-lg animate_animated animate_pulse animate_infinite">
                        Sign Up Now
                    </a>
                </div>
            </div>

            {/* Why Volunteer Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4 animate_animated animate_bounceIn">Why Should You Volunteer?</h2>
                <div className="row">
                    {/* Personal Growth Card */}
                    <div className="col-md-4 mb-3">
                        <div className="card reason-card animate_animated animate_fadeInUp">
                            <div className="card-body text-center">
                                <div className="icon-bounce animate_animated animate_bounceIn">
                                    <i className="bi bi-person-circle"></i>
                                </div>
                                <h5 className="card-title text-slide-in">Personal Growth</h5>
                                <p className="card-text text-slide-in">
                                    Volunteering allows you to discover your strengths and expand your skills. Gain experience and build confidence by stepping out of your comfort zone!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Network & Connect Card */}
                    <div className="col-md-4 mb-3">
                        <div className="card reason-card animate_animated animate_fadeInUp animate_delay-1s">
                            <div className="card-body text-center">
                                <div className="icon-bounce animate_animated animate_bounceIn animate_delay-1s">
                                    <i className="bi bi-people-fill"></i>
                                </div>
                                <h5 className="card-title text-slide-in">Network & Connect</h5>
                                <p className="card-text text-slide-in">
                                    Meet like-minded individuals, build a professional network, and make lifelong friendships. Networking is key to growing both personally and professionally!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Make an Impact Card */}
                    <div className="col-md-4 mb-3">
                        <div className="card reason-card animate_animated animate_fadeInUp animate_delay-2s">
                            <div className="card-body text-center">
                                <div className="icon-bounce animate_animated animate_bounceIn animate_delay-2s">
                                    <i className="bi bi-heart-fill"></i>
                                </div>
                                <h5 className="card-title text-slide-in">Make an Impact</h5>
                                <p className="card-text text-slide-in">
                                    Your actions matter. By volunteering, you’re directly contributing to the betterment of society and inspiring others to do the same.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="container text-center my-5">
                <h3 className="mb-4 animate_animated animate_fadeIn">Ready to Make a Change?</h3>
                <p className="animate_animated animate_fadeInUp">
                    Take the first step in your journey as a volunteer. Sign up now and be a part of something bigger than yourself.
                </p>
                <a href="#signup" className="btn btn-primary btn-lg animate_animated animate_heartBeat animate_infinite">
                    Sign Up Today
                </a>
            </div>

            {/* Footer */}
            <footer className="text-center py-3 bg-light">
                <p className="mb-0">© 2024 Volunteer Management System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default StdHome;
