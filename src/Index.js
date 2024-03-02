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

import store from './FoodSwiggyAppBuild/ReduxToolkit/store';
import { Provider } from 'react-redux';
import NewReleasedMovies from "./BookMyShow/components/NewReleasedMovies";

function Index() {
  return (
    <div >
      <Provider store={store}>
      <Header />
     <Outlet />
     </Provider>
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
      },
    ]
  },
  {
    path:"/moviesHome",
    element:<NewReleasedMovies />
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