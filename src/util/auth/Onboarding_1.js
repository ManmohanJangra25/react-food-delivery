import { useState } from "react";
import "./Onboarding.css";

const Onboarding_1 = () => {
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const backToFirst = () => {
    setState1(true);
    setState2(false);
    setState3(false);
  }
  const firstHandler = () => {
    setState1(false);
    setState2(true);
    setState3(false);
  };
  const secondHandler = () => {
    setState1(false);
    setState2(false);
    setState3(true);
  };
  const thirdHandler = () => {
    console.log("final");
  };
  if (state1) {
    return (
      <div className="onboarding_wrapper">
        <div className="onboarding_top">
          <div className="onboarding_back_btn"></div>
          <div className="onboarding_skip_btn">
            <p onClick={thirdHandler}>
              Skip{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_117_4292)">
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="#E83939"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_117_4292">
                      <rect width="6" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div className="onboarding_main">
          <div className="onboarding_content">
            <div className="onboarding_image">
              <img src="/images/onboarding_1.png" alt="onboarding" />
            </div>
            <h2>Find the restaurant!</h2>
            <p>
              Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum.
            </p>
            <div className="onboarding_icon">
              <img src="/images/icons/on1.png" alt="onboarding" />
            </div>
          </div>
          <div className="onboarding_btn">
            <button onClick={firstHandler} className="onboarding_btn_next">
              NEXT
            </button>
          </div>
        </div>
      </div>
    );
  } else if (state2) {
    return (
      <div className="onboarding_wrapper">
        <div className="onboarding_top">
          <div onClick={backToFirst} className="onboarding_back_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
            >
              <g clipPath="url(#clip0_219_233)">
                <path
                  d="M7 13L1 7L7 1"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_219_233">
                  <rect width="8" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div onClick={thirdHandler} className="onboarding_skip_btn">
            <p>
              Skip{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_117_4292)">
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="#E83939"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_117_4292">
                      <rect width="6" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div className="onboarding_main">
          <div className="onboarding_content">
            <div className="onboarding_image">
              <img src="/images/onboarding_2.png" alt="onboarding" />
            </div>
            <h2>Choose favorite dishes!</h2>
            <p>
              Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum.
            </p>
            <div className="onboarding_icon">
              <img src="/images/icons/on2.png" alt="onboarding" />
            </div>
          </div>
          <div className="onboarding_btn">
            <button onClick={secondHandler} className="onboarding_btn_next">
              NEXT
            </button>
          </div>
        </div>
      </div>
    );
  } else if (state3) {
    return (
      <div className="onboarding_wrapper">
        <div className="onboarding_top">
          <div onClick={firstHandler} className="onboarding_back_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
            >
              <g clipPath="url(#clip0_219_233)">
                <path
                  d="M7 13L1 7L7 1"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_219_233">
                  <rect width="8" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="onboarding_skip_btn"></div>
        </div>
        <div className="onboarding_main">
          <div className="onboarding_content">
            <div className="onboarding_image">
              <img src="/images/onboarding_3.png" alt="onboarding" />
            </div>
            <h2>Get your food delivery!</h2>
            <p>
              Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum.
            </p>
            <div className="onboarding_icon">
              <img src="/images/icons/on3.png" alt="onboarding" />
            </div>
          </div>
          <div className="onboarding_btn">
            <button onClick={thirdHandler} className="onboarding_btn_next">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Onboarding_1;
