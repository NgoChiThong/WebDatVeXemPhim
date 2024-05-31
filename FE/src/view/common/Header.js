import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";

export function Header() {
    const userInfoString = sessionStorage.getItem('userInfo');
    const destination = userInfoString === null ? '/signin' : '/user';

    const loginStyle = {
        fontSize: '2rem',
        display: 'inline-block',
        position: 'relative'
    };
    useEffect(() => {
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            switchTextColor(currentTheme);
            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }

        function switchTextColor(currTheme) {
            const elementsToColor = [
                "swiper-container-h1",
                "details-h3-1",
                "details-h3-2",
                "details-h3-3",
                "details-h3-4",
                "details-h3-5",
                "details-h3-6"
            ];

            elementsToColor.forEach(elementId => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.style.color = currTheme === 'light' ? 'black' : 'white';
                }
            });
        }

        function switchTheme() {
            if (toggleSwitch.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                switchTextColor('dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                switchTextColor('light');
            }
        }

        toggleSwitch.addEventListener('change', switchTheme, false);

        return () => {
            toggleSwitch.removeEventListener('change', switchTheme, false);
        };
    }, []);

    return (
        <div>
            <header id="site-header" className="w3l-header fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
                    <div className="container">
                        <h1><Link to={'/'}><a className="navbar-brand"><span className="fa fa-play icon-log"
                                                                             aria-hidden="true"></span>
                            MyShowz</a></Link></h1>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="fa icon-expand fa-bars"></span>
                            <span className="fa icon-close fa-times"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink exact to="/" activeClassName="active" className="nav-link">
                                        Trang chủ
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/movies" activeClassName="active" className="nav-link">
                                        Phim
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" activeClassName="active" className="nav-link">
                                        Giới thiệu
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" activeClassName="active" className="nav-link">
                                        Liên hệ
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="search-right">
                                <a href="#search" className="btn search-hny mr-lg-3 mt-lg-0 mt-4"
                                   title="search">Tìm kiếm <span
                                    className="fa fa-search ml-3" aria-hidden="true"></span></a>
                                <div id="search" className="pop-overlay">
                                    <div className="popup">
                                        <form action="#" method="post" className="search-box">
                                            <input type="search" placeholder="Search your Keyword" name="search"
                                                   required="required" autoFocus=""/>
                                            <button type="submit" className="btn"><span className="fa fa-search"
                                                                                        aria-hidden="true"></span>
                                            </button>
                                        </form>
                                        <div className="browse-items">
                                            <h3 className="hny-title two mt-md-5 mt-4">Browse all:</h3>
                                            <ul className="search-items">
                                                <li><a href="movies.html">Action</a></li>
                                                <li><a href="movies.html">Drama</a></li>
                                                <li><a href="movies.html">Family</a></li>
                                                <li><a href="movies.html">Thriller</a></li>
                                                <li><a href="movies.html">Commedy</a></li>
                                                <li><a href="movies.html">Romantic</a></li>
                                                <li><a href="movies.html">Tv-Series</a></li>
                                                <li><a href="movies.html">Horror</a></li>
                                                <li><a href="movies.html">Action</a></li>
                                                <li><a href="movies.html">Drama</a></li>
                                                <li><a href="movies.html">Family</a></li>
                                                <li><a href="movies.html">Thriller</a></li>
                                                <li><a href="movies.html">Commedy</a></li>
                                                <li><a href="movies.html">Romantic</a></li>
                                                <li><a href="movies.html">Tv-Series</a></li>
                                                <li><a href="movies.html">Horror</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="close" href="#close">×</a>
                                </div>
                            </div>
                            <div className="Login_SignUp" id="login" style={loginStyle}>
                                <Link to={destination}>
                                    <a className="nav-link"><i className="fa fa-user-circle-o"></i></a>
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-position">
                            <nav className="navigation">
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch" htmlFor="checkbox">
                                        <input type="checkbox" id="checkbox"/>
                                        <div className="mode-container">
                                            <i className="gg-sun"></i>
                                            <i className="gg-moon"></i>
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;
