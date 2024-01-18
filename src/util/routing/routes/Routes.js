import { createBrowserRouter, redirect } from "react-router-dom";
import RootElement from "../../root/Root";
import HomePage from "../../../pages/Home_Page";
import Authentication from "../../auth/Authentication";
import { checkAuthLoader } from "../../root/Root";
import UserAuthentication from "../../../pages/User_authentication";
import {action as authActions} from "../../../pages/User_authentication";
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
        ],
    },
    {
        path: '/onboarding',
        element: <Authentication />,
        routeName: 'onboarding'
    },
    {
        path: '/auth',
        element: <UserAuthentication />,
        routeName: 'login',
        action: authActions
    },
    {
        path: '/logout',
        routeName: 'logout',
        element: <div>Logout</div>,
        loader: () => {localStorage.removeItem('token'); return redirect('/')},
    },
]

const Router = createBrowserRouter(MainRouter);

export default Router;

export {MainRouter};