import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ContactCSS from "./Contact.module.css"
import ContactModule from '../../Components/ContactModule/ContactModule'

const contact = () => {
  return (
    <div className='subsection'>
        <Navbar/>
        <ContactModule/>
    </div>
  )
}

export default contact