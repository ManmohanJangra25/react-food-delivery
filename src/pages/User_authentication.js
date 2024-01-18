import {
  useSearchParams,
  useNavigation,
  json,
  redirect,
} from "react-router-dom";
import Login from "../util/auth/Login";
import SignUp from "../util/auth/SignUp";

const UserAuthentication = () => {
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode");
  const isSubmitting = navigation.state === "submitting";

  if (authMode === "login" || authMode === null) {
    return <Login />;
  } else {
    if (authMode === "signup") {
      return <SignUp />;
    }
  }
  // else if (authMode === 'forgot-password')  {
  //     return (
  //         <div>Forgot Password</div>
  //     )
  // }
};

export default UserAuthentication;

export async function action({ request }) {
  // https://auth-backend-xpa0.onrender.com/signup
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (!mode === "login" && !mode === "signup" && !mode === null) {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  let authData = {};
  if (mode === "login" || mode === null) {
    authData = {
      email: data.get("email"),
      password: data.get("password"),
    };
  } else if (mode === "signup") {
    authData = {
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
      };
  }

  const response = await fetch(
    "https://auth-backend-xpa0.onrender.com/" + mode,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    }
  );

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const respData = await response.json();
  const token = respData.token;

  localStorage.setItem("token", token);

  // soon : manage the token
  return redirect("/");
}
