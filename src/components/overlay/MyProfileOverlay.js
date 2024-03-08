import { Form } from "react-router-dom";
import Overlay from "./Overlay";
import "./MyProfileOverlay.css";
import { useState } from "react";

const MyProfileOverlay = (props) => {

  const [profileImage, setProfileImage] = useState('var(--light-grey)');
  const profileImageHandle = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Overlay showOverlay={props.isShowOverlay}>
      <div className="overlay_topbar">
        <span
          className="overlay_topbar_back"
          onClick={() => props.showOverlayHandler("")}
        >
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
        </span>
        <p className="overlay_topbar_title">Edit Profile</p>
      </div>
      <div className="overlay_content">
        <div className="overlay_content_top">
          <div className="profile_image" style={{ background: `url(${profileImage}) center center` }}>
            <span className="image_edit">
              <span className="edit_profile_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M7 11.6666H12.25"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.625 2.04164C9.85706 1.80957 10.1718 1.6792 10.5 1.6792C10.6625 1.6792 10.8234 1.71121 10.9735 1.77339C11.1237 1.83558 11.2601 1.92673 11.375 2.04164C11.4899 2.15654 11.5811 2.29296 11.6432 2.44309C11.7054 2.59322 11.7374 2.75413 11.7374 2.91664C11.7374 3.07914 11.7054 3.24005 11.6432 3.39018C11.5811 3.54032 11.4899 3.67673 11.375 3.79164L4.08333 11.0833L1.75 11.6666L2.33333 9.3333L9.625 2.04164Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                className="image_edit_input"
                type="file"
                name="profile_image"
                onChange={profileImageHandle}
              ></input>
            </span>
          </div>
        </div>

        <Form className="edit_profile_form">
          <div className="input_lable">
            <label>Name</label>
            <div className="input_field">
              <input type="text" placeholder="Name" name="username" />
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_246_1471)">
                    <path
                      d="M12.3333 1L4.99999 8.33333L1.66666 5"
                      stroke="#00824B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_246_1471">
                      <rect width="14" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>

          <div className="input_lable">
            <label>Email</label>
            <div className="input_field">
              <input type="email" placeholder="Email" name="email" />
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_246_1471)">
                    <path
                      d="M12.3333 1L4.99999 8.33333L1.66666 5"
                      stroke="#00824B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_246_1471">
                      <rect width="14" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>

          <div className="input_lable">
            <label>Phone Number</label>
            <div className="input_field">
              <input
                type="number"
                placeholder="Phone Number"
                name="phone_number"
              />
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_246_1471)">
                    <path
                      d="M12.3333 1L4.99999 8.33333L1.66666 5"
                      stroke="#00824B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_246_1471">
                      <rect width="14" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>

          <div className="input_lable">
            <label>Location</label>
            <div className="input_field">
              <input type="text" placeholder="Location" name="location" />
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_246_1471)">
                    <path
                      d="M12.3333 1L4.99999 8.33333L1.66666 5"
                      stroke="#00824B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_246_1471">
                      <rect width="14" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>

          <button
            className="orange_bg_btn"
            onClick={() => props.showOverlayHandler("")}
          >
            Save Changes
          </button>
        </Form>
      </div>
    </Overlay>
  );
};

export default MyProfileOverlay;
