import React from 'react'
import PhotogridContentCSS from "./PhotogridContent.module.css"

const PhotogridContent = () => {
  return (
    <section id = {PhotogridContentCSS.photogridSection}>
        <div className={PhotogridContentCSS.tripleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
        </div>

        <div className={PhotogridContentCSS.doubleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
        </div>
        
        <div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
        </div>

        <div className={PhotogridContentCSS.tripleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
        </div>
    </section>
  )
}

export default PhotogridContent