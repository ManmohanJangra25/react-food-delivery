import "./Profile.css";
import ProfileList from "../components/profile/ProfileList";
import { useState } from "react";
import MyProfileOverlay from "../components/overlay/MyProfileOverlay";

const Profile = (props) => {
  const [isShowOverlay, setIsShowOverlay] = useState("");
  const showOverlayHandler = (data) => {
    setIsShowOverlay(data);
  };
  return (
    <>
      <div className="profile_common_header">
        <h2 className="profile_title">My Profile</h2>
        <div className="profile_home_header">
          <div className="header_details">
            <div className="user_logo"></div>
            <div className="user_profile_email">
              <h5 className="user_email_heading">Manmohan Jangra</h5>
              <p className="user_email">
                <span className="user_email_addr">smudit9798@gmail.com</span>
                <span className="addr_arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_113_2913)">
                      <path
                        d="M2 11.3L6.8 6.49995L2 1.69995"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
          <div
            className="header_actions"
            onClick={() => setIsShowOverlay("show")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 13.3334H14"
                stroke="#7D849A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 2.33328C11.2652 2.06806 11.6249 1.91907 12 1.91907C12.1857 1.91907 12.3696 1.95565 12.5412 2.02672C12.7128 2.09779 12.8687 2.20196 13 2.33328C13.1313 2.4646 13.2355 2.6205 13.3066 2.79208C13.3776 2.96367 13.4142 3.14756 13.4142 3.33328C13.4142 3.519 13.3776 3.7029 13.3066 3.87448C13.2355 4.04606 13.1313 4.20196 13 4.33328L4.66667 12.6666L2 13.3333L2.66667 10.6666L11 2.33328Z"
                stroke="#7D849A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <ProfileList />
      <MyProfileOverlay
        showOverlayHandler={showOverlayHandler}
        isShowOverlay={isShowOverlay}
      />
    </>
  );
};

export default Profile;
