import { createBrowserRouter, redirect } from "react-router-dom";
import RootElement from "../../root/Root";
import HomePage from "../../../pages/Home_Page";
import Authentication from "../../auth/Authentication";
import { checkAuthLoader } from "../../root/Root";
import UserAuthentication from "../../../pages/User_authentication";
import {action as authActions} from "../../../pages/User_authentication";
import Profile from "../../../pages/Profile";
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
            {path: '/profile', element: <Profile />, routeName: 'profile'},
            {path: '/order-history', element: <div>order-history</div>, routeName: 'order-history'},
            {path: '/payment-method', element: <div>payment-method</div>, routeName: 'payment-method'},
            {path: '/my-address', element: <div>my-address</div>, routeName: 'my-address'},
            {path: '/my-promocodes', element: <div>my-promocodes</div>, routeName: 'my-promocodes'},
            {path: '/my-favorites', element: <div>my-favorites</div>, routeName: 'my-favorites'},
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