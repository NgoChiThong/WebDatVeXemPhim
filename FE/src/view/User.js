import React, { useEffect, useState } from "react";
import {Link, useHistory, useNavigate} from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./common/Header";
import Footer from "./common/Footer";

export function User(){
    const [activeTab, setActiveTab] = useState('profile');
    const navigate = useNavigate();  // Using useNavigate hook for navigation

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const userInfoString = sessionStorage.getItem('userInfo');
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    console.log("userInfo", userInfo);

    const token = sessionStorage.getItem('token');
    console.log(token);

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "/assets/css/style.css";
        document.head.appendChild(link);

        const link2 = document.createElement("link");
        link2.rel = "stylesheet";
        link2.type = "text/css";
        link2.href = "/assets/css/plugins.css";
        document.head.appendChild(link2);

        const link3 = document.createElement("link");
        link3.rel = "stylesheet";
        link3.type = "text/css";
        link3.href = "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,600&display=swap";
        document.head.appendChild(link3);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(link2);
        };
    }, []);
    //nút đăng xuất
    const handleLogout = () => {
        // Clear session storage
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userInfo');

        // Redirect to login page
        // Redirect to login page
        navigate('/signin');
    };

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
                                                                       onClick={() => handleTabClick('profile')}> Thông
                                                                        tin khách hàng</a>
                                                                </li>
                                                                <li className={activeTab === 'favorite' ? 'active' : ''}>
                                                                    <a href="#favorite"
                                                                       onClick={() => handleTabClick('favorite')}>Vé đã
                                                                        mua</a></li>
                                                                <li className={activeTab === 'rated' ? 'active' : ''}><a
                                                                    href="#rated"
                                                                    onClick={() => handleTabClick('rated')}>Phim yêu thích</a></li>
                                                            </ul>
                                                        </ul>
                                                    </div>
                                                    <div className="user-fav">
                                                        <ul>
                                                            <li><a href="#" onClick={handleLogout}><i className="fa fa-sign-out"></i> Đăng xuất</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {activeTab === 'profile' && (
                                                <div className="col-md-9 col-sm-12 col-xs-12">
                                                    <div className="form-style-1 user-pro" action="#">
                                                        <form action="#" className="user">
                                                            <h4>Thông tin tài khoản</h4>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Tên nguười dùng</label>
                                                                    <input type="text" placeholder="edwardkennedy"/>
                                                                </div>
                                                                <div className="col-md-6 form-it">
                                                                    <label>Địa chỉ email</label>
                                                                    <input type="text"
                                                                           placeholder="edward@kennedy.com"/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Tên</label>
                                                                    <input type="text" placeholder="Edward "/>
                                                                </div>
                                                                <div className="col-md-6 form-it">
                                                                    <label>Họ</label>
                                                                    <input type="text" placeholder="Kennedy"/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Số điện thoại</label>
                                                                    <input type="text" placeholder="0899123456"/>
                                                                </div>

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <input className="submit" type="submit"
                                                                           value="Lưu"/>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <form action="#" className="password">
                                                            <h4>Đổi mật khẩu</h4>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Mật khẩu cũ</label>
                                                                    <input type="password"/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Mật khẩu mới </label>
                                                                    <input type="password" />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Xác nhận mật khẩu</label>
                                                                    <input type="password" />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <input className="submit" type="submit"
                                                                           value="Lưu"/>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'favorite' && (
                                                <div className="col-md-9 col-sm-12 col-xs-12">
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