import { Link } from "react-router-dom";
import "./Offer_carousel.css";

const Offer_carousel = () => {
    return (
        <div className="offer_carousel_wrapper">
            <div className="offer_carousel_item">
                <div className="offer_carousel_inner">
                    <Link to="/">
                        <div className="offer_title">
                            <h3>Make Your First Order Here</h3>
                        </div>
                        <div className="offer_percent">
                            <p>50% off</p>
                        </div>
                        <div className="more_offers">
                            <p>Free Delivery</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="offer_carousel_item">
                <div className="offer_carousel_inner">
                    <Link to="/">
                        <div className="offer_title">
                            <h3>Make Your First Order Here</h3>
                        </div>
                        <div className="offer_percent">
                            <p>50% off</p>
                        </div>
                        <div className="more_offers">
                            <p>Free Delivery</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Offer_carousel;