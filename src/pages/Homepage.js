import "./css/Homepage.css";
import HomeHeader from "../components/header/HomeHeader";
import Offer_slider from "../components/Offer/Offer_slider";

const Homepage = () => {
  const urlPath = window.location.pathname;
  if (urlPath === "/") {
    return (
      <>
        <div className="common_header">
          <HomeHeader />
        </div>
        <div className="offer_slider">
          <Offer_slider />
        </div>
      </>
    );
  }
};

export default Homepage;
