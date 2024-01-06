import "../CSS/Offer_slider.css";
import OfferCarousel from "./Offer_carousel";

const Offer_slider = () => {
  return (
    <>
      <div className="offer_slider_heading">
        <h2>Hot Offers</h2>
        <p>
          All{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
            >
              <g clipPath="url(#clip0_118_4862)">
                <path
                  d="M1 9L5 5L1 1"
                  stroke="#E83939"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_118_4862">
                  <rect width="6" height="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </p>
      </div>

      {/* Offer Carousel */}
      <OfferCarousel/>
    </>
  );
};

export default Offer_slider;
