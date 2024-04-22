import Header from "./common/Header";
import Footer from "./common/Footer";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet";

export function MovieDetail(){
    const [activeTab, setActiveTab] = useState('overview');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "assets/css/style.css";
        document.head.appendChild(link);

        const link2 = document.createElement("link");
        link2.rel = "stylesheet";
        link2.type = "text/css";
        link2.href = "assets/css/plugins.css";
        document.head.appendChild(link2);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(link2);
        };
    }, []);
    return(
        <div>
            <title>Chi tiết phim</title>
            <Helmet></Helmet>
            <Header></Header>

            <div>
                <nav id="breadcrumbs" className="breadcrumbs">
                    <div className="container page-wrapper">
                        <div className="w3l-breadcrumbs">
                            <div className="buster-light">
                                <div className="hero mv-single-hero">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-single movie-single movie_single">
                                    <div className="container">
                                        <div className="row ipad-width2">
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <div className="movie-img sticky-sb">
                                                    <img src="/assets/images/mv5.jpg" alt=""/>
                                                    <div className="movie-btn">
                                                        <div className="btn-transform transform-vertical red">
                                                            <div><a href="#" style={{color: "white"}} className="item item-1 redbtn"> <i
                                                                className="ion-play"></i> Watch Trailer</a></div>
                                                            <div><a href="https://www.youtube.com/embed/o-0hcF97wy0"
                                                                    className="item item-2 redbtn fancybox-media hvr-grow"><i
                                                                className="ion-play"></i></a></div>
                                                        </div>
                                                        <div className="btn-transform transform-vertical">
                                                            <Link to={'/booking'}>
                                                            <div><a href="#" className="item item-1 yellowbtn"> <i
                                                                className="ion-card"></i> Buy ticket</a></div>
                                                            <div><a href="#" className="item item-2 yellowbtn"><i
                                                                className="ion-card"></i></a></div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-sm-12 col-xs-12">
                                                <div className="movie-single-ct main-content">
                                                    <h1 className="bd-hd">Skyfall: Quantum of Spectre <span>2015</span>
                                                    </h1>
                                                    <div className="social-btn">
                                                        <a href="#" className="parent-btn"><i
                                                            className="ion-heart"></i> Add to
                                                            Favorite</a>
                                                        <div className="hover-bnt">
                                                            <a href="#" className="parent-btn"><i
                                                                className="ion-android-share-alt"></i>share</a>
                                                            <div className="hvr-item">
                                                                <a href="#" className="hvr-grow"><i
                                                                    className="ion-social-facebook"></i></a>
                                                                <a href="#" className="hvr-grow"><i
                                                                    className="ion-social-twitter"></i></a>
                                                                <a href="#" className="hvr-grow"><i
                                                                    className="ion-social-googleplus"></i></a>
                                                                <a href="#" className="hvr-grow"><i
                                                                    className="ion-social-youtube"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="movie-rate">
                                                        <div className="rate">
                                                            <i className="ion-android-star"></i>
                                                            <p><span>8.1</span> /10<br/>
                                                                <span className="rv">56 Reviews</span>
                                                            </p>
                                                        </div>
                                                        <div className="rate-star">
                                                            <p>Rate This Movie: </p>
                                                            <i className="ion-ios-star"></i>
                                                            <i className="ion-ios-star"></i>
                                                            <i className="ion-ios-star"></i>
                                                            <i className="ion-ios-star"></i>
                                                            <i className="ion-ios-star"></i>
                                                            <i className="ion-ios-star"></i>
                                                            <i className="ion-ios-star"></i>
                                                            <i className="ion-ios-star"></i>
                                                            <i className="ion-ios-star-outline"></i>
                                                        </div>
                                                    </div>
                                                    <div className="movie-tabs">
                                                        <div className="tabs">
                                                            <ul className="tab-links tabs-mv">
                                                                <li className={activeTab === 'overview' ? 'active' : ''}>
                                                                    <a
                                                                        href="#overview"
                                                                        onClick={() => handleTabClick('overview')}>Overview</a>
                                                                </li>
                                                                <li className={activeTab === 'reviews' ? 'active' : ''}>
                                                                    <a
                                                                        href="#reviews"
                                                                        onClick={() => handleTabClick('reviews')}>Reviews</a>
                                                                </li>
                                                                <li className={activeTab === 'cast' ? 'active' : ''}><a
                                                                    href="#cast"
                                                                    onClick={() => handleTabClick('cast')}>Cast
                                                                    & Crew</a></li>
                                                                <li className={activeTab === 'media' ? 'active' : ''}><a
                                                                    href="#media"
                                                                    onClick={() => handleTabClick('media')}>Media</a>
                                                                </li>
                                                                <li className={activeTab === 'moviesrelated' ? 'active' : ''}>
                                                                    <a
                                                                        href="#moviesrelated"
                                                                        onClick={() => handleTabClick('moviesrelated')}>Related
                                                                        Movies</a>
                                                                </li>
                                                            </ul>
                                                            <div className="tab-content">
                                                                <div className="tab review"
                                                                     style={{display: activeTab === 'overview' ? 'block' : 'none'}}
                                                                     id="overview">
                                                                    <div className="row">
                                                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                                                            <p>Tony Stark creates the Ultron Program to
                                                                                protect the
                                                                                world, but when the peacekeeping program
                                                                                becomes
                                                                                hostile, The Avengers go into action to
                                                                                try and
                                                                                defeat a
                                                                                virtually impossible enemy together.
                                                                                Earth's
                                                                                mightiest
                                                                                heroes must come together once again to
                                                                                protect the
                                                                                world from global extinction.</p>
                                                                            <div className="title-hd-sm">
                                                                                <h4>Videos & Photos</h4>
                                                                                <a href="#" className="time">All 5
                                                                                    Videos & 245
                                                                                    Photos <i
                                                                                        className="ion-ios-arrow-right"></i></a>
                                                                            </div>
                                                                            <div className="mvsingle-item ov-item">

                                                                            </div>
                                                                            <div className="title-hd-sm">
                                                                                <h4>cast</h4>
                                                                                <a href="#" className="time">Full Cast &
                                                                                    Crew <i
                                                                                        className="ion-ios-arrow-right"></i></a>
                                                                            </div>

                                                                            <div className="mvcast-item">

                                                                            </div>
                                                                            <div className="title-hd-sm">
                                                                                <h4>User reviews</h4>
                                                                                <a href="#" className="time">See All 56
                                                                                    Reviews <i
                                                                                        className="ion-ios-arrow-right"></i></a>
                                                                            </div>

                                                                            <div className="mv-user-review-item">
                                                                                <h3>Best Marvel movie in my opinion</h3>
                                                                                <div className="no-star">
                                                                                    <i className="ion-android-star"></i>
                                                                                    <i className="ion-android-star"></i>
                                                                                    <i className="ion-android-star"></i>
                                                                                    <i className="ion-android-star"></i>
                                                                                    <i className="ion-android-star"></i>
                                                                                    <i className="ion-android-star"></i>
                                                                                    <i className="ion-android-star"></i>
                                                                                    <i className="ion-android-star"></i>
                                                                                    <i className="ion-android-star"></i>
                                                                                    <i className="ion-android-star last"></i>
                                                                                </div>
                                                                                <p className="time">
                                                                                    17 December 2016 by <a
                                                                                    href="#"> hawaiipierson</a>
                                                                                </p>
                                                                                <p>This is by far one of my favorite
                                                                                    movies from the
                                                                                    MCU. The introduction of new
                                                                                    Characters both
                                                                                    good
                                                                                    and bad also makes the movie more
                                                                                    exciting.
                                                                                    giving
                                                                                    the characters more of a back story
                                                                                    can also
                                                                                    help
                                                                                    audiences relate more to different
                                                                                    characters
                                                                                    better, and it connects a bond
                                                                                    between the
                                                                                    audience
                                                                                    and actors or characters. Having
                                                                                    seen the movie
                                                                                    three times does not bother me here
                                                                                    as it is as
                                                                                    thrilling and exciting every time I
                                                                                    am watching
                                                                                    it.
                                                                                    In other words, the movie is by far
                                                                                    better than
                                                                                    previous movies (and I do love
                                                                                    everything
                                                                                    Marvel),
                                                                                    the plotting is splendid (they
                                                                                    really do out do
                                                                                    themselves in each film, there are
                                                                                    no problems
                                                                                    watching it more than once.</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4 col-xs-12 col-sm-12">
                                                                            <div className="sb-it">
                                                                                <h6>Director: </h6>
                                                                                <p><a href="#">Joss Whedon</a></p>
                                                                            </div>
                                                                            <div className="sb-it">
                                                                                <h6>Writer: </h6>
                                                                                <p><a href="#">Joss Whedon,</a> <a
                                                                                    href="#">Stan
                                                                                    Lee</a>
                                                                                </p>
                                                                            </div>
                                                                            <div className="sb-it">
                                                                                <h6>Stars: </h6>
                                                                                <p><a href="#">Robert Downey Jr,</a> <a
                                                                                    href="#">Chris
                                                                                    Evans,</a> <a href="#">Mark
                                                                                    Ruffalo,</a><a
                                                                                    href="#"> Scarlett Johansson</a></p>
                                                                            </div>
                                                                            <div className="sb-it">
                                                                                <h6>Genres:</h6>
                                                                                <p><a href="#">Action, </a> <a
                                                                                    href="#"> Sci-Fi,</a>
                                                                                    <a
                                                                                        href="#">Adventure</a></p>
                                                                            </div>
                                                                            <div className="sb-it">
                                                                                <h6>Release Date:</h6>
                                                                                <p>May 1, 2015 (U.S.A)</p>
                                                                            </div>
                                                                            <div className="sb-it">
                                                                                <h6>Run Time:</h6>
                                                                                <p>141 min</p>
                                                                            </div>
                                                                            <div className="sb-it">
                                                                                <h6>MMPA Rating:</h6>
                                                                                <p>PG-13</p>
                                                                            </div>
                                                                            <div className="sb-it">
                                                                                <h6>Plot Keywords:</h6>
                                                                                <p className="tags">
                                                                    <span className="time"><a
                                                                        href="#">superhero</a></span>
                                                                                    <span className="time"><a
                                                                                        href="#">marvel universe</a></span>
                                                                                    <span className="time"><a
                                                                                        href="#">comic</a></span>
                                                                                    <span className="time"><a
                                                                                        href="#">blockbuster</a></span>
                                                                                    <span className="time"><a
                                                                                        href="#">final battle</a></span>
                                                                                </p>
                                                                            </div>
                                                                            <div className="ads">
                                                                                <img src="images/uploads/ads1.png"
                                                                                     alt=""/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab review"
                                                                     style={{display: activeTab === 'reviews' ? 'block' : 'none'}}
                                                                     id="reviews">
                                                                    <div className="row">
                                                                        <div className="rv-hd">
                                                                            <div className="div">
                                                                                <h3>Related Movies To</h3>
                                                                                <h2>Skyfall: Quantum of Spectre</h2>
                                                                            </div>
                                                                            <a href="#" className="redbtn">Write
                                                                                Review</a>
                                                                        </div>
                                                                        <div className="topbar-filter">
                                                                            <p>Found <span>56 reviews</span> in total
                                                                            </p>
                                                                            <label>Filter by:</label>
                                                                            <select>
                                                                                <option value="popularity">Popularity
                                                                                    Descending
                                                                                </option>
                                                                                <option value="popularity">Popularity
                                                                                    Ascending
                                                                                </option>
                                                                                <option value="rating">Rating
                                                                                    Descending
                                                                                </option>
                                                                                <option value="rating">Rating
                                                                                    Ascending
                                                                                </option>
                                                                                <option value="date">Release date
                                                                                    Descending
                                                                                </option>
                                                                                <option value="date">Release date
                                                                                    Ascending
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="mv-user-review-item">
                                                                            <div className="user-infor">
                                                                                <img src="images/uploads/userava1.jpg"
                                                                                     alt=""/>
                                                                                <div>
                                                                                    <h3>Best Marvel movie in my
                                                                                        opinion</h3>
                                                                                    <div className="no-star">
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star last"></i>
                                                                                    </div>
                                                                                    <p className="time">
                                                                                        17 December 2016 by <a
                                                                                        href="#"> hawaiipierson</a>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <p>This is by far one of my favorite movies
                                                                                from the
                                                                                MCU.
                                                                                The introduction of new Characters both
                                                                                good and bad
                                                                                also makes the movie more exciting.
                                                                                giving the
                                                                                characters more of a back story can also
                                                                                help
                                                                                audiences
                                                                                relate more to different characters
                                                                                better, and it
                                                                                connects a bond between the audience and
                                                                                actors or
                                                                                characters. Having seen the movie three
                                                                                times does
                                                                                not
                                                                                bother me here as it is as thrilling and
                                                                                exciting
                                                                                every
                                                                                time I am watching it. In other words,
                                                                                the movie is
                                                                                by
                                                                                far better than previous movies (and I
                                                                                do love
                                                                                everything Marvel), the plotting is
                                                                                splendid (they
                                                                                really do out do themselves in each
                                                                                film, there are
                                                                                no
                                                                                problems watching it more than once.</p>
                                                                        </div>
                                                                        <div className="mv-user-review-item">
                                                                            <div className="user-infor">
                                                                                <img src="images/uploads/userava2.jpg"
                                                                                     alt=""/>
                                                                                <div>
                                                                                    <h3>Just about as good as the first
                                                                                        one!</h3>
                                                                                    <div className="no-star">
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                        <i className="ion-android-star"></i>
                                                                                    </div>
                                                                                    <p className="time">
                                                                                        17 December 2016 by <a
                                                                                        href="#"> hawaiipierson</a>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <p>Avengers Age of Ultron is an excellent
                                                                                sequel and a
                                                                                worthy MCU title! There are a lot of
                                                                                good and one
                                                                                thing
                                                                                that feels off in my opinion. </p>

                                                                            <p>THE GOOD:</p>

                                                                            <p>First off the action in this movie is
                                                                                amazing, to
                                                                                buildings crumbling, to evil blue eyed
                                                                                robots
                                                                                tearing
                                                                                stuff up, this movie has the action
                                                                                perfectly
                                                                                handled.
                                                                                And with that action comes visuals. The
                                                                                visuals are
                                                                                really good, even though you can see
                                                                                clearly where
                                                                                they
                                                                                are through the movie, but that doesn't
                                                                                detract from
                                                                                the
                                                                                experience. While all the CGI glory is
                                                                                taking place,
                                                                                there are lovable characters that are in
                                                                                the mix.
                                                                                First
                                                                                off the original characters, Iron Man,
                                                                                Captain
                                                                                America,
                                                                                Thor, Hulk, Black Widow, and Hawkeye,
                                                                                are just as
                                                                                brilliant as they are always. And Joss
                                                                                Whedon fixed
                                                                                my
                                                                                main problem in the first Avengers by
                                                                                putting in
                                                                                more
                                                                                Hawkeye and him more fleshed out. Then
                                                                                there is the
                                                                                new
                                                                                Avengers, Quicksilver, Scarletwich, and
                                                                                Vision, they
                                                                                are
                                                                                pretty cool in my opinion. Vision in
                                                                                particular is
                                                                                pretty amazing in all his scenes.</p>

                                                                            <p>THE BAD:</p>

                                                                            <p>The beginning of the film it's fine until
                                                                                towards the
                                                                                second act and there is when it starts
                                                                                to feel a
                                                                                little
                                                                                rushed. Also I do feel like there are
                                                                                scenes missing
                                                                                but
                                                                                there was talk of an extended version on
                                                                                Blu-Ray so
                                                                                that's cool.</p>
                                                                        </div>
                                                                        <div className="topbar-filter">
                                                                            <label>Reviews per page:</label>
                                                                            <select>
                                                                                <option value="range">5 Reviews</option>
                                                                                <option value="saab">10 Reviews</option>
                                                                            </select>
                                                                            <div className="pagination2">
                                                                                <span>Page 1 of 6:</span>
                                                                                <a className="active" href="#">1</a>
                                                                                <a href="#">2</a>
                                                                                <a href="#">3</a>
                                                                                <a href="#">4</a>
                                                                                <a href="#">5</a>
                                                                                <a href="#">6</a>
                                                                                <a href="#"><i
                                                                                    className="ion-arrow-right-b"></i></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab review"
                                                                     style={{display: activeTab === 'cast' ? 'block' : 'none'}}
                                                                     id="cast">
                                                                    <div className="row">
                                                                        <h3>Cast & Crew of</h3>
                                                                        <h2>Avengers: Age of Ultron</h2>

                                                                        <div className="title-hd-sm">
                                                                            <h4>Directors & Credit Writers</h4>
                                                                        </div>


                                                                        <div className="title-hd-sm">
                                                                            <h4>Cast</h4>
                                                                        </div>

                                                                        <div className="title-hd-sm">
                                                                            <h4>Produced by</h4>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                                <div className="tab review"
                                                                     style={{display: activeTab === 'media' ? 'block' : 'none'}}
                                                                     id="media">
                                                                    <div className="row">
                                                                        <div className="rv-hd">
                                                                            <div>
                                                                                <h3>Videos & Photos of</h3>
                                                                                <h2>Skyfall: Quantum of Spectre</h2>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-hd-sm">
                                                                            <h4>Videos <span>(8)</span></h4>
                                                                        </div>
                                                                        <div className="mvsingle-item media-item">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab review"
                                                                     style={{display: activeTab === 'moviesrelated' ? 'block' : 'none'}}
                                                                     id="moviesrelated">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Footer></Footer>
        </div>

    );
}

export default MovieDetail;