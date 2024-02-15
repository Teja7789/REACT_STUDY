import React from 'react'
import ReactDOM from "react-dom/client";
import Header from './FoodSwiggyAppBuild/SwiggyFoodApp/Header';
// import './FoodSwiggyAppBuild/SwiggyFoodApp/App.css'; // common css for Header and MainContent
import MainContent from './FoodSwiggyAppBuild/SwiggyFoodApp/MainContent';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './FoodSwiggyAppBuild/Footer';
import RestaurantCard from './FoodSwiggyAppBuild/SwiggyFoodApp/RestaurantCard';
import Courosel from './FoodSwiggyAppBuild/Courosel';
import NotFound from './FoodSwiggyAppBuild/SwiggyFoodApp/NotFound';

function Index() {
  return (
    <div>
      <Header />
     <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Index />,
    errorElement:<NotFound />, //No route match page
    children:[  //child routes
      {
        path:"/",
        element:<MainContent />,
        
      },
      {
        path:"/restaurantCard",
        element: <RestaurantCard />
      },
      {
        path:"/courosel",
        element: <Courosel />
      }
    ]
  },
  {
    path:"/footer",
    element:<Footer />
  },
  // {    //id-map
  //   path:"/restaurantCard/:id",
  //   element:<RestaurantCard />
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);