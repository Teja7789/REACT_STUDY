import React from 'react'
import ReactDOM from "react-dom/client";
import Header from './FoodSwiggyAppBuild/SwiggyFoodApp/Header';
import './FoodSwiggyAppBuild/SwiggyFoodApp/App.css'; // common css for Header and MainContent
import MainContent from './FoodSwiggyAppBuild/SwiggyFoodApp/MainContent';
function Index() {
  return (
    <div>
      <Header />
     <MainContent />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);