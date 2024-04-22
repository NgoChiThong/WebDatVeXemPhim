import React, {useEffect, useState} from 'react';
import AppInitializer from "./AppInitializer";

const DateSelector = () => {
    const [prevId, setPrevId] = useState("1");
    const [isScreenNextBtnDisabled, setScreenNextBtnDisabled] = useState(true);

    useEffect(() => {
        document.getElementById("screen-next-btn").disabled = true;
    }, []);

    const myFunction = (id) => {
        document.getElementById(prevId).style.background = "rgb(243, 235, 235)";
        document.getElementById(id).style.background = "#df0e62";
        setPrevId(id);
    }

    const timeFunction = () => {
        setScreenNextBtnDisabled(false);
    }

    return (
        <div>
            <div id="screen-select-div">
                <h2>Show time Selection</h2>
                <div className="carousel carousel-nav"
                     data-flickity='{"contain": true, "pageDots": false }'>
                    <div className="carousel-cell" id="1" onClick={() => myFunction(1)}>
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
        </div>
    );
}

export default DateSelector;