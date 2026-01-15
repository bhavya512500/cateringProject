import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import AboutUs from "../Components/About/AboutUs";
import Services from "../Components/Services/Services";
import ContactUs from "../Components/contact/ContactUs";
import Menus from "../Components/menu/Menus";
import AdminPanel from "../Components/AdminPanel/AdminPanel";
const RoutingArea = () => {
  const ways = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <AboutUs />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path:"/menus", element:<Menus/>
        },
        {
          path:"/admin", element:<AdminPanel/>
        }
      ],
    },
  ]);
  return <RouterProvider router={ways}></RouterProvider>;
};

export default RoutingArea;
