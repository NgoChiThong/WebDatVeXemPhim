import React, {useEffect, useState} from "react";
import Header from "./common/Header";
import {loadScript} from "./utils";

export function SignIn(){
    const [successMessage, setSuccessMessage] = useState('');
    useEffect(() => {

        const links = [
            { rel: "stylesheet", type: "text/css", href: "assets/css/as-alert-message.min.css" },
            { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" },
            { rel: "stylesheet", type: "text/css", href: "assets/css/style-starter.css" },
            { rel: "stylesheet", type: "text/css", href: "assets/css/sign-in.css" },
            { rel: "script", type: "text/javascript", href: "assets/js/as-alert-message.min.js" }, // Thêm dòng này
        ];
        links.forEach((link) => {
            const element = document.createElement(link.rel === "script" ? "script" : "link");
            if (link.rel === "script") {
                element.src = link.href;
            } else {
                element.rel = link.rel;
                element.type = link.type;
                element.href = link.href;
            }
            document.head.appendChild(element);
        });
        const loadAssets = async () => {
            await loadScript('../assets/js/as-alert-message.min.js');
            const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('container_signup_signin');
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        };
        loadAssets();


    }, []);
    function signUpValidateForm(event) {
        event.preventDefault();
        var x = document.forms["sign-up-form"]["sign-up-name"].value;
        if (x === "") {
            showErrorMessage("Empty Field", "'Name' can not be empty!!");
            return false;
        }
        x = document.forms["sign-up-form"]["sign-up-email"].value;
        if (x === "") {
            showErrorMessage("Empty Field", "'E-mail' can not be empty!!");
            return false;
        }
        x = document.forms["sign-up-form"]["sign-up-passwd"].value;
        if (x === "") {
            showErrorMessage("Empty Field", "'Password' can not be empty!!");
            return false;
        }
    }
    function showErrorMessage(title, message) {
        alert(`${title}: ${message}`);
    }

    function signInValidateForm(event) {
        event.preventDefault();
        const email = document.forms["sign-in-form"]["sign-in-email"].value;
        const password = document.forms["sign-in-form"]["sign-in-passwd"].value;
        let isValid = true;

        if (email === "") {
            showErrorMessage("Empty Field", "E-mail không thể để trống!!");
            isValid = false;
        }

        if (isValid && password === "") {
            // Kiểm tra chỉ khi email được nhập và password không được nhập
            showErrorMessage("Empty Field", "Password không thể để trống!!");
            isValid = false;
        }

        if (isValid) {
            setSuccessMessage(`Sign-in successful! Email: ${email}, Password: ${password}`);
            console.log(successMessage);

            // Thêm logic xử lý đăng nhập ở đây, ví dụ: gọi API đăng nhập

            return true;
        }

        return false;
    }
    const css = `
/* CSS cho các thiết bị di động */
@media only screen and (max-width: 400px) {
    .form-container {
        width: 90%;
        padding: 10px;
        box-sizing: border-box;
    }

    .social-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 10px;
    }

    .social-container .social {
        font-size: 16px;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    button {
        width: 90%;
        margin-bottom: 8px;
    }

    a {
        text-align: center;
        margin-bottom: 8px;
    }
}


    `;




    return (
        <div>
            <title>Đăng nhập - Đăng ký</title>
            <style>{css}</style>
            <Header></Header>
            <div className="container_signup_signin" id="container_signup_signin">
                <div className="form-container sign-up-container">
                    <form name="sign-up-form" action="#" onSubmit={signUpValidateForm}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="https://www.facebook.com/" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.facebook.com/" className="social"><i
                                className="fab fa-google-plus-g"></i></a>
                            <a href="https://www.google.com/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input name="sign-up-name" type="text" placeholder="Name"/>
                        <input name="sign-up-email" type="email" placeholder="Email"/>
                        <input name="sign-up-passwd" type="password" placeholder="Password"/>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form
                        name="sign-in-form"
                        style={{color: 'var(--theme-title)'}}
                        action="#"
                        onSubmit={signInValidateForm}
                    >
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="https://www.google.com/" className="social"
                               style={{color: 'var(--theme-title)'}}><i
                                className="fab fa-facebook-f"></i></a>
                            <a href="https://www.google.com/" className="social"
                               style={{color: 'var(--theme-title)'}}><i
                                className="fab fa-google-plus-g"></i></a>
                            <a href="https://www.google.com/" className="social"
                               style={{color: 'var(--theme-title)'}}><i
                                className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input name="sign-in-email" type="email" placeholder="Email"/>
                        <input name="sign-in-passwd" type="password" placeholder="Password"/>
                        <a href="https://www.google.com/">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your login details</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register and book your tickets now!!!</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;