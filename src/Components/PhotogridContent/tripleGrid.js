import React from 'react'
import PhotogridContentCSS from './PhotogridContent.module.css';

const tripleGrid = (props) => {
    
  return (
    <div className={PhotogridContentCSS.tripleGridder}>
        
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {props.imgSRC1}/>
            </div>
            <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src = {props.imgSRC2}/>
            </div>
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {props.img3SRC}/>
            </div>
    
    </div>
  )
}

export default tripleGrid