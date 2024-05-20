import React, {useEffect, useState} from 'react';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
const NewReleases = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const link1 = document.createElement("link");
        link1.rel = "stylesheet";
        link1.type = "text/css";
        link1.href = "assets/css/fix.css";

        document.head.appendChild(link1);
    }, []);

    useEffect(() => {
        let isMounted = true;

        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:80/movies/future');
                const data = await response.json();

                if (isMounted) {
                    if (data.status === 'OK') {
                        setMovies(data.data);
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

    if (loading) {
        return <div>Loading...</div>;
    }



    const carouselStyle = {
        display: 'flex',
        overflowX: 'scroll',
        scrollSnapType: 'x mandatory',

    };

    const itemStyle = {
        scrollSnapAlign: 'start',
        flex: '0 0 auto',
        width: '300px',
        marginRight: '20px',
        padding: '0',
        boxSizing: 'border-box',

    };

    const vhnyGridStyle = {
        position: 'relative',
    };

    // const box16Style = {
    //     position: 'relative',
    //     overflow: 'hidden',
    //     borderRadius: '8px',
    //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    // };

    const imgStyle = {
        width: '100%',
        height: 'auto',
        display: 'block',
    };

    const boxContentStyle = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        color: 'white',
        textAlign: 'left',
    };

    const h4Style = {
        margin: '0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const videoIconStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '24px',
        color: 'white',
    };
    const box16Style = {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px',
        margin: '0'
    };


    return (
        <div className="grids-main py-5">
            <div className="container py-lg-3">
                <div className="headerhny-title">
                    <div className="w3l-title-grids">
                        <div className="headerhny-left">
                            <h3 className="hny-title">Phim sắp chiếu</h3>
                        </div>
                        <div className="headerhny-right text-lg-right">
                            <h4><a className="show-title" href="movies.html">Show all</a></h4>
                        </div>
                    </div>
                </div>
                </div>
            <div className="newre">

                <OwlCarousel className="owl-three owl-carousel owl-theme" loop margin={1} nav>
                    {movies.map((movie) => (
                        <div key={movie.movieId} className="item vhny-grid"
                             style={{padding: '0', boxSizing: 'border-box', width: '250px', margin: '0'}}>
                            <div className="box16 mb-0" style={box16Style}>
                                <a href="movies.html">
                                    <figure style={{margin: '0'}}>
                                        <img className="img-fluid" src={movie.moviePoster} alt={movie.movieName}/>
                                    </figure>
                                    <div className="box-content" style={{margin: '0'}}>
                                        <h4 style={{margin: '0'}}>
                  <span className="post">
                    <span className="fa fa-clock-o"> </span> {movie.movieLength}
                  </span>
                                            <span className="post fa fa-heart text-right"></span>
                                        </h4>
                                    </div>
                                    <span className="fa fa-play video-icon" aria-hidden="true"></span>
                                </a>
                            </div>
                            <h3 style={{margin: '0'}}>
                                <a className="title-gd" href="movies.html">{movie.movieName}</a>
                            </h3>
                            <p style={{margin: '0'}}>{movie.movieDescription ? movie.movieDescription.substring(0, 100) : ''}</p>
                            <div className="button-center text-center mt-4" style={{margin: '0'}}>
                                <a href={movie.movieTrailer} className="btn watch-button" target="_blank"
                                   rel="noopener noreferrer">Xem chi tiết</a>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>


    );
};
export default NewReleases;