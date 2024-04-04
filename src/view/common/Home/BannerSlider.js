import React, { useEffect } from 'react';

const BannerSlider = () => {
    useEffect(() => {
        const $ = window.$;

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
    }, []);

    return <div>
        <div className="owl-one owl-carousel owl-theme">
            <div className="item">
                <li>
                    <div className="slider-info banner-view bg bg2" style={{ backgroundImage: `url(${"https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-meo-ngat-xiu.jpg"})` }}>
                        <div className="banner-info">
                            <h3>GODZILLA X KONG: ĐẾ CHẾ MỚI</h3>
                            <p>GODZILLA X KONG: ĐẾ CHẾ MỚI.<span
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
                                        src="https://www.youtube.com/embed/RXc2bs_aBuA?si=qwqW5nSUqGIyH-eE"
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
                    <div className="slider-info  banner-view banner-top1 bg bg2">
                        <div className="banner-info">
                            <h3>Latest Online Movies</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span
                                className="over-para">
										Consequuntur hic odio
										voluptatem tenetur consequatur.</span></p>
                            <a href="#small-dialog2" className="popup-with-zoom-anim play-view1">
									<span className="video-play-icon">
										<span className="fa fa-play"></span>
									</span>
                                <h6>Watch Trailer</h6>
                            </a>
                            <div id="small-dialog2" className="zoom-anim-dialog mfp-hide">
                                <iframe src="https://vimeo.com/366697369"
                                        title="Vimeo Video"
                                        allow="autoplay; fullscreen"
                                        allowFullScreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
            <div className="item">
                <li>
                    <div className="slider-info banner-view banner-top2 bg bg2"style={{ backgroundImage: `url(${"https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/03/anh-meo-18.jpg"})` }}>
                        <div className="banner-info">
                            <h3>Latest Movie Trailers</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span
                                className="over-para">
										Consequuntur hic odio
										voluptatem tenetur consequatur.</span></p>
                            <a href="#small-dialog3" className="popup-with-zoom-anim play-view1">
									<span className="video-play-icon">
										<span className="fa fa-play"></span>
									</span>
                                <h6>Watch Trailer</h6>
                            </a>
                            <div id="small-dialog3" className="zoom-anim-dialog mfp-hide">
                                <iframe width="560" height="315"
                                        src="https://www.youtube.com/embed/sU8G7Q4rUA4?si=Dt5dV9yILK4I8Lgp"
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
                    <div className="slider-info banner-view banner-top3 bg bg2">
                        <div className="banner-info">
                            <h3>Latest Online Movies</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span
                                className="over-para">
										Consequuntur hic odio
										voluptatem tenetur consequatur.</span></p>
                            <a href="#small-dialog4" className="popup-with-zoom-anim play-view1">
									<span className="video-play-icon">
										<span className="fa fa-play"></span>
									</span>
                                <h6>Watch Trailer</h6>
                            </a>
                            <div id="small-dialog4" className="zoom-anim-dialog mfp-hide">
                                <iframe src="https://vimeo.com/366697369"
                                        title="Vimeo Video"
                                        allow="autoplay; fullscreen"
                                        allowFullScreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        </div>
    </div>;
};

export default BannerSlider;