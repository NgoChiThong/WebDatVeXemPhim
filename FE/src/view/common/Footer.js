import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button onClick={scrollToTop} id="movetop" title="Go to top" style={{ display: isVisible ? 'block' : 'none' }}>
            <span className="fa fa-arrow-up" aria-hidden="true"></span>
        </button>
    );
}
export function Footer(){
    return (
            <footer className="w3l-footer">
                <section className="footer-inner-main">
                    <div className="footer-hny-grids py-5">
                        <div className="container py-lg-4">
                            <div className="text-txt">
                                <div className="right-side">
                                    <div className="row footer-about">
                                        <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                            <a href="movies.html"><img className="img-fluid"
                                                                       src="assets/images/banner1.jpg"
                                                                       alt=""/></a>
                                        </div>
                                        <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                            <a href="movies.html"><img className="img-fluid"
                                                                       src="assets/images/banner2.jpg"
                                                                       alt=""/></a>
                                        </div>
                                        <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                            <a href="movies.html"><img className="img-fluid"
                                                                       src="assets/images/banner3.jpg"
                                                                       alt=""/></a>
                                        </div>
                                        <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                            <a href="movies.html"><img className="img-fluid"
                                                                       src="assets/images/banner4.jpg"
                                                                       alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="row footer-links">
                                        <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                            <h6>Movies</h6>
                                            <ul>
                                                <li><a href="Contact_Us.html">Movies</a></li>
                                                <li><a href="Contact_Us.html">Videos</a></li>
                                                <li><a href="Contact_Us.html">English Movies</a></li>
                                                <li><a href="Contact_Us.html">Tailor</a></li>
                                                <li><a href="Contact_Us.html">Upcoming Movies</a></li>
                                                <li><a href="Contact_Us.html">Contact Us</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                            <h6>Information</h6>
                                            <ul>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="Contact_Us.html">Tv Series</a></li>
                                                <li><a href="Contact_Us.html">Blogs</a></li>
                                                <li><a href="sign_in.html">Login</a></li>
                                                <li><a href="Contact_Us.html">Contact</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                            <h6>Locations</h6>
                                            <ul>
                                                <li><a href="movies.html">Asia</a></li>
                                                <li><a href="movies.html">France</a></li>
                                                <li><a href="movies.html">Taiwan</a></li>
                                                <li><a href="movies.html">United States</a></li>
                                                <li><a href="movies.html">Korea</a></li>
                                                <li><a href="movies.html">United Kingdom</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                            <h6>Newsletter</h6>
                                            <form action="#" className="subscribe mb-3" method="post">
                                                <input type="email" name="email" placeholder="Your Email Address"
                                                       required=""/>
                                                <button><span className="fa fa-envelope-o"></span></button>
                                            </form>
                                            <p>Enter your email and receive the latest news, updates and special offers
                                                from us.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="below-section">
                        <div className="container">
                            <div className="copyright-footer">
                                <div className="columns text-lg-left">
                                    <p>&copy; 2021 MyShowz. All rights reserved</p>
                                </div>

                                <ul className="social text-lg-right">
                                    <li>
                                        <a href="google">
                                            <span className="fa fa-facebook" aria-hidden="true"></span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="google">
                                            <span className="fa fa-linkedin" aria-hidden="true"></span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="google">
                                            <span className="fa fa-twitter" aria-hidden="true"></span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="google">
                                            <span className="fa fa-google-plus" aria-hidden="true"></span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <ScrollToTopButton />
                </section>
            </footer>
    )
}

export default Footer;