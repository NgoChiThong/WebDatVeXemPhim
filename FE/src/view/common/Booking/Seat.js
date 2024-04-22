
function Seat() {
    return (
        <div className="content">
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
                    </div>
                    <div className="clear" />
                </div>
            </div>
        </div>
    )

}
export default Seat