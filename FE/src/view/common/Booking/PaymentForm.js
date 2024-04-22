import React from "react";
import AppInitializer from "./AppInitializer";

const PaymentForm = () => {
    return(
        <div>
            <AppInitializer></AppInitializer>
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
        </div>
    );
}