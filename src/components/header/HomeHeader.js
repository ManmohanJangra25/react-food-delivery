import "../CSS/HomeHeader.css";
import catArray from "../../category.json";
import { NavLink } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="home_header">
      <div className="header_details">
        <div className="user_logo"></div>
        <div className="user_delivery_addr">
          <h5 className="user_addr_heading">Deliver To:</h5>
          <p className="user_addr">
            <span className="deliver_addr">
              8000 S Kirkland Ave, Chicago, IL ...
            </span>
            <span className="addr_arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
              >
                <g clip-path="url(#clip0_113_2913)">
                  <path
                    d="M2 11.3L6.8 6.49995L2 1.69995"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_113_2913">
                    <rect
                      width="7.2"
                      height="12"
                      fill="white"
                      transform="translate(0.799988 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </p>
        </div>
      </div>

      <div className="category_slider">
        {catArray.categories.map((cat) => (
          <div className="cat_slider_item">
            <NavLink to={`/category/${cat}`}>
              <div
                className="cat_slider_img"
                style={{ backgroundImage: `url(${cat.img})` }}
              ></div>
              <div className="cat_slider_text">
                <p>{cat.name}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeHeader;
