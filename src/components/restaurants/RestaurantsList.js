import RestaurantListInner from "./RestaurantListInner";
import "./RestaurantsList.css";

const RestaurantsList = () => {
    return (
        <>
            <div className="restaurant_list_wrapper">
                <div className="restaurant_list_title">
                    <h2>Popular Restaurants</h2>
                </div>
                <RestaurantListInner />
            </div>
        </>
    );
}

export default RestaurantsList;