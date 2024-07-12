import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
    
};

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />, 
            children: [
                {
                    path: "/",
                    element: <Body />, 
                },
                {
                    path: "/about",
                    element: <AboutUs />, 
                },
                {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu />, 
                }

            ],
            errorElement: <Error />,
        },

    ]
)

const Footer = () => {
    return (
        <div className="footer-container">
            
        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);