import React from 'react'
import { Link } from 'react-router-dom'
import NavCSS from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div>
      <div>
        <div><img src = "" id = {NavCSS.navImg}/></div>
        <div>
          <div><Link to = ""></Link></div>
          <div><Link to = ""></Link></div>
          <div><Link to = ""></Link></div>
          <div><Link to = ""></Link></div>
        </div>
      </div>
      <div>
        <div>
          {/* iconset */}
        </div>
        <div>
          {/* salutation */}
        </div>
      </div>
    </div>
  )
}

export default Navbar