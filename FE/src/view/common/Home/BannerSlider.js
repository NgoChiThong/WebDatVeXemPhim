import React, { useState, useEffect } from 'react';

const BannerSlider = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:80/movies/now');
                const data = await response.json();

                if (isMounted) {
                    if (data.status === 'OK') {
                        setMovies(data.data);
                        console.log('Movies:', data.data);
                    } else {
                        console.error('Error fetching movies:', data.msg);
                    }
                    setLoading(false);
                }
            } catch (error) {
                if (isMounted) {
                    console.error('Error fetching movies:', error);
                    setLoading(false);
                }
            }
        };

        fetchMovies();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        const $ = window.$;

        if (!loading) {
            $(document).ready(function () {
                $('.owl-one').owlCarousel({
                    stagePadding: 280,
                    loop: true,
                    margin: 20,
                    nav: true,
                    responsiveClass: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplaySpeed: 1000,
                    autoplayHoverPause: false,
                    responsive: {
                        0: { items: 1, stagePadding: 40, nav: false },
                        480: { items: 1, stagePadding: 60, nav: true },
                        667: { items: 1, stagePadding: 80, nav: true },
                        1000: { items: 1, nav: true }
                    }
                });
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
        }
    }, [loading]);

    const movie1 = movies[0] || {};
    const movie2 = movies[1] || {};
    const movie3 = movies[2] || {};


    return <div>
        <div className="owl-one owl-carousel owl-theme">
            <div className="item">
                <li>
                    <div className="slider-info banner-view bg bg2"
                         style={{backgroundImage: `url(${movie1.moviePoster})`}}>
                        <div className="banner-info">
                            <h3>{movie1.movieName}</h3>
                            <p>  {movie1.movieDescription ? movie1.movieDescription.substring(0, 70) : ''}<span
                                className="over-para">
										.</span></p>
                            <a href="#small-dialog1" className="popup-with-zoom-anim play-view1">
									<span className="video-play-icon">
										<span className="fa fa-play"></span>
									</span>
                                <h6>Watch Trailer</h6>
                            </a>
                            <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                                <iframe width="560" height="315"
                                        src={movie1.movieTrailer}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>

                        </div>
                    </div>
                </li>
            </div>
            <div className="item">
                <li>
                    <div className="slider-info banner-view bg bg2"
                         style={{backgroundImage: `url(${movie2.moviePoster})`}}>
                        <div className="banner-info">
                            <h3>{movie2.movieName}</h3>
                            <p>  {movie2.movieDescription ? movie2.movieDescription.substring(0, 70) : ''}<span
                                className="over-para">
										.</span></p>
                            <a href="#small-dialog1" className="popup-with-zoom-anim play-view1">
									<span className="video-play-icon">
										<span className="fa fa-play"></span>
									</span>
                                <h6>Watch Trailer</h6>
                            </a>
                            <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                                <iframe width="560" height="315"
                                        src={movie2.movieTrailer}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>

                        </div>
                    </div>
                </li>
            </div>
            <div className="item">
                <li>
                    <div className="slider-info banner-view bg bg2"
                         style={{backgroundImage: `url(${movie3.moviePoster})`}}>
                        <div className="banner-info">
                            <h3>{movie3.movieName}</h3>
                            <p>  {movie3.movieDescription ? movie3.movieDescription.substring(0, 70) : ''}<span
                                className="over-para">
										.</span></p>
                            <a href="#small-dialog1" className="popup-with-zoom-anim play-view1">
									<span className="video-play-icon">
										<span className="fa fa-play"></span>
									</span>
                                <h6>Watch Trailer</h6>
                            </a>
                            <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                                <iframe width="560" height="315"
                                        src={movie3.movieTrailer}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>

                        </div>
                    </div>
                </li>
            </div>
        </div>
    </div>;
};

export default BannerSlider;