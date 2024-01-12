import { createBrowserRouter } from "react-router-dom";
import RootElement from "../../root/Root";
import HomePage from "../../../pages/Home_Page";
import Authentication from "../../auth/Authentication";
import { checkAuthLoader } from "../../root/Root";
import Login from "../../auth/Login";
import SignUp from "../../auth/SignUp";
// For The Main Navigations
const MainRouter = [
    {
        path :'/',
        element: <RootElement />,
        errorElement: <div>Error</div>,
        loader: checkAuthLoader,
        children: [
            {path: '/', element: <HomePage />, routeName: 'Home'},
            {path: '/search', element: <div>SEARCH</div>, routeName: 'search'},
            {path: '/order', element: <div>Order</div>, routeName: 'order'},
            {path: '/profile', element: <div>Profile</div>, routeName: 'profile'},
            {path: '/category/:catId', element: <div>Category</div>, routeName: 'category'},
            // {path: '/login', element: <div>Login</div>, routeName: 'login'},
            {path: '/signup', element: <div>Signup</div>, routeName: 'signup'},
        ],
    },
    {
        path: '/onboarding',
        element: <Authentication />,
        routeName: 'onboarding'
    },
    {
        path: '/login',
        element: <Login />,
        routeName: 'login'
    },
    {
        path: '/signup',
        element: <SignUp />,
        routeName: 'signup'
    },
    {
        path: '/forget-password',
        element: <div>forget-password</div>,
        routeName: 'forget-password'
    },
]

const Router = createBrowserRouter(MainRouter);

export default Router;

export {MainRouter};