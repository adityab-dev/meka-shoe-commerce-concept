import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Arrival from "./Pages/Arrival/Arrival";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Man from "./Pages/Man/Man";
import Woman from "./Pages/Woman/Woman";
import Cart from "./Pages/Cart/Cart";

import {
    loginPath,
    registerPath,
    manProductsPath,
    womanProductPaths,
    arrivalProductsPath,
    cartPath,
} from "../src/paths/paths";

import HeaderNavbarLayout from "./Pages/HeaderNavbarLayout/HeaderNavbarLayout";
import SidebarLayout from "./Pages/SidebarLayout/SidebarLayout";

function App() {
    const router = createBrowserRouter([
        {
            path: loginPath,
            element: <Login />,
        },
        {
            path: registerPath,
            element: <Register />,
        },
        {
            path: arrivalProductsPath,
            element: <HeaderNavbarLayout />,
            children: [
                {
                    path: arrivalProductsPath,
                    element: <SidebarLayout />,
                    children: [
                        { index: true, element: <Arrival /> },
                        {
                            path: manProductsPath,
                            element: <Man />,
                        },
                        {
                            path: womanProductPaths,
                            element: <Woman />,
                        },
                    ],
                },
                { path: cartPath, element: <Cart /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
export default App;
