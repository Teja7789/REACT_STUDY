// import React, { useEffect, useState } from 'react'

// function NewReleasedMovies() {
//     const [moviesNewList,setNewMoviesList] = useState([]);
// useEffect(()=>{
// fetch('https://res.cloudinary.com/in.bookmyshow.com/api/explore/v1/discover/home/hyderabad?region=HYD&scrollId=af8ccb21-0ebd-4820-b7f3-574593738253&pageId=1&lat=17.385044&lon=78.486671')
// .then(response => response.json())
// .then(moviesNewList => {setNewMoviesList(moviesNewList);
// console.log(moviesNewList,"moviesNewList");
// }

// )
// },[])
// console.log(moviesNewList,"check");
//   return (
//     <div>
//         {/* {moviesNewList} */}
//     </div>
//   )
// }

// export default NewReleasedMovies

// import React,{ useEffect, useState } from "react"

// function NewReleasedMovies() {
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     fetch("https://in.bookmyshow.com/api/explore/v1/discover/home/hyderabad?region=HYD&scrollId=af8ccb21-0ebd-4820-b7f3-574593738253&pageId=1&lat=17.385044&lon=78.486671    ", {
//         headers: {
//           'x-app-code': 'your_app_code_here'
//         }
//       })
//       .then(response => response.json())
//       .then(json => setUsers(json))
//   }, [])
// console.log(users,"usersApi");
//   return (
//     <div className="App">

//     </div>
//   )
// }

// export default NewReleasedMovies

import React, { useState, useEffect } from 'react';

function MovieList() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('https://private-anon-febdfeb1a0-moviebuffapi.apiary-mock.com/api/v2/resources/movies?limit=50&page=1')
      .then(response => response.text())
      .then(data =>{setHtmlContent(data)
    console.log(data,"dataApiUrl")
    })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default MovieList;
