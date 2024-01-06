import { Link } from "react-router-dom";
import "./Offer_carousel.css";
import CarouselSlider from "../carousel_slider/CarouselSlider";

const OFFER_DATA = [
  {
    title: "Make Your First Order Here",
    percent: "50%",
    moreOffers: "Free Delivery",
  },
  {
    title: "Make Your First Order Here",
    percent: "50%",
    moreOffers: "Free Delivery",
  },
];

const OfferCarousel = () => {
  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const offerCarousel = OFFER_DATA.map((offer) => (
    <div key={offer.title} className="offer_carousel_item">
      <div className="offer_carousel_inner">
        <Link to="/">
          <div className="offer_title">
            <h3>{offer.title}</h3>
          </div>
          <div className="offer_percent">
            <p>{offer.percent}</p>
          </div>
          <div className="more_offers">
            <p>{offer.moreOffers}</p>
          </div>
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="offer_carousel_wrapper">

      <CarouselSlider
        responsive={responsive}
        slider={offerCarousel}
      ></CarouselSlider>
    </div>
  );
};

export default OfferCarousel;
