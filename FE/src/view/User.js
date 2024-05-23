import Header from "./common/Header";
import Footer from "./common/Footer";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet";

export function User(){
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "assets/css/stylet.css";
        document.head.appendChild(link);

        const link2 = document.createElement("link");
        link2.rel = "stylesheet";
        link2.type = "text/css";
        link2.href = "assets/css/pluginst.css";
        document.head.appendChild(link2);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(link2);
        };
    }, []);
    return(
        <div>
            <title>Thông tin tài khoản</title>
            <Helmet></Helmet>
            <Header></Header>

            <div>
                <nav id="breadcrumbs" className="breadcrumbs">
                    <div className="container page-wrapper">
                        <div className="w3l-breadcrumbs">
                            <div className="buster-light">
                                <div className="hero user-hero">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="hero-ct">
                                                    <h1>Thông tin cá nhân</h1>
                                                    <ul className="breadcumb">
                                                        <li className="active"><a href="#">Trang chủ</a></li>
                                                        <li><span className="ion-ios-arrow-right"></span>Thông tin cá
                                                            nhân
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-single">
                                    <div className="container">
                                        <div className="row ipad-width">
                                            <div className="col-md-3 col-sm-12 col-xs-12">
                                                <div className="user-information">
                                                    <div className="user-img">
                                                        <a href="#"><img src="/assets/images/user-img.png" alt=""/><br/></a>
                                                        <a href="#" className="redbtn" style={{color: "white"}}>Thay đổi
                                                            ảnh đại diện</a>
                                                    </div>
                                                    <div className="user-fav">
                                                        <p>Thông tin chung</p>
                                                        <ul>
                                                            <ul>
                                                                <li className={activeTab === 'profile' ? 'active' : ''}>
                                                                    <a href="#profile"
                                                                       onClick={() => handleTabClick('profile')}>Thông
                                                                        tin khách hàng</a>
                                                                </li>
                                                                <li className={activeTab === 'favorite' ? 'active' : ''}>
                                                                    <a href="#favorite"
                                                                       onClick={() => handleTabClick('favorite')}>Vé đã
                                                                        mua</a></li>
                                                                <li className={activeTab === 'rated' ? 'active' : ''}><a
                                                                    href="#rated"
                                                                    onClick={() => handleTabClick('rated')}>Rated
                                                                    movies</a></li>
                                                            </ul>
                                                        </ul>
                                                    </div>
                                                    <div className="user-fav">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-sign-out"></i> Đăng xuất</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {activeTab === 'profile' && (
                                                <div className="col-md-9 col-sm-12 col-xs-12">
                                                    <div className="form-style-1 user-pro" action="#">
                                                        <form action="#" className="user">
                                                            <h4>01. Profile details</h4>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Username</label>
                                                                    <input type="text" placeholder="edwardkennedy"/>
                                                                </div>
                                                                <div className="col-md-6 form-it">
                                                                    <label>Email Address</label>
                                                                    <input type="text"
                                                                           placeholder="edward@kennedy.com"/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>First Name</label>
                                                                    <input type="text" placeholder="Edward "/>
                                                                </div>
                                                                <div className="col-md-6 form-it">
                                                                    <label>Last Name</label>
                                                                    <input type="text" placeholder="Kennedy"/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Country</label>
                                                                    <select>
                                                                        <option value="united">United States</option>
                                                                        <option value="saab">Others</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-6 form-it">
                                                                    <label>State</label>
                                                                    <select>
                                                                        <option value="united">New York</option>
                                                                        <option value="saab">Others</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <input className="submit" type="submit"
                                                                           value="save"/>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <form action="#" className="password">
                                                            <h4>02. Change password</h4>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Old Password</label>
                                                                    <input type="text" placeholder="**********"/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>New Password</label>
                                                                    <input type="text" placeholder="***************"/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Confirm New Password</label>
                                                                    <input type="text" placeholder="*************** "/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <input className="submit" type="submit"
                                                                           value="change"/>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'favorite' && (
                                                <div className="col-md-9 col-sm-12 col-xs-12">
                                                    <div className="topbar-filter user">
                                                        <p>Found <span>1,608 movies</span> in total</p>
                                                        <label>Sort by:</label>
                                                        <select>
                                                            <option value="range">-- Choose option --</option>
                                                            <option value="saab">-- Choose option 2--</option>
                                                        </select>
                                                        <a href="userfavoritelist.html" className="list"><i
                                                            className="ion-ios-list-outline active"></i></a>
                                                        <a href="userfavoritegrid.html" className="grid"><i
                                                            className="ion-grid "></i></a>
                                                    </div>
                                                    <div className="flex-wrap-movielist user-fav-list">
                                                        <div className="movie-item-style-2">
                                                            <img src="/assets/images/n5.jpg" alt=""/>
                                                            <div className="mv-item-infor">
                                                                <h6><a href="#">oblivion <span>(2012)</span></a></h6>
                                                                <p className="rate"><i
                                                                    className="ion-android-star"></i><span>8.1</span> /10
                                                                </p>
                                                                <p className="describe">Earth's mightiest heroes must
                                                                    come
                                                                    together and learn to fight as a team if they are to
                                                                    stop the mischievous Loki and his alien army from
                                                                    enslaving humanity...</p>
                                                                <p className="run-time"> Run Time: 2h21’
                                                                    . <span>MMPA: PG-13 </span> . <span>Release: 1 May 2015</span>
                                                                </p>
                                                                <p>Director: <a href="#">Joss Whedon</a></p>
                                                                <p>Stars: <a href="#">Robert Downey Jr.,</a> <a
                                                                    href="#">Chris
                                                                    Evans,</a> <a href="#"> Chris Hemsworth</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="movie-item-style-2">
                                                            <img src="/assets/images/n5.jpg" alt=""/>
                                                            <div className="mv-item-infor">
                                                                <h6><a href="#">into the wild <span>(2014)</span></a>
                                                                </h6>
                                                                <p className="rate"><i
                                                                    className="ion-android-star"></i><span>7.8</span> /10
                                                                </p>
                                                                <p className="describe">As Steve Rogers struggles to
                                                                    embrace
                                                                    his role in the modern world, he teams up with a
                                                                    fellow
                                                                    Avenger and S.H.I.E.L.D agent, Black Widow, to
                                                                    battle a
                                                                    new threat...</p>
                                                                <p className="run-time"> Run Time: 2h21’
                                                                    . <span>MMPA: PG-13 </span> . <span>Release: 1 May 2015</span>
                                                                </p>
                                                                <p>Director: <a href="#">Anthony Russo,</a><a href="#">Joe
                                                                    Russo</a></p>
                                                                <p>Stars: <a href="#">Chris Evans,</a> <a href="#">Samuel
                                                                    L.
                                                                    Jackson,</a> <a href="#"> Scarlett Johansson</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="movie-item-style-2">
                                                            <img src="/assets/images/n5.jpg" alt=""/>
                                                            <div className="mv-item-infor">
                                                                <h6><a href="#">blade runner <span>(2015)</span></a>
                                                                </h6>
                                                                <p className="rate"><i
                                                                    className="ion-android-star"></i><span>7.3</span> /10
                                                                </p>
                                                                <p className="describe">Armed with a super-suit with the
                                                                    astonishing ability to shrink in scale but increase
                                                                    in
                                                                    strength, cat burglar Scott Lang must embrace his
                                                                    inner
                                                                    hero and help...</p>
                                                                <p className="run-time"> Run Time: 2h21’
                                                                    . <span>MMPA: PG-13 </span> . <span>Release: 1 May 2015</span>
                                                                </p>
                                                                <p>Director: <a href="#">Peyton Reed</a></p>
                                                                <p>Stars: <a href="#">Paul Rudd,</a> <a
                                                                    href="#"> Michael
                                                                    Douglas</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="movie-item-style-2">
                                                            <img src="/assets/images/n5.jpg" alt=""/>
                                                            <div className="mv-item-infor">
                                                                <h6><a href="#">Mulholland
                                                                    pride<span> (2013)  </span></a>
                                                                </h6>
                                                                <p className="rate"><i
                                                                    className="ion-android-star"></i><span>7.2</span> /10
                                                                </p>
                                                                <p className="describe">When Tony Stark's world is torn
                                                                    apart by a formidable terrorist called the Mandarin,
                                                                    he
                                                                    starts an odyssey of rebuilding and retribution.</p>
                                                                <p className="run-time"> Run Time: 2h21’
                                                                    . <span>MMPA: PG-13 </span> . <span>Release: 1 May 2015</span>
                                                                </p>
                                                                <p>Director: <a href="#">Shane Black</a></p>
                                                                <p>Stars: <a href="#">Robert Downey Jr., </a> <a
                                                                    href="#"> Guy Pearce,</a><a href="#">Don Cheadle</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="movie-item-style-2">
                                                            <img src="/assets/images/n5.jpg" alt=""/>
                                                            <div className="mv-item-infor">
                                                                <h6><a href="#">skyfall: evil of
                                                                    boss<span> (2013)  </span></a>
                                                                </h6>
                                                                <p className="rate"><i
                                                                    className="ion-android-star"></i><span>7.0</span> /10
                                                                </p>
                                                                <p className="describe">When Tony Stark's world is torn
                                                                    apart by a formidable terrorist called the Mandarin,
                                                                    he
                                                                    starts an odyssey of rebuilding and retribution.</p>
                                                                <p className="run-time"> Run Time: 2h21’
                                                                    . <span>MMPA: PG-13 </span> . <span>Release: 1 May 2015</span>
                                                                </p>
                                                                <p>Director: <a href="#">Alan Taylor</a></p>
                                                                <p>Stars: <a href="#">Chris Hemsworth, </a> <a
                                                                    href="#"> Natalie Portman,</a><a href="#">Tom
                                                                    Hiddleston</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="topbar-filter">
                                                        <label>Movies per page:</label>
                                                        <select>
                                                            <option value="range">5 Movies</option>
                                                            <option value="saab">10 Movies</option>
                                                        </select>

                                                        <div className="pagination2">
                                                            <span>Page 1 of 2:</span>
                                                            <a className="active" href="#">1</a>
                                                            <a href="#">2</a>
                                                            <a href="#">3</a>
                                                            <a href="#">...</a>
                                                            <a href="#">78</a>
                                                            <a href="#">79</a>
                                                            <a href="#"><i className="ion-arrow-right-b"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

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

export default User;