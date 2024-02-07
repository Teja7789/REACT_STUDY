import { useEffect, useState } from "react";
import resList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const MainContent = () => {
    const [data , setData] = useState(resList);
  return (
    <div className="body">
      <div className="search">Search
      <button onClick={() =>{
        const filteredList = resList.filter(
            (res) => res.data.avgRating > 4
          );
          setData(filteredList);
      }}> Filter Data</button>
      </div>
      <div className="res-container">
        {data.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))
    }
      </div>
    </div>
  );
};
export default MainContent;