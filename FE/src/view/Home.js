import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import BannerSlider from './common/Home/BannerSlider';
import NewReleases from "./common/Home/NewReleases";
import WatchTrailer from "./common/Home/WatchTrailer";
import {Link} from "react-router-dom";
export function Home(props){
    return(
        <div>
            <title>Trang chủ</title>
            <Header></Header>
            <div>
                <section className="w3l-main-slider position-relative" id="home">
                    <div className="companies20-content">
                        <BannerSlider />

                    </div>
                </section>


                <section className="w3l-grids">
                    <div className="grids-main py-5">
                        <div className="container py-lg-3">
                            <div className="headerhny-title">
                                <div className="w3l-title-grids">
                                    <div className="headerhny-left">
                                        <h3 className="hny-title">Popular Movies</h3>
                                    </div>
                                    <div className="headerhny-right text-lg-right">
                                        <h4><a className="show-title" href="#">Show all</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="w3l-populohny-grids">
                                <div className="item vhny-grid">
                                    <div className="box16">
                                        <Link to={'/detail'}>
                                        <a>
                                            <figure>
                                                <img className="img-fluid" src="../assets/images/n1.jpg" alt=""></img>
                                            </figure>
                                            <div className="box-content">
                                                <h3 className="title">A Wednesday</h3>
                                                <h4> <span className="post"><span className="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

                                                    <span className="post fa fa-heart text-right"></span>
                                                </h4>
                                            </div>
                                            <span className="fa fa-play video-icon" aria-hidden="true"></span>
                                        </a>
                                            </Link>
                                    </div>
                                </div>
                                <div className="item vhny-grid">
                                    <div className="box16">
                                        <a href="#">
                                            <figure>
                                                <img className="img-fluid" src="../assets/images/n2.jpg" alt=""></img>
                                            </figure>
                                            <div className="box-content">
                                                <h3 className="title">Commando-3</h3>
                                                <h4> <span className="post"><span className="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

                                                    <span className="post fa fa-heart text-right"></span>
                                                </h4>
                                            </div>
                                            <span className="fa fa-play video-icon" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="item vhny-grid">
                                    <div className="box16">
                                        <a href="#">
                                            <figure>
                                                <img className="img-fluid" src="../assets/images/n3.jpg" alt=""></img>
                                            </figure>
                                            <div className="box-content">
                                                <h3 className="title">Gujjubhai Most Wanted</h3>
                                                <h4> <span className="post"><span className="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

                                                    <span className="post fa fa-heart text-right"></span>
                                                </h4>
                                            </div>
                                            <span className="fa fa-play video-icon" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="item vhny-grid">
                                    <div className="box16">
                                        <a href="#">
                                            <figure>
                                                <img className="img-fluid" src="../assets/images/n4.jpg" alt=""></img>
                                            </figure>
                                            <div className="box-content">
                                                <h3 className="title">Avatar</h3>
                                                <h4> <span className="post"><span className="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

                                                    <span className="post fa fa-heart text-right"></span>
                                                </h4>
                                            </div>
                                            <span className="fa fa-play video-icon" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="w3l-grids">
                        <NewReleases/>
                </section>

                <section className="w3l-mid-slider position-relative">
                  <WatchTrailer/>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home