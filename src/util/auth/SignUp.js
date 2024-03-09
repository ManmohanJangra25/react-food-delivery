import { Form, Link } from "react-router-dom";
import "./SignUp.css";
import { useRef } from "react";

const SignUp = () => {
  const userChecker = useRef();
  const formValid = (e) => {
    const re = /^[A-Za-z0-9]+$/;
    if (e.target.name === "username") {
      if (e.target.value === "" || e.target.value.length < 3) {
        userChecker.current.style.borderBottom = "1px solid red";
        userChecker.current.setCustomValidity('Please enter a valid name');
      }
    }

    if (e.target.name === "email") {
      if (e.target.value === "" || e.target.value.length < 3) {
        userChecker.current.style.borderBottom = "1px solid red";
      }
    }
  };
  return (
    <main className="authWrapper">
      <div className="login_title">
        <h1>Sign up</h1>
      </div>
      <div className="loginForm">
        <Form method="post">
          <div className="input_lable">
            <label>Name</label>
            <div className="input_field">
              <input
                type="text"
                ref={userChecker}
                onChange={formValid}
                placeholder="Name"
                name="username"
              />
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_242_1673)">
                    <path
                      d="M12.3334 1L5.00002 8.33333L1.66669 5"
                      stroke="#00824B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_242_1673">
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
              <input
                onChange={formValid}
                type="email"
                placeholder="Email"
                name="email"
              />
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_242_1673)">
                    <path
                      d="M12.3334 1L5.00002 8.33333L1.66669 5"
                      stroke="#00824B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_242_1673">
                      <rect width="14" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
          <div className="input_lable">
            <label>Password</label>
            <div className="input_field">
              <input
                onChange={formValid}
                type="password"
                placeholder="Password"
                name="password"
              />
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_242_1719)">
                    <path
                      d="M9.41335 9.41331C9.23025 9.60981 9.00945 9.76741 8.76412 9.87673C8.51879 9.98604 8.25395 10.0448 7.98541 10.0496C7.71687 10.0543 7.45013 10.0049 7.20109 9.9043C6.95206 9.80371 6.72583 9.654 6.53592 9.46408C6.346 9.27416 6.19628 9.04794 6.09569 8.7989C5.9951 8.54987 5.9457 8.28312 5.95044 8.01458C5.95518 7.74604 6.01396 7.48121 6.12327 7.23587C6.23258 6.99054 6.39019 6.76974 6.58669 6.58664M11.96 11.96C10.8204 12.8286 9.43276 13.3099 8.00002 13.3333C3.33335 13.3333 0.666687 7.99998 0.666687 7.99998C1.49595 6.45457 2.64611 5.10438 4.04002 4.03998L11.96 11.96ZM6.60002 2.82664C7.05891 2.71923 7.52873 2.66554 8.00002 2.66664C12.6667 2.66664 15.3334 7.99998 15.3334 7.99998C14.9287 8.75705 14.4461 9.4698 13.8934 10.1266L6.60002 2.82664Z"
                      stroke="#7D849A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.666687 0.666626L15.3334 15.3333"
                      stroke="#7D849A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_242_1719">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
          <div className="input_lable">
            <label>Confirm Password</label>
            <div className="input_field">
              <input
                onChange={formValid}
                type="password"
                placeholder="Confirm Password"
              />
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_242_1719)">
                    <path
                      d="M9.41335 9.41331C9.23025 9.60981 9.00945 9.76741 8.76412 9.87673C8.51879 9.98604 8.25395 10.0448 7.98541 10.0496C7.71687 10.0543 7.45013 10.0049 7.20109 9.9043C6.95206 9.80371 6.72583 9.654 6.53592 9.46408C6.346 9.27416 6.19628 9.04794 6.09569 8.7989C5.9951 8.54987 5.9457 8.28312 5.95044 8.01458C5.95518 7.74604 6.01396 7.48121 6.12327 7.23587C6.23258 6.99054 6.39019 6.76974 6.58669 6.58664M11.96 11.96C10.8204 12.8286 9.43276 13.3099 8.00002 13.3333C3.33335 13.3333 0.666687 7.99998 0.666687 7.99998C1.49595 6.45457 2.64611 5.10438 4.04002 4.03998L11.96 11.96ZM6.60002 2.82664C7.05891 2.71923 7.52873 2.66554 8.00002 2.66664C12.6667 2.66664 15.3334 7.99998 15.3334 7.99998C14.9287 8.75705 14.4461 9.4698 13.8934 10.1266L6.60002 2.82664Z"
                      stroke="#7D849A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.666687 0.666626L15.3334 15.3333"
                      stroke="#7D849A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_242_1719">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
          {/* <Link className="forgetPass" to={'/auth?mode=forgot-password'}>Forgot your password?</Link> */}
          <button className="auth_btn">Sign Up</button>
        </Form>
        <div>
          <p className="noAccount">
            Already have an account?{" "}
            <Link to={"/auth?mode=login"}>Sign in.</Link>
          </p>
        </div>
      </div>
      <div className="social_login">
        <div className="fb">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
          >
            <path
              d="M9.49947 0.00332907L7.42463 0C5.09362 0 3.58721 1.54552 3.58721 3.93762V5.75313H1.50105C1.32078 5.75313 1.1748 5.89927 1.1748 6.07954V8.71001C1.1748 8.89028 1.32095 9.03625 1.50105 9.03625H3.58721V15.6738C3.58721 15.854 3.73319 16 3.91346 16H6.63531C6.81558 16 6.96156 15.8539 6.96156 15.6738V9.03625H9.40077C9.58103 9.03625 9.72701 8.89028 9.72701 8.71001L9.72801 6.07954C9.72801 5.99299 9.69356 5.91009 9.63247 5.84884C9.57138 5.78758 9.48815 5.75313 9.4016 5.75313H6.96156V4.2141C6.96156 3.47438 7.13783 3.09886 8.10143 3.09886L9.49914 3.09836C9.67924 3.09836 9.82522 2.95222 9.82522 2.77211V0.329578C9.82522 0.149642 9.67941 0.00366197 9.49947 0.00332907Z"
              fill="#3B5999"
            />
          </svg>
        </div>
        <div className="twitter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
          >
            <g clipPath="url(#clip0_242_201)">
              <path
                d="M16.1374 1.96199C15.8861 2.07347 15.6276 2.16756 15.3636 2.24395C15.6762 1.8904 15.9145 1.4744 16.06 1.01918C16.0927 0.917137 16.0589 0.805447 15.975 0.738711C15.8912 0.671924 15.7748 0.663924 15.6826 0.718582C15.1218 1.05118 14.5168 1.2902 13.8824 1.42996C13.2434 0.80555 12.3755 0.450195 11.4783 0.450195C9.58434 0.450195 8.04349 1.991 8.04349 3.88488C8.04349 4.03404 8.05293 4.18238 8.07162 4.32865C5.72143 4.1223 3.5365 2.96715 2.03611 1.12669C1.98264 1.06109 1.90027 1.02573 1.81593 1.03249C1.73155 1.0391 1.65573 1.08669 1.61309 1.15982C1.30878 1.68199 1.14791 2.2792 1.14791 2.88684C1.14791 3.71445 1.44339 4.49969 1.96535 5.11327C1.80664 5.0583 1.65263 4.9896 1.50564 4.908C1.42672 4.86408 1.33041 4.86475 1.25201 4.90971C1.17356 4.95466 1.12437 5.03734 1.12231 5.12772C1.12195 5.14294 1.12195 5.15817 1.12195 5.1736C1.12195 6.40896 1.78682 7.52116 2.80334 8.12736C2.71601 8.11863 2.62873 8.10599 2.54202 8.08942C2.45263 8.07234 2.36071 8.10367 2.30042 8.17185C2.24004 8.23998 2.22006 8.33494 2.24788 8.42165C2.62414 9.59636 3.59286 10.4604 4.76396 10.7238C3.79265 11.3322 2.68189 11.6509 1.51586 11.6509C1.27255 11.6509 1.02786 11.6366 0.788372 11.6082C0.669404 11.5941 0.55565 11.6643 0.515134 11.7775C0.474617 11.8907 0.517559 12.0169 0.618772 12.0817C2.11673 13.0422 3.84881 13.5499 5.62765 13.5499C9.12462 13.5499 11.3122 11.9008 12.5316 10.5174C14.0521 8.79249 14.9242 6.50929 14.9242 4.25334C14.9242 4.1591 14.9227 4.06392 14.9198 3.96906C15.5197 3.51709 16.0362 2.97009 16.4565 2.3414C16.5203 2.24591 16.5134 2.11972 16.4395 2.03182C16.3656 1.94387 16.2425 1.91543 16.1374 1.96199Z"
                fill="#55ACEE"
              />
            </g>
            <defs>
              <clipPath id="clip0_242_201">
                <rect
                  width="16"
                  height="14"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="google">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="50"
            viewBox="0 0 51 50"
            fill="none"
          >
            <rect
              x="1.5"
              y="1"
              width="48"
              height="48"
              rx="24"
              stroke="#DD4B39"
              strokeWidth="2"
            />
            <path
              d="M22.2788 23.7097C25.2849 23.7097 27.083 23.7097 27.673 23.7097C27.8696 24.7492 27.8275 25.7606 27.5465 26.744C27.2656 27.6992 26.7739 28.4999 26.0716 29.1461C25.4254 29.7361 24.6387 30.1434 23.7116 30.3682C22.7002 30.5929 21.7169 30.5789 20.7616 30.326C20.0031 30.1294 19.3147 29.7782 18.6967 29.2725C18.0224 28.7387 17.5026 28.1066 17.1374 27.3761C16.5193 26.1961 16.3507 24.9459 16.6317 23.6254C16.716 23.1197 16.8845 22.6421 17.1374 22.1926C17.8117 20.7879 18.8933 19.8326 20.3824 19.3269C21.6747 18.8774 22.9671 18.8915 24.2594 19.3691C24.9337 19.6219 25.5518 20.0012 26.1137 20.5069C26.0575 20.5912 25.9592 20.7036 25.8187 20.844C25.6782 20.9564 25.5939 21.0407 25.5658 21.0969C25.4535 21.1812 25.2709 21.3497 25.018 21.6026C24.7932 21.8274 24.6247 22.01 24.5123 22.1505C24.1471 21.7852 23.7256 21.5324 23.248 21.3919C22.6861 21.2233 22.1242 21.2093 21.5623 21.3497C20.8881 21.4902 20.3121 21.7993 19.8345 22.2769C19.4693 22.6702 19.1883 23.1338 18.9917 23.6676C18.7388 24.398 18.7388 25.1425 18.9917 25.9011C19.2445 26.6316 19.694 27.2216 20.3402 27.6711C20.7335 27.952 21.155 28.1346 21.6045 28.2189C22.0259 28.3032 22.4895 28.3032 22.9952 28.2189C23.4728 28.1346 23.8942 27.9661 24.2594 27.7132C24.9056 27.2918 25.2849 26.7018 25.3973 25.9433C24.3578 25.9433 23.3183 25.9433 22.2788 25.9433C22.2788 25.7747 22.2788 25.4095 22.2788 24.8476C22.2788 24.2576 22.2788 23.8783 22.2788 23.7097ZM34.5 23.8361V25.269H32.5193V27.2075H31.0865V25.269H29.1058V23.8361H31.0865V21.8555H32.5193V23.8361H34.5Z"
              fill="#DD4B39"
            />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
