import React from 'react'
import { Link } from 'react-router-dom'

import HomeContentCSS from "./HomeContent.module.css"

const HomeContent = () => {
  return (
    <section id = {HomeContentCSS.homeSection}>
        <div>
            <img id = {HomeContentCSS.headerIMG}></img>
        </div>
        <div>
            <p></p>
        </div>
        <div>
            <div><img></img></div>
            <div><img></img></div>
        </div>
        <div>
            <Link to = "" id = {HomeContentCSS.collectionLink}>view the complete collection &rarr;</Link>
        </div>
    </section>
  )
}

export default HomeContent