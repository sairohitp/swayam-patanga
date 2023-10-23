import React from 'react'
import PhotogridContentCSS from './PhotogridContent.module.css';


const LeadingDouble = (props) => {
  return (
    <div className={PhotogridContentCSS.leadingDoubleGridder}>
        <div className={[PhotogridContentCSS.IMGgridContainer, PhotogridContentCSS.doubleIMGIdentifier].join(" ")}>
            <img src = {props.imgSRC1}/>
        </div>
        <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src = {props.imgSRC2}/>
        </div>
    </div>
  )
}

export default LeadingDouble