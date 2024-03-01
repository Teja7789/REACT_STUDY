import { useEffect, useState } from "react";
import resList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import UserClassParent from "./UserClassParent";
import NewReleasedMovies from "../../BookMyShow/components/NewReleasedMovies";
const MainContent = () => {
  //   const [data , setData] = useState([]);
  //syntax
  // const arr = useState(resList);
  // const data = arr[0];
  // const setData = arr[1];
  const [data, setData] = useState([]); //destrutring the arr;
const [searchData,setSearchData] = useState("");
const[filteredRestaurant,setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const dataJson = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await dataJson.json();

    // Optional Chaining
    setData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    console.log(
      json?.data?.cards[0]?.card?.card?.imageGridCards.info,
      "dataApi"
    );
    setFilteredRestaurant(json?.data?.cards[0]?.card?.card?.imageGridCards?.info );
  };
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body" >
      <div className="search" >
        <input type="text"  value={searchData} onChange={(e) => setSearchData(e.target.value)} /> 
        <button onClick={() =>{
          console.log(searchData)
          const filteredRestaurant = data.filter((searchItem) =>
             searchItem.action.text.toLowerCase().includes(searchData.toLowerCase())
            // console.log(filterSearchData,searchData,searchItem)
          );
          setFilteredRestaurant(filteredRestaurant);
        }
        }> submit</button>
        {/* <button
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.data.avgRating > 4
            );
            setData(filteredList);
          }}
        >
          {" "}
          Filter Data
        </button> */}
      </div>
      <div>

        <UserClassParent />
        {/* <NewReleasedMovies /> */}
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default MainContent;

// import RestaurantCard from "./RestaurantCard";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const MainContent = () => {
//   // Local State Variable - Super powerful variable
//   const [listOfRestaurants, setListOfRestraunt] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

//   const [searchText, setSearchText] = useState("");

//   // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
//   console.log("Body Rendered");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&collection=80378&tags=layout_BAU_Contextual%2Cpoori&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
//     );

//     const json = await data.json();
// console.log(json?.data?.cards,"apiDsata")
//     // Optional Chaining
//     setListOfRestraunt(json?.data?.cards);
//     setFilteredRestaurant(json?.data?.cards);
//   };

//   return (
//   // listOfRestaurants.length === 0 ? (
//   //   <Shimmer />
//   // ) :
   
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             className="search-box"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               // Filter the restraunt cards and update the UI
//               // searchText
//               console.log(searchText);

//               const filteredRestaurant = listOfRestaurants.filter((res) =>
//                 res.data.name.toLowerCase().includes(searchText.toLowerCase())
//               );

//               setFilteredRestaurant(filteredRestaurant);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfRestaurants.filter(
//               (res) => res.data.avgRating > 4
//             );
//             setListOfRestraunt(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       {/* <div className="res-container">
//         {filteredRestaurant.map((restaurant) => (
//           <RestaurantCard key={restaurant.data.id} resData={restaurant} />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default MainContent;
