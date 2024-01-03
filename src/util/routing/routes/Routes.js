import { createBrowserRouter } from "react-router-dom";
import RootElement from "../../root/Root";
import Homepage from "../../../pages/Homepage";

// For The Main Navigations
const MainRouter = [
    {
        path :'/',
        element: <RootElement />,
        errorElement: <div>Error</div>,
        children: [
            {path: '/', element: <Homepage />, routeName: 'Home'},
            {path: '/search', element: <div>SEARCH</div>, routeName: 'search'},
            {path: '/order', element: <div>Order</div>, routeName: 'order'},
            {path: '/profile', element: <div>Profile</div>, routeName: 'profile'},
        ],
    },
]

const Router = createBrowserRouter(MainRouter);

// For Profile Routes
// const ProfileRouter = createBrowserRouter([
//     {
//         path :'/',
//         element: <div>Profile</div>,
//         errorElement: <div>Error</div>,
//         children: [
//             {index: true, element: <div>HOMEPAGE</div>},
//             {path: '/search', element: <div>SEARCH</div>},   
//             {path: '/order', element: <div>Order</div>},
//             {path: '/profile', element: <div>Profile</div>},
//             {path: '/onboarding', element: <div>Onboarding</div>},
//             {path: '/auth', element: <div>Authentication</div>},
//         ],
//     },
// ]);

// For Authentication & Onboarding Routes
// const AuthRouter = createBrowserRouter([
//     {
//         path :'/auth',
//         element: <div>Authentication</div>,
//         errorElement: <div>Error</div>,
//         children: [
//             {path: '/', element: <div>Authentication</div>, routeName: 'Authentication'},
//             {path: '/onboarding', element: <div>Onboarding</div>, routeName: 'onboarding'},
//         ],
//     },
// ]);

export default Router;

export {MainRouter};