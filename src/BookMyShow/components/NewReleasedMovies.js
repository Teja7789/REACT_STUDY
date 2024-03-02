import React, { useState, useEffect } from 'react';

function NewReleasedMovies() {
  const [htmlContent, setHtmlContent] = useState('');
  useEffect(() => {
    
    fetch('https://partnersite-api.ticketnew.com/PartnerServiceAPI/api/partners/Movies/gTDZRON2iXS8AGmtJI0Bfw==') 
        // connected 
    // fetch('https://apiproxy.paytm.com/v3/movies/search/cinemas?version=3&site_id=6&channel=HTML5&child_site_id=370&city=chennai')
    // fetch('https://apiproxy.paytm.com/v3/movies/search/movies?version=3&site_id=6&channel=HTML5&child_site_id=370&city=chennai&mdp=1')
      // connected 
    
    // .then(response => response.text()) //text
      .then(response => response.json())
      .then(data =>{setHtmlContent(data)
    console.log(data,"dataApiUrl")
    })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
const renderData = htmlContent?.partnerMovieDTOItems?.map((movieList) => console.log(movieList,"movieList"));

  return (
    // <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> //text
    <section className="text-gray-600 body-font">
 {/* { htmlContent?.partnerMovieDTOItems?.map((data,i) =>{
  <div className="container px-5 py-24 mx-auto" key={i}>
      <div className="flex flex-wrap -m-4" >
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a classNameName="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{data.MovieDescription}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{data.MovieLanguage}</h2>
            <p classNameName="mt-1">{data.MovieLength}</p>
          </div>
        </div>
        </div>
        </div>
 } )}    */}
 {renderData}
        </section>
  );
}

export default NewReleasedMovies;

