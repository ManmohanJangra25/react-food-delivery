import { useState } from "react";
import "./OrderHistory.css";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";

const OrderHistory = (props) => {
  const repeatOrderHandler = () => {
    console.log("repeat Order Button Clicked");
  };
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
              <p className="restaurant_food_type">May 26, 2021 - 10:38 AM</p>
            </div>
            <div className="restaurant_delivery_status">
              <p className="delivery_status text_success">
                <span>
                  Delivered{" "}
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3333 1.5L5 8.83333L1.66667 5.5"
                      stroke="#00824B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </p>
              <p className="delivery_ammount">$ 36.42</p>
            </div>
          </div>
        </div>
        <div className="order_history_list">
          <ul className="order_history_blocks">
            <li className="order_history_list_item">
              <span>Tom Yum Goong x 1</span>
              <span>$10.38</span>
            </li>
            <li className="order_history_list_item">
              <span>Yam Pla Dook Foo x 1</span>
              <span>$17.83</span>
            </li>
            <li className="order_history_list_item">
              <span>Pad Phuk Tong x 1</span>
              <span>$8.21</span>
            </li>
          </ul>
        </div>
        <div onClick={repeatOrderHandler} className="repeat_order_button">
          Repeat order
        </div>

        <div className="order_history_bottom_list">
          <div className="restaurant_lists">
            <div className="restaurant_list_left">
              <div className="restaurant_list_img"></div>
            </div>
            <div className="restaurant_list_right">
              <div className="restaurant_name_type">
                <h4 className="restaurant_title">Filada Family bar</h4>
                <p className="restaurant_food_type">May 26, 2021 - 10:38 AM</p>
              </div>
              <div className="restaurant_delivery_status">
                <p className="delivery_status text_failure">
                  <span>
                  Cencelled{" "}
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 4L3.5 11"
                        stroke="#E83939"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.5 4L10.5 11"
                        stroke="#E83939"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </p>
                <p className="delivery_ammount">$ 36.42</p>
              </div>
            </div>
          </div>

          <div className="restaurant_lists">
            <div className="restaurant_list_left">
              <div className="restaurant_list_img"></div>
            </div>
            <div className="restaurant_list_right">
              <div className="restaurant_name_type">
                <h4 className="restaurant_title">Filada Family bar</h4>
                <p className="restaurant_food_type">May 26, 2021 - 10:38 AM</p>
              </div>
              <div className="restaurant_delivery_status">
                <p className="delivery_status text_success">
                  <span>
                    Delivered{" "}
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3333 1.5L5 8.83333L1.66667 5.5"
                        stroke="#00824B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </p>
                <p className="delivery_ammount">$ 36.42</p>
              </div>
            </div>
          </div>

          <div className="restaurant_lists">
            <div className="restaurant_list_left">
              <div className="restaurant_list_img"></div>
            </div>
            <div className="restaurant_list_right">
              <div className="restaurant_name_type">
                <h4 className="restaurant_title">Filada Family bar</h4>
                <p className="restaurant_food_type">May 26, 2021 - 10:38 AM</p>
              </div>
              <div className="restaurant_delivery_status">
                <p className="delivery_status text_success">
                  <span>
                    Delivered{" "}
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3333 1.5L5 8.83333L1.66667 5.5"
                        stroke="#00824B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </p>
                <p className="delivery_ammount">$ 36.42</p>
              </div>
            </div>
          </div>

          <div className="restaurant_lists">
            <div className="restaurant_list_left">
              <div className="restaurant_list_img"></div>
            </div>
            <div className="restaurant_list_right">
              <div className="restaurant_name_type">
                <h4 className="restaurant_title">Filada Family bar</h4>
                <p className="restaurant_food_type">May 26, 2021 - 10:38 AM</p>
              </div>
              <div className="restaurant_delivery_status">
                <p className="delivery_status text_success">
                  <span>
                    Delivered{" "}
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3333 1.5L5 8.83333L1.66667 5.5"
                        stroke="#00824B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </p>
                <p className="delivery_ammount">$ 36.42</p>
              </div>
            </div>
          </div>

          <div className="restaurant_lists">
            <div className="restaurant_list_left">
              <div className="restaurant_list_img"></div>
            </div>
            <div className="restaurant_list_right">
              <div className="restaurant_name_type">
                <h4 className="restaurant_title">Filada Family bar</h4>
                <p className="restaurant_food_type">May 26, 2021 - 10:38 AM</p>
              </div>
              <div className="restaurant_delivery_status">
                <p className="delivery_status text_success">
                  <span>
                    Delivered{" "}
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3333 1.5L5 8.83333L1.66667 5.5"
                        stroke="#00824B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </p>
                <p className="delivery_ammount">$ 36.42</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default OrderHistory;
