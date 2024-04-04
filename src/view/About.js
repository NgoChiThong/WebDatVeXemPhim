import React, { useEffect } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";

export function About(props){

    useEffect(() => {
        const $ = window.$;
        window.onload = function() {
            $('.counter').countUp();
        };
        $(document).ready(function () {
            $(".owl-clients").owlCarousel({
                loop: true,
                margin: 40,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    736: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: false
                    }
                }
            });
        });

    }, []);
    return(
        <div>
            <title>Về chúng tôi</title>
            <Header></Header>
            <div className="w3l-breadcrumbs">
                <nav id="breadcrumbs" className="breadcrumbs">
                    <div className="container page-wrapper">
                        <a href="index.html">Home</a> » <span className="breadcrumb_last"
                                                              aria-current="page">About</span>
                    </div>
                </nav>
            </div>
            <div className="w3l-ab-grids py-5">

                <div className="container py-lg-4">
                    <div className="row ab-grids-sec align-items-center">
                        <div className="col-lg-6 ab-right">
                            {/*<img src="assets/images/banner1.jpg" alt="" className="img-fluid" />*/}
                            <img
                                src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/168364/Originals/meme-con-meo%20(1).jpg"
                                alt="" className="img-fluid"/>
                        </div>
                        <div className="col-lg-6 ab-left pl-lg-4 mt-lg-0 mt-5">
                            <h3 className="hny-title">My Showz Entertainment</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam id
                                quisquam ipsam
                                molestiae ad eius accusantium? Nulla dolorem perferendis inventore! posuere cubilia
                                Curae;
                                Nunc non risus in justo convallis feugiat.</p>
                            <div className="ready-more mt-4">
                                <a href="www.google.com" className="btn read-button">Read More <span
                                    className="fa fa-angle-double-right ml-2"
                                    aria-hidden="true"></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="w3l-counter-stats-info text-center">
                        <div className="stats_left">
                            <div className="counter_grid">
                                <div className="icon_info">
                                    <p className="counter">65</p>
                                    <h4>Movies</h4>

                                </div>
                            </div>
                        </div>
                        <div className="stats_left">
                            <div className="counter_grid">
                                <div className="icon_info">
                                    <p className="counter">165</p>
                                    <h4>Shows</h4>

                                </div>
                            </div>
                        </div>
                        <div className="stats_left">
                            <div className="counter_grid">
                                <div className="icon_info">
                                    <p className="counter">463</p>
                                    <h4>Staff Members</h4>

                                </div>
                            </div>
                        </div>
                        <div className="stats_left">
                            <div className="counter_grid">
                                <div className="icon_info">
                                    <p className="counter">5063</p>
                                    <h4>No. of Users</h4>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section className="w3l-clients" id="clients">

                <div className="container py-lg-4">

                    <div className="testimonial-width">
                        <div className="owl-clients owl-carousel owl-theme mb-lg-5">
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
                                                laudantium
                                                voluptate rem ullam dolore!.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="test-img"><img src="assets/images/team1.jpg"
                                                                           className="img-fluid" alt="/"/>
                                            </div>
                                            <div className="peopl align-self">
                                                <h3>Johnson smith</h3>
                                                <p className="indentity">Washington</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
                                                laudantium
                                                voluptate rem ullam dolore!.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="test-img"><img src="assets/images/team2.jpg"
                                                                           className="img-fluid" alt="/"/>
                                            </div>
                                            <div className="peopl align-self">
                                                <h3>Alexander leo</h3>
                                                <p className="indentity">Washington</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
                                                laudantium
                                                voluptate rem ullam dolore!.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="test-img"><img src="assets/images/team3.jpg"
                                                                           className="img-fluid" alt="/"/>
                                            </div>
                                            <div className="peopl align-self">
                                                <h3>Roy Linderson</h3>
                                                <p className="indentity">Washington</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
                                                laudantium
                                                voluptate rem ullam dolore!.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="test-img"><img src="assets/images/team4.jpg"
                                                                           className="img-fluid" alt="/"/>
                                            </div>
                                            <div className="peopl align-self">
                                                <h3>Mike Thyson</h3>
                                                <p className="indentity">Washington</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
                                                laudantium
                                                voluptate rem ullam dolore!.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="test-img"><img src="assets/images/team2.jpg"
                                                                           className="img-fluid" alt="/"/>
                                            </div>
                                            <div className="peopl align-self">
                                                <h3>Laura gill</h3>
                                                <p className="indentity">Washington</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
                                                laudantium
                                                voluptate rem ullam dolore!.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="test-img"><img src="assets/images/team3.jpg"
                                                                           className="img-fluid" alt="/"/>
                                            </div>
                                            <div className="peopl align-self">
                                                <h3>Smith Johnson</h3>
                                                <p className="indentity">Washington</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <Footer></Footer>
            {/* Nhúng các tệp script vào đây */}
            {/*<script src="assets/js/jquery.waypoints.min.js"></script>*/}
            {/*<script src="assets/js/jquery.countup.js"></script>*/}
            {/*<script type="text/javascript" src='assets/js/swiper.min.js'></script>*/}
            {/*<script>{`*/}
            {/*    $(document).ready(function() {*/}
            {/*        $('.counter').countUp();*/}
            {/*    });*/}
            {/*`}</script>*/}
        </div>
    );
}

export default About;