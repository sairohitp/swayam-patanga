import React from 'react'
import HomeCSS from "./Home.module.css"

import Navbar from '../../Components/Navbar/Navbar'
import HomeContent from '../../Components/HomeContent/HomeContent'

const Home = () => {
  return (
    <div className="subsection section">
      <Navbar/>
      <HomeContent/>
    </div>
  )
}

export default Home