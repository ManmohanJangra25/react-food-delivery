import { createBrowserRouter } from "react-router-dom";
import RootElement from "../../root/Root";
import HomePage from "../../../pages/Home_Page";
import Authentication from "../../auth/Authentication";

let isAuthenticated = false;
// For The Main Navigations
const MainRouter = [
    {
        path :'/',
        element: isAuthenticated ? <RootElement /> : <Authentication />,
        errorElement: <div>Error</div>,
        children: [
            {path: '/', element: <HomePage />, routeName: 'Home'},
            {path: '/search', element: <div>SEARCH</div>, routeName: 'search'},
            {path: '/order', element: <div>Order</div>, routeName: 'order'},
            {path: '/profile', element: <div>Profile</div>, routeName: 'profile'},
            {path: '/category/:catId', element: <div>Category</div>, routeName: 'category'},
            {
                path :'/auth',
                children: [
                    {index: true, element: <div>Authentication</div>, routeName: 'Authentication'},
                    {path: 'onboarding', element: <div>Onboarding</div>, routeName: 'onboarding'},
                ],
            },
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

export default Router;

export {MainRouter};