import React, { useState } from 'react';
import Header from './common/Header';
import './utils.js';
import SeatSelector from "./common/Booking/SeatSelector"; // Import file func.js

export function Booking() {
    const [prevId, setPrevId] = useState("1");
    const [isScreenNextBtnDisabled, setScreenNextBtnDisabled] = useState(true);

    // Chạy khi trang được load
    window.onload = () => {
        document.getElementById("screen-next-btn").disabled = true;
    };

    // Hàm thay đổi trạng thái sau một khoảng thời gian
    function timeFunction() {
        document.getElementById("screen-next-btn").disabled = false;
    }

    // Hàm xử lý khi click vào một phần tử
    function myFunction(id) {
        document.getElementById(prevId).style.background = "rgb(243, 235, 235)";
        document.getElementById(id).style.background = "#df0e62";
        setPrevId(id);
    }

    const containerStyle = {
        boxShadow: "0 14px 12px 0 var(--theme-border), 0 10px 50px 0 var(--theme-border)",
        width: "800px",
        height: "550px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    };

    return (
        <div>
            <Header></Header>
            <div className="container" id="progress-container-id">
                <div className="row">
                    <div className="col">
                        <div className="px-0 pt-4 pb-0 mt-3 mb-3">
                            <form id="form">
                                <ul id="progressbar" className="progressbar-class">
                                    <li className="active" id="step1">Show timing selection</li>
                                    <li id="step2" className="not_active">Seat Selection</li>
                                    <li id="step3" className="not_active">Payment</li>
                                    <li id="step4" className="not_active">E-Ticket</li>
                                </ul>
                                <br/>
                                <fieldset>
                                    <div id="screen-select-div">
                                        <h2>Show time Selection</h2>
                                        <div className="carousel carousel-nav"
                                             data-flickity='{"contain": true, "pageDots": false }'>
                                            <div className="carousel-cell" id="1"  onClick={() => myFunction(1)}>
                                                <div className="date-numeric">13</div>
                                                <div className="date-day">Today</div>
                                            </div>

                                            <div className="carousel-cell" id="2"  onClick={() => myFunction(2)}>
                                                <div className="date-numeric">14</div>
                                                <div className="date-day">Tomorrow</div>
                                            </div>
                                            <div className="carousel-cell" id="3"  onClick={() => myFunction(3)}>
                                                <div className="date-numeric">15</div>
                                                <div className="date-day">Monday</div>
                                            </div>
                                            <div className="carousel-cell" id="4"  onClick={() => myFunction(4)}>
                                                <div className="date-numeric">16</div>
                                                <div className="date-day">Tuesday</div>
                                            </div>
                                            <div className="carousel-cell" id="5"  onClick={() => myFunction(5)}>
                                                <div className="date-numeric">17</div>
                                                <div className="date-day">Wednesday</div>
                                            </div>
                                            <div className="carousel-cell" id="6"  onClick={() => myFunction(6)}>
                                                <div className="date-numeric">18</div>
                                                <div className="date-day">Thursday</div>
                                            </div>
                                            <div className="carousel-cell" id="7"  onClick={() => myFunction(7)}>
                                                <div className="date-numeric">19</div>
                                                <div className="date-day">Friday</div>
                                            </div>
                                        </div>
                                        <ul className="time-ul">
                                            <li className="time-li">
                                                <div className="screens">
                                                    Screen 1
                                                </div>
                                                <div className="time-btn">
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        1:05 PM
                                                    </button>
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        4:00 PM
                                                    </button>
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        9:00 PM
                                                    </button>
                                                </div>
                                            </li>
                                            <li className="time-li">
                                                <div className="screens">
                                                    Screen 2
                                                </div>
                                                <div className="time-btn">
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        3:00 PM
                                                    </button>
                                                </div>
                                            </li>
                                            <li className="time-li">
                                                <div className="screens">
                                                    Screen 3
                                                </div>
                                                <div className="time-btn">
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        9:05 AM
                                                    </button>
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        10:00 PM
                                                    </button>
                                                </div>
                                            </li>
                                            <li className="time-li">
                                                <div className="screens">
                                                    Screen 4
                                                </div>
                                                <div className="time-btn">
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        9:05 AM
                                                    </button>
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        11:00 AM
                                                    </button>
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        3:00 PM
                                                    </button>
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        7:00 PM
                                                    </button>
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        10:00 PM
                                                    </button>
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        11:00 PM
                                                    </button>
                                                </div>
                                            </li>
                                            <li className="time-li">
                                                <div className="screens">
                                                    Screen 5
                                                </div>
                                                <div className="time-btn">
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        9:05 AM
                                                    </button>
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        12:00 PM
                                                    </button>
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        1:00 PM
                                                    </button>
                                                    <button className="screen-time" onClick={timeFunction}>
                                                        3:00 PM
                                                    </button>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    <input id="screen-next-btn" type="button" name="next-step" className="next-step"
                                           value="Continue Booking"
                                           disabled/>
                                </fieldset>
                                <fieldset>
                                    <div>
                                        <SeatSelector></SeatSelector>
                                    </div>
                                    <br/>
                                    <input type="button" name="next-step" className="next-step"
                                           value="Proceed to Payment"/>
                                    <input type="button" name="previous-step" className="previous-step" value="Back"/>
                                </fieldset>
                                <fieldset>

                                    <div id="payment_div">
                                        <div className="payment-row">
                                            <div className="col-75">
                                                <div className="payment-container">
                                                    <div className="payment-row">
                                                        <div className="col-50">
                                                            <h3 id="payment-h3">Payment</h3>
                                                            <div className="payment-row payment">
                                                                <div className="col-50 payment">
                                                                    <label htmlFor="card" className="method card">
                                                                        <div className="icon-container">
                                                                            <i className="fa fa-cc-visa"
                                                                               style={{color: "navy"}}></i>
                                                                            <i className="fa fa-cc-amex"
                                                                               style={{color: "blue"}}></i>
                                                                            <i className="fa fa-cc-mastercard"
                                                                               style={{color: "red"}}></i>
                                                                            <i className="fa fa-cc-discover"
                                                                               style={{color: "orange"}}></i>
                                                                        </div>
                                                                        <div className="radio-input">
                                                                            <input type="radio" id="card"/>
                                                                            Pay RS.200.00 with credit card
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="col-50 payment">
                                                                    <label htmlFor="paypal" className="method paypal">
                                                                    <div className="icon-container">
                                                                            <i className="fa fa-paypal"
                                                                               style={{color: "navy"}}></i>
                                                                        </div>
                                                                        <div className="radio-input">
                                                                            <input id="paypal" type="radio" checked/>
                                                                            Pay $30.00 with PayPal
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>

                                                            <div className="payment-row">
                                                                <div className="col-50">
                                                                    <label htmlFor="cname">Cardholder's Name</label>
                                                                    <input type="text" id="cname" name="cardname"
                                                                           placeholder="Firstname Lastname" required/>
                                                                </div>
                                                                <div className="col-50">
                                                                    <label htmlFor="ccnum">Credit card number</label>
                                                                    <input type="text" id="ccnum" name="cardnumber"
                                                                           placeholder="xxxx-xxxx-xxxx-xxxx"
                                                                           required/>
                                                                </div>
                                                            </div>
                                                            <div className="payment-row">
                                                                <div className="col-50">
                                                                    <label htmlFor="expmonth">Exp Month</label>
                                                                    <input type="text" id="expmonth" name="expmonth"
                                                                           placeholder="September" required/>
                                                                </div>
                                                                <div className="col-50">
                                                                    <div className="payment-row">
                                                                        <div className="col-50">
                                                                            <label htmlFor="expyear">Exp Year</label>
                                                                            <input type="text" id="expyear"
                                                                                   name="expyear" placeholder="yyyy"
                                                                                   required/>
                                                                        </div>
                                                                        <div className="col-50">
                                                                            <label htmlFor="cvv">CVV</label>
                                                                            <input type="text" id="cvv" name="cvv"
                                                                                   placeholder="xxx" required/>
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
                                    <input type="button" name="next-step" className="next-step pay-btn"
                                           value="Confirm Payment"/>
                                    <input type="button" name="previous-step" className="cancel-pay-btn"
                                           value="Cancel Payment"
                                           onClick="location.href='index.html';"/>
                                </fieldset>
                                <fieldset>
                                    <h2>E-Ticket</h2>
                                    <div className="ticket-body">
                                        <div className="ticket">
                                            <div className="holes-top"></div>
                                            <div className="title">
                                                <p className="cinema">MyShowz Entertainment</p>
                                                <p className="movie-title">Movie Name</p>
                                            </div>
                                            <div className="poster">
                                                <img
                                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25240/only-god-forgives.jpg"
                                                    alt="Movie: Only God Forgives"/>
                                            </div>
                                            <div className="info">
                                                <table className="info-table ticket-table">
                                                    <tr>
                                                        <th>SCREEN</th>
                                                        <th>ROW</th>
                                                        <th>SEAT</th>
                                                    </tr>
                                                    <tr>
                                                        <td className="bigger">18</td>
                                                        <td className="bigger">H</td>
                                                        <td className="bigger">24</td>
                                                    </tr>
                                                </table>
                                                <table className="info-table ticket-table">
                                                    <tr>
                                                        <th>PRICE</th>
                                                        <th>DATE</th>
                                                        <th>TIME</th>
                                                    </tr>
                                                    <tr>
                                                        <td>RS.12.00</td>
                                                        <td>4/13/21</td>
                                                        <td>19:30</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className="holes-lower"></div>
                                            <div className="serial">
                                                <table className="barcode ticket-table">
                                                    <tr>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                        <td style={{backgroundColor: "black"}}></td>
                                                        <td style={{backgroundColor: "white"}}></td>
                                                    </tr>
                                                </table>
                                                <table className="numbers ticket-table">
                                                    <tr>
                                                        <td>9</td>
                                                        <td>1</td>
                                                        <td>7</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>5</td>
                                                        <td>4</td>
                                                        <td>4</td>
                                                        <td>4</td>
                                                        <td>5</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>7</td>
                                                        <td>8</td>
                                                        <td>7</td>
                                                        <td>3</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="button" name="previous-step" className="home-page-btn"
                                           value="Browse to Home Page"
                                           src={"www.google.com.vn"}/>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Booking