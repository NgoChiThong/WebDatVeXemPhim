import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import PopularMoive from "./common/Movie/PopularMoive";
import LatestMovie from "./common/Movie/LatestMovie";
import HorizontalTab from "./common/Movie/HorizontalTab";

export function Movie(props){
    return(
        <div>
            <title>Movie</title>
            <Header></Header>
            {/*Popular Movies*/}
            <div className="w3l-breadcrumbs">
                <nav id="breadcrumbs" className="breadcrumbs">
                    <div className="container page-wrapper">
                        <a href="index.html">Home</a> » <span className="breadcrumb_last"
                                                              aria-current="page">movies</span>
                    </div>
                </nav>
            </div>
            <PopularMoive></PopularMoive>
            <LatestMovie></LatestMovie>
            <HorizontalTab></HorizontalTab>
            <Footer></Footer>
        </div>
    );
}

export default Movie;