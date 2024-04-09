import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import BannerSlider from './common/Home/BannerSlider';
import NewReleases from "./common/Home/NewReleases";
import WatchTrailer from "./common/Home/WatchTrailer";
export function Home(props){
    return(
        <div>
            <title>Home</title>
            <Header></Header>
            <div>
                <section class="w3l-main-slider position-relative" id="home">
                    <div class="companies20-content">
                        <BannerSlider />

                    </div>
                </section>


                <section class="w3l-grids">
                    <div class="grids-main py-5">
                        <div class="container py-lg-3">
                            <div class="headerhny-title">
                                <div class="w3l-title-grids">
                                    <div class="headerhny-left">
                                        <h3 class="hny-title">Popular Movies</h3>
                                    </div>
                                    <div class="headerhny-right text-lg-right">
                                        <h4><a class="show-title" href="movies.html">Show all</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="w3l-populohny-grids">
                                <div class="item vhny-grid">
                                    <div class="box16">
                                        <a href="movies.html">
                                            <figure>
                                                <img class="img-fluid" src="../assets/images/n1.jpg" alt=""></img>
                                            </figure>
                                            <div class="box-content">
                                                <h3 class="title">A Wednesday</h3>
                                                <h4> <span class="post"><span class="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

                                                    <span class="post fa fa-heart text-right"></span>
                                                </h4>
                                            </div>
                                            <span class="fa fa-play video-icon" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </div>
                                <div class="item vhny-grid">
                                    <div class="box16">
                                        <a href="movies.html">
                                            <figure>
                                                <img class="img-fluid" src="../assets/images/n2.jpg" alt=""></img>
                                            </figure>
                                            <div class="box-content">
                                                <h3 class="title">Commando-3</h3>
                                                <h4> <span class="post"><span class="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

                                                    <span class="post fa fa-heart text-right"></span>
                                                </h4>
                                            </div>
                                            <span class="fa fa-play video-icon" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </div>
                                <div class="item vhny-grid">
                                    <div class="box16">
                                        <a href="movies.html">
                                            <figure>
                                                <img class="img-fluid" src="../assets/images/n3.jpg" alt=""></img>
                                            </figure>
                                            <div class="box-content">
                                                <h3 class="title">Gujjubhai Most Wanted</h3>
                                                <h4> <span class="post"><span class="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

                                                    <span class="post fa fa-heart text-right"></span>
                                                </h4>
                                            </div>
                                            <span class="fa fa-play video-icon" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </div>
                                <div class="item vhny-grid">
                                    <div class="box16">
                                        <a href="movies.html">
                                            <figure>
                                                <img class="img-fluid" src="../assets/images/n4.jpg" alt=""></img>
                                            </figure>
                                            <div class="box-content">
                                                <h3 class="title">Avatar</h3>
                                                <h4> <span class="post"><span class="fa fa-clock-o"> </span> 1 Hr 4min

										</span>

                                                    <span class="post fa fa-heart text-right"></span>
                                                </h4>
                                            </div>
                                            <span class="fa fa-play video-icon" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="w3l-grids">
                        <NewReleases/>
                </section>

                <section class="w3l-mid-slider position-relative">
                  <WatchTrailer/>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home