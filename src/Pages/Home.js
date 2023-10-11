import React from 'react'
import Navbar from '../Component/Navbar'
import Searchbar2 from '../Component/Searchbarr'
import Cards from '../Component/Cards'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div>
    <Navbar></Navbar>
    <div className='search-bar'>
    <Searchbar2></Searchbar2>
    </div>
    <Cards></Cards>
    <Footer></Footer>
      
    </div>
  )
}

export default Home
