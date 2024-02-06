import React from 'react'
import './MainIndex.css'

const Header = () => {
    return (
        <div className='navbar'>
            <div className='navbarLogo'>Logo</div>
            <div className='navbarListItems'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
const SearchBar = () => {
    return(
        <div className='topnav'>
            {/* <h1>Search Items</h1> */}
              <input type="text" placeholder="Search.." />
              <button onClick="handleSearch" >SearchIcon</button>

        </div>
    )
}
const Card = () => {
    return (

        <div class="centered">

            <section class="cards">

                <article class="card">
                    <p>content for card one</p>
                </article>

                <article class="card">
                    <p>content for card two</p>
                </article>

                <article class="card">
                    <p>content for card three</p>
                </article>

                <article class="card">
                    <p>content for card four</p>
                </article>
                <article class="card">
                    <p>content for card five</p>
                </article>
                <article class="card">
                    <p>content for card six</p>
                </article>

            </section>
        </div>
    )
}
function MainIndex() {
    return (
        <div>
            
            <Header />
            <SearchBar/>
            <Card />
        </div>
    )
}

export default MainIndex