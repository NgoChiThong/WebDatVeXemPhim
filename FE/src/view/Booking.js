import React, {useEffect, useState} from 'react';
import Header from './common/Header';
import './utils.js';
import {Helmet} from "react-helmet";
import {useNavigate} from 'react-router-dom';
import {loadScript} from "./utils";

export function Booking() {
    const $ = window.$;
    const price = 110; // Giá vé
    const [prevId, setPrevId] = useState("1");
    const [isScreenNextBtnDisabled, setScreenNextBtnDisabled] = useState(true);
    useEffect(() => {
        const link1 = document.createElement("link");
        link1.rel = "stylesheet";
        link1.type = "text/css";
        link1.href = "assets/css/progress.css";

        const link2 = document.createElement("link");
        link2.rel = "stylesheet";
        link2.type = "text/css";
        link2.href = "assets/css/ticket-booking.css";

        const link3 = document.createElement("link");
        link3.rel = "stylesheet";
        link3.type = "text/css";
        link3.href = "assets/css/e-ticket.css";

        const link4 = document.createElement("link");
        link4.rel = "stylesheet";
        link4.type = "text/css";
        link4.href = "assets/css/payment.css";

        const link5 = document.createElement("link");
        link5.rel = "stylesheet";
        link5.type = "text/css";
        link5.href = "https://npmcdn.com/flickity@2/dist/flickity.css";

        const link6 = document.createElement("link");
        link6.rel = "stylesheet";
        link6.type = "text/css";
        link6.href = "https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700";

        const link7 = document.createElement("link");
        link7.rel = "stylesheet";
        link7.type = "text/css";
        link7.href = "seat_selection/css/style.css";

        const script1 = document.createElement("script");
        script1.src = "https://npmcdn.com/flickity@2/dist/flickity.pkgd.js";

        const script2 = document.createElement("script");
        script2.src = "assets/js/ticket-booking.js";

        const script3 = document.createElement("script");
        script3.src = "assets/js/jquery.seat-charts.js";


        const script4 = document.createElement("script");
        script4.src = "assets/js/jquery.seat-charts.js";


        document.head.appendChild(link1);
        document.head.appendChild(link2);
        document.head.appendChild(link3);
        document.head.appendChild(link4);
        document.head.appendChild(link5);
        document.head.appendChild(link6);
        document.head.appendChild(link7);
        document.body.appendChild(script1);
        document.body.appendChild(script2);
        document.body.appendChild(script3);
        document.body.appendChild(script4);


        const loadAssets = () => {
            return new Promise((resolve, reject) => {
                loadScript('../assets/js/jquery.seat-charts.js')
                    .then(() => {
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        };
        loadAssets()
            .then(() => {
                const $ = window.$;
                const price = 110; // Giá vé

                // const links = [
                //     { rel: "script", type: "text/javascript", href: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" },
                //     { rel: "stylesheet", type: "text/css", href: "seat_selection/css/style.css" },
                // ];

                // links.forEach((link) => {
                //     const element = document.createElement(link.rel === "script" ? "script" : "link");
                //     if (link.rel === "script") {
                //         element.src = link.href;
                //     } else {
                //         element.rel = link.rel;
                //         element.type = link.type;
                //         element.href = link.href;
                //     }
                //     document.head.appendChild(element);
                // });

                $(document).ready(function () {
                    var $cart = $('#selected-seats'); // Vùng chỗ ngồi đã chọn
                    var $counter = $('#counter'); // Số lượng vé đã chọn
                    var $total = $('#total'); // Tổng tiền

                    var sc = $('#seat-map').seatCharts({
                        map: [ // Bản đồ chỗ ngồi
                            'aaaaaaaaaa',
                            'aaaaaaaaaa',
                            '__________',
                            'aaaaaaaa__',
                            'aaaaaaaaaa',
                            'aaaaaaaaaa',
                            'aaaaaaaaaa',
                            'aaaaaaaaaa',
                            'aaaaaaaaaa',
                            '__aaaaaa__'
                        ],
                        naming: {
                            top: false,
                            getLabel: function (character, row, column) {
                                return column;
                            }
                        },
                        legend: { // Định nghĩa chú giải
                            node: $('#legend'),
                            items: [
                                ['a', 'available', 'Available'],
                                ['a', 'unavailable', 'Sold'],
                                ['a', 'selected', 'Selected']
                            ]
                        },
                        click: function () { // Sự kiện khi click vào chỗ ngồi
                            if (this.status() == 'available') { // Chỗ ngồi có thể chọn
                                $('<li>R-' + (this.settings.row + 1) + ' S-' + this.settings.label + '</li>')
                                    .attr('id', 'cart-item-' + this.settings.id)
                                    .data('seatId', this.settings.id)
                                    .appendTo($cart);

                                $counter.text(sc.find('selected').length + 1);
                                $total.text(recalculateTotal(sc) + price);

                                return 'selected';
                            } else if (this.status() == 'selected') { // Đã chọn
                                // Cập nhật số lượng vé
                                $counter.text(sc.find('selected').length - 1);
                                // Cập nhật tổng tiền
                                $total.text(recalculateTotal(sc) - price);

                                // Xóa ghế đã chọn
                                $('#cart-item-' + this.settings.id).remove();

                                return 'available';
                            } else if (this.status() == 'unavailable') { // Đã bán
                                return 'unavailable';
                            } else {
                                return this.style();
                            }
                        }
                    });

                    // Các ghế đã bán
                    sc.get(['1_2', '4_4', '4_5', '6_6', '6_7', '8_5', '8_6', '8_7', '8_8', '10_1', '10_2']).status('unavailable');
                });
            })
            .catch(error => {
                console.error('Error loading assets:', error);
            });







    }, []);
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
    const navigate = useNavigate();

    const handleCancelPayment = () => {
        navigate('/home'); // Navigate to the '/home' route
    };

    function recalculateTotal(sc) {
        const price = 110; // Di chuyển biến 'price' vào đây để nó có thể truy cập được trong hàm này
        var total = 0;
        sc.find('selected').each(function () {
            total += price;
        });

        return total;
    }
    // Lấy tất cả các nút rạp chiếu
    const theaterBtns = document.querySelectorAll('.theater-btn');

// Thêm sự kiện click cho mỗi nút
    theaterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Xóa lớp CSS 'selected' khỏi tất cả các nút
            theaterBtns.forEach(btn => btn.classList.remove('selected'));

            // Thêm lớp CSS 'selected' cho nút được chọn
            this.classList.add('selected');
        });
    });


    return (<div>
        <title>Đặt vé</title>
        <Helmet></Helmet>
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
                                <div id="theater-select-div">
                                    <h2>Chọn rạp chiếu</h2>
                                    <div className="theater-btn-container">
                                        <a href="#" className="theater-btn selected">Rạp 1</a>
                                        <a href="#" className="theater-btn">Rạp 2</a>
                                        <a href="#" className="theater-btn">Rạp 3</a>
                                        <a href="#" className="theater-btn">Rạp 4</a>
                                    </div>
                                </div>
                                <div id="screen-select-div">
                                    <h2>Show time Selection</h2>
                                    <div className="carousel carousel-nav"

                                    >
                                        <div className="carousel-cell selected" id="1" onClick={() => myFunction(1)}>
                                            <div className="date-numeric">13</div>
                                            <div className="date-day">Today</div>
                                        </div>

                                        <div className="carousel-cell" id="2" onClick={() => myFunction(2)}>
                                            <div className="date-numeric">14</div>
                                            <div className="date-day">Tomorrow</div>
                                        </div>
                                        <div className="carousel-cell" id="3" onClick={() => myFunction(3)}>
                                            <div className="date-numeric">15</div>
                                            <div className="date-day">Monday</div>
                                        </div>
                                        <div className="carousel-cell" id="4" onClick={() => myFunction(4)}>
                                            <div className="date-numeric">16</div>
                                            <div className="date-day">Tuesday</div>
                                        </div>
                                        <div className="carousel-cell" id="5" onClick={() => myFunction(5)}>
                                            <div className="date-numeric">17</div>
                                            <div className="date-day">Wednesday</div>
                                        </div>
                                        <div className="carousel-cell" id="6" onClick={() => myFunction(6)}>
                                            <div className="date-numeric">18</div>
                                            <div className="date-day">Thursday</div>
                                        </div>
                                        <div className="carousel-cell" id="7" onClick={() => myFunction(7)}>
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
                                    <h2>Seat Booking</h2>
                                    <div className="main">
                                        <div className="demo">
                                            <div id="seat-map">
                                                <div className="front">SCREEN</div>
                                            </div>
                                            <div className="booking-details">
                                                <ul className="book-left">
                                                    <li>Movie</li>
                                                    <li>Time</li>
                                                    <li>Tickets</li>
                                                    <li>Total</li>
                                                    <li>Selected Seats</li>
                                                </ul>
                                                <ul className="book-right">
                                                    <li>: Commando 3</li>
                                                    <li>: April 12, 22:00</li>
                                                    <li>: <span id="counter">0</span></li>
                                                    <li>: <b><i>RS.</i><span id="total">0</span></b></li>
                                                </ul>
                                                <div className="clear"></div>
                                                <ul id="selected-seats" className="scrollbar scrollbar1"></ul>

                                                <div id="legend"></div>
                                            </div>
                                        </div>
                                    </div>
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
                                       onClick={handleCancelPayment}/>
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
                                       onClick={handleCancelPayment}/>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)

}

export default Booking