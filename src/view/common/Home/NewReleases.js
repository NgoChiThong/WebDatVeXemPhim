import React, { useEffect } from 'react';

const NewReleases = () => {
    useEffect(()=> {
        const $ = window.$;
        $(document).ready(function (){
            $('.owl-three').owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                responsiveClass: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 2,
                        nav: false
                    },
                    480: {
                        items: 2,
                        nav: true
                    },
                    667: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 5,
                        nav: true
                    }
                }
            });
            $(document).ready(function () {
                $('.popup-with-zoom-anim').magnificPopup({
                    type: 'inline',

                    fixedContentPos: false,
                    fixedBgPos: true,

                    overflowY: 'auto',

                    closeBtnInside: true,
                    preloader: false,

                    midClick: true,
                    removalDelay: 300,
                    mainClass: 'my-mfp-zoom-in'
                });

                $('.popup-with-move-anim').magnificPopup({
                    type: 'inline',

                    fixedContentPos: false,
                    fixedBgPos: true,

                    overflowY: 'auto',

                    closeBtnInside: true,
                    preloader: false,

                    midClick: true,
                    removalDelay: 300,
                    mainClass: 'my-mfp-slide-bottom'
                });
            });
        });
    },[]);
    return <div>
        <div className="grids-main py-5">
            <div className="container py-lg-3">
                <div className="headerhny-title">
                    <div className="w3l-title-grids">
                        <div className="headerhny-left">
                            <h3 className="hny-title">New Releases</h3>
                        </div>
                        <div className="headerhny-right text-lg-right">
                            <h4><a className="show-title" href="movies.html">Show all</a></h4>
                        </div>
                    </div>
                </div>
                <div className="owl-three owl-carousel owl-theme">
                    <div className="item vhny-grid">
                        <div className="box16 mb-0">
                            <a href="movies.html">
                                <figure>
                                    <img className="img-fluid" src="../assets/images/n1.jpg" alt=""></img>
                                </figure>
                                <div className="box-content">
                                    <h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

                                        <span className="post fa fa-heart text-right"></span>
                                    </h4>
                                </div>
                                <span className="fa fa-play video-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                        <h3><a className="title-gd" href="movies.html">No Time to Die</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <div className="button-center text-center mt-4">
                            <a href="movies.html" className="btn watch-button">Watch now</a>
                        </div>

                    </div>
                    <div className="item vhny-grid">
                        <div className="box16 mb-0">
                            <a href="movies.html">
                                <figure>
                                    <img className="img-fluid" src="../assets/images/n2.jpg" alt=""></img>
                                </figure>
                                <div className="box-content">

                                    <h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

                                        <span className="post fa fa-heart text-right"></span>
                                    </h4>
                                </div>
                                <span className="fa fa-play video-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                        <h3><a className="title-gd" href="movies.html">Mulan</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <div className="button-center text-center mt-4">
                            <a href="movies.html" className="btn watch-button">Watch now</a>
                        </div>
                    </div>
                    <div className="item vhny-grid">
                        <div className="box16 mb-0">
                            <a href="movies.html">
                                <figure>
                                    <img className="img-fluid" src="../assets/images/n3.jpg" alt=""></img>
                                </figure>
                                <div className="box-content">

                                    <h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

                                        <span className="post fa fa-heart text-right"></span>
                                    </h4>
                                </div>
                                <span className="fa fa-play video-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                        <h3><a className="title-gd" href="movies.html">Free Guy</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <div className="button-center text-center mt-4">
                            <a href="movies.html" className="btn watch-button">Watch now</a>
                        </div>
                    </div>
                    <div className="item vhny-grid">
                        <div className="box16 mb-0">
                            <a href="movies.html">
                                <figure>
                                    <img className="img-fluid" src="../assets/images/n4.jpg" alt=""></img>
                                </figure>
                                <div className="box-content">

                                    <h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

                                        <span className="post fa fa-heart text-right"></span>
                                    </h4>
                                </div>
                                <span className="fa fa-play video-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                        <h3><a className="title-gd" href="movies.html">My Spy</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <div className="button-center text-center mt-4">
                            <a href="movies.html" className="btn watch-button">Watch now</a>
                        </div>

                    </div>
                    <div className="item vhny-grid">
                        <div className="box16 mb-0">
                            <a href="movies.html">
                                <figure>
                                    <img className="img-fluid" src="../assets/images/n5.jpg" alt=""></img>
                                </figure>
                                <div className="box-content">

                                    <h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

                                        <span className="post fa fa-heart text-right"></span>
                                    </h4>
                                </div>
                                <span className="fa fa-play video-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                        <h3><a className="title-gd" href="movies.html">Scoob</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <div className="button-center text-center mt-4">
                            <a href="movies.html" className="btn watch-button">Watch now</a>
                        </div>
                    </div>
                    <div className="item vhny-grid">
                        <div className="box16 mb-0">
                            <a href="movies.html">
                                <figure>
                                    <img className="img-fluid"
                                         src="../assets/images/n6.jpg"
                                         alt=""></img>
                                </figure>
                                <div className="box-content">

                                    <h4> <span className="post"><span className="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

                                        <span className="post fa fa-heart text-right"></span>
                                    </h4>
                                </div>
                                <span className="fa fa-play video-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                        <h3><a className="title-gd" href="movies.html">Downhill</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <div className="button-center text-center mt-4">
                            <a href="movies.html" className="btn watch-button">Watch now</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}
export default NewReleases;