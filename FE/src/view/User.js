import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./common/Header";
import Footer from "./common/Footer";
import axios from 'axios';

export function User(){
    const [activeTab, setActiveTab] = useState('profile');
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userFullname, setUserFullname] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false    );
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const userInfoString = sessionStorage.getItem('userInfo');
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

    const token = sessionStorage.getItem('token');


    useEffect(() => {
        if (userInfo) {
            setUsername(userInfo.data.username);
            setUserEmail(userInfo.data.userEmail);
            setUserFullname(userInfo.data.userFullname);
            setUserPhone(userInfo.data.userPhone);
        }
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

    const handleUpdateUserInfo = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        const updatedUserInfo = {
            username: username,
            userEmail: userEmail,
            userFullname: userFullname,
            userPhone: userPhone,
        };

        try {
            const response = await fetch('http://localhost:80/user/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(updatedUserInfo),
            });

            if (response.ok) {
                const updatedData = await response.json();
                sessionStorage.setItem('userInfo', JSON.stringify(updatedData));
                alert('Thông tin tài khoản đã được cập nhật');
                // window.location.reload();
            } else {
                alert('Cập nhật thông tin thất bại');
            }
        } catch (error) {
            console.error('Error updating user info:', error);
            alert('Đã xảy ra lỗi khi cập nhật thông tin');
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Mật khẩu mới và xác nhận mật khẩu không khớp');
            return;
        }

        const passwordData = {
            oldPassword,
            newPassword,
        };

        try {
            const response = await fetch('http://localhost:80/user/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(passwordData),
            });

            if (response.ok) {
                alert('Mật khẩu đã được thay đổi thành công');
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
            } else {
                alert('Đổi mật khẩu thất bại');
            }
        } catch (error) {
            console.error('Error changing password:', error);
            alert('Đã xảy ra lỗi khi đổi mật khẩu');
        }
    };

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
                                                        <form className="user" onSubmit={handleUpdateUserInfo}>
                                                            <h4>Thông tin tài khoản</h4>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Tên người dùng</label>
                                                                    <input type="text" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)} />
                                                                </div>
                                                                <div className="col-md-6 form-it">
                                                                    <label>Địa chỉ email</label>
                                                                    <input type="text" placeholder="" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Tên</label>
                                                                    <input type="text" placeholder="" value={userFullname} onChange={(e) => setUserFullname(e.target.value)} />
                                                                </div>
                                                                <div className="col-md-6 form-it">
                                                                    <label>Họ</label>
                                                                    <input type="text" placeholder="" value={userFullname} onChange={(e) => setUserFullname(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Số điện thoại</label>
                                                                    <input type="text" placeholder="" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <input className="submit" type="submit" value="Lưu"/>
                                                                    {/*{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}*/}
                                                                    {/*{successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}*/}
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <form className="password" onSubmit={handleChangePassword}>
                                                            <h4>Đổi mật khẩu</h4>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Mật khẩu cũ</label>
                                                                    <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Mật khẩu mới </label>
                                                                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 form-it">
                                                                    <label>Xác nhận mật khẩu</label>
                                                                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <input className="submit" type="submit" value="Lưu" />
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