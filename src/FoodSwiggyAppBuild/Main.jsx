import React, { useState } from 'react'
import HeaderMain from './HeaderMain'
import Footer from './Footer'
import MainContent from './MainContent'
import Courosel from './Courosel'

function Main() {


  return (
    <div>
<HeaderMain/>
      <Courosel/>
{/* <MainContent /> */}


<Footer/>
    </div>
  )
}

export default Main

{/* <h1 class="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
  TW elements
</h1> */}
{/* <div class="border-t border-gray-200">
    <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
          <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
          <br class="lg:block hidden"/>waistcoat green juice
        </p>
      </div>
      </div>
      </div> */}