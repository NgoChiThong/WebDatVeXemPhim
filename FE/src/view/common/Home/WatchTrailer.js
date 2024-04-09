import React,{useEffect} from "react";

const WatchTrailer = () => {
    useEffect(() => {
        const $ = window.$;

        $(document).ready(function () {
            $('.owl-mid').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                responsiveClass: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    480: {
                        items: 1,
                        nav: false
                    },
                    667: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true
                    }
                }
            })
        });
    }, []);

    return <div>
        <div className="companies20-content">
            <div className="owl-mid owl-carousel owl-theme">
                <div className="item">
                    <li>
                        <div className="slider-info mid-view bg bg2">
                            <div className="container">
                                <div className="mid-info">
                                    <span className="sub-text">Comedy</span>
                                    <h3>Jumanji: The Next Level</h3>
                                    <p>2019 ‧ Comedy/Action ‧ 2h 3m</p>
                                    <a className="watch" href="movies.html"><span className="fa fa-play"
                                                                                  aria-hidden="true"></span>
                                        Watch Trailer</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
                <div className="item">
                    <li>
                        <div className="slider-info mid-view mid-top1 bg bg2">
                            <div className="container">
                                <div className="mid-info">
                                    <span className="sub-text">Adventure</span>
                                    <h3>Dolittle</h3>
                                    <p>2020 ‧ Family/Adventure ‧ 1h 41m</p>
                                    <a className="watch" href="movies.html"><span className="fa fa-play"
                                                                                  aria-hidden="true"></span>
                                        Watch Trailer</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
                <div className="item">
                    <li>
                        <div className="slider-info mid-view mid-top2 bg bg2">
                            <div className="container">
                                <div className="mid-info">
                                    <span className="sub-text">Action</span>
                                    <h3>Bad Boys for Life</h3>
                                    <p>2020 ‧ Comedy/Action ‧ 2h 4m</p>
                                    <a className="watch" href="movies.html"><span className="fa fa-play"
                                                                                  aria-hidden="true"></span>
                                        Watch Trailer</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    </div>
}
export default WatchTrailer;