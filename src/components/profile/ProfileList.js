import { Link } from "react-router-dom";
import "./ProfileList.css";

const ProfileList = () => {
  return (
    <>
      <div className="profile_list_wrapper">
        <ul className="profile_list">
          <li className="profile_list_item" >
            <Link to="/order-history">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.8333 3.33337H4.16667C3.24619 3.33337 2.5 4.07957 2.5 5.00004V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V5.00004C17.5 4.07957 16.7538 3.33337 15.8333 3.33337Z"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3334 1.66663V4.99996"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66663 1.66663V4.99996"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 8.33337H17.5"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Order History</span>
            </Link>
          </li>

          <li className="profile_list_item" >
            <Link to="/payment-method">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5 3.33337H2.50004C1.57957 3.33337 0.833374 4.07957 0.833374 5.00004V15C0.833374 15.9205 1.57957 16.6667 2.50004 16.6667H17.5C18.4205 16.6667 19.1667 15.9205 19.1667 15V5.00004C19.1667 4.07957 18.4205 3.33337 17.5 3.33337Z"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.833374 8.33337H19.1667"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Payment Method</span>
            </Link>
          </li>

          <li className="profile_list_item" >
            <Link to="/my-address">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5 8.33325C17.5 14.1666 10 19.1666 10 19.1666C10 19.1666 2.5 14.1666 2.5 8.33325C2.5 6.34413 3.29018 4.43647 4.6967 3.02995C6.10322 1.62343 8.01088 0.833252 10 0.833252C11.9891 0.833252 13.8968 1.62343 15.3033 3.02995C16.7098 4.43647 17.5 6.34413 17.5 8.33325Z"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.8333C11.3807 10.8333 12.5 9.71397 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71397 8.61929 10.8333 10 10.8333Z"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>My Address</span>
            </Link>
          </li>

          <li className="profile_list_item" >
            <Link to="/my-promocodes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_246_1022)">
                  <path
                    d="M16.6667 10V18.3333H3.33337V10"
                    stroke="#7D849A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3333 5.83325H1.66663V9.99992H18.3333V5.83325Z"
                    stroke="#7D849A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 18.3333V5.83325"
                    stroke="#7D849A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.99996 5.83341H6.24996C5.69743 5.83341 5.16752 5.61392 4.77682 5.22322C4.38612 4.83252 4.16663 4.30262 4.16663 3.75008C4.16663 3.19755 4.38612 2.66764 4.77682 2.27694C5.16752 1.88624 5.69743 1.66675 6.24996 1.66675C9.16663 1.66675 9.99996 5.83341 9.99996 5.83341Z"
                    stroke="#7D849A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.83341H13.75C14.3025 5.83341 14.8324 5.61392 15.2231 5.22322C15.6138 4.83252 15.8333 4.30262 15.8333 3.75008C15.8333 3.19755 15.6138 2.66764 15.2231 2.27694C14.8324 1.88624 14.3025 1.66675 13.75 1.66675C10.8333 1.66675 10 5.83341 10 5.83341Z"
                    stroke="#7D849A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_246_1022">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>My Promocodes</span>
            </Link>
          </li>

          <li className="profile_list_item" >
            <Link to="/my-favorites">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.3667 3.84172C16.9411 3.41589 16.4357 3.0781 15.8795 2.84763C15.3233 2.61716 14.7271 2.49854 14.1251 2.49854C13.523 2.49854 12.9268 2.61716 12.3706 2.84763C11.8144 3.0781 11.309 3.41589 10.8834 3.84172L10.0001 4.72506L9.11673 3.84172C8.25698 2.98198 7.09092 2.49898 5.87506 2.49898C4.6592 2.49898 3.49314 2.98198 2.63339 3.84172C1.77365 4.70147 1.29065 5.86753 1.29065 7.08339C1.29065 8.29925 1.77365 9.46531 2.63339 10.3251L3.51672 11.2084L10.0001 17.6917L16.4834 11.2084L17.3667 10.3251C17.7926 9.89943 18.1304 9.39407 18.3608 8.83785C18.5913 8.28164 18.7099 7.68546 18.7099 7.08339C18.7099 6.48132 18.5913 5.88514 18.3608 5.32893C18.1304 4.77271 17.7926 4.26735 17.3667 3.84172V3.84172Z"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>My Favorites</span>
            </Link>
          </li>

          <li className="profile_list_item" >
            <a href="/logout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3334 14.1666L17.5 9.99992L13.3334 5.83325"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 10H7.5"
                  stroke="#7D849A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Sign out</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileList;
