import { useState } from "react";
import "./OrderHistory.css";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";

const OrderHistory = (props) => {
  return (
    <Overlay showOverlay={"show"}>
      <div className="overlay_topbar">
        <Link className="overlay_topbar_back" to="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <g clipPath="url(#clip0_246_142)">
              <path
                d="M7 13L1 7L7 1"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_246_142">
                <rect width="8" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <p className="overlay_topbar_title">Order History</p>
      </div>
      <div className="overlay_content order_history_content">
        <div className="restaurant_lists">
          <div className="restaurant_list_left">
            <div className="restaurant_list_img"></div>
          </div>
          <div className="restaurant_list_right">
            <div className="restaurant_name_type">
              <h4 className="restaurant_title">Filada Family bar</h4>
              <p className="restaurant_food_type">Asian food</p>
            </div>
            <div className="restaurant_delivery_distance">
              <p className="delivery_distance">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z"
                    stroke="#7D849A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z"
                    stroke="#7D849A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>0.2 km - $$ -</span>
              </p>
              <p className="delivery_charges">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M8 1.5H0.5V8H8V1.5Z"
                    stroke="#E83939"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 4H10L11.5 5.5V8H8V4Z"
                    stroke="#E83939"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.75 10.5C3.44036 10.5 4 9.94036 4 9.25C4 8.55964 3.44036 8 2.75 8C2.05964 8 1.5 8.55964 1.5 9.25C1.5 9.94036 2.05964 10.5 2.75 10.5Z"
                    stroke="#E83939"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.25 10.5C9.94036 10.5 10.5 9.94036 10.5 9.25C10.5 8.55964 9.94036 8 9.25 8C8.55964 8 8 8.55964 8 9.25C8 9.94036 8.55964 10.5 9.25 10.5Z"
                    stroke="#E83939"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Free
              </p>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default OrderHistory;
