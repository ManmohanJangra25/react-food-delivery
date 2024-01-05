import "./css/Homepage.css";
import HomeHeader from "../components/header/HomeHeader";
import Offer_slider from "../components/Offer/Offer_slider";
import RestaurantsList from "../components/restaurants/RestaurantsList";

const HomePage = () => {
  const urlPath = window.location.pathname;
  if (urlPath === "/") {
    return (
      <>
        <div className="common_header">
          <HomeHeader />
        </div>
        <main className="home_main_wrapper">
          <div className="offer_slider">
            <Offer_slider />
          </div>
          <div className="restaurant_list">
            <RestaurantsList />
          </div>
        </main>
      </>
    );
  }
};

export default HomePage;
