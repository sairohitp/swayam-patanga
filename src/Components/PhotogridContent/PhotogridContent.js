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
        
        <div className={PhotogridContentCSS.leadingDoubleGridder}>
            <div className={[PhotogridContentCSS.IMGgridContainer, PhotogridContentCSS.doubleIMGIdentifier].join(" ")}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
        </div>
        
        <div className={PhotogridContentCSS.trainlingDoubleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={[PhotogridContentCSS.IMGgridContainer, PhotogridContentCSS.doubleIMGIdentifier].join(" ")}><img></img></div>
        </div>

        <div className={PhotogridContentCSS.tripleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
        </div>

        <div className={PhotogridContentCSS.leadingFripleGridder}>
            <div className={[PhotogridContentCSS.IMGgridContainer, PhotogridContentCSS.fripleIMGIdentifier].join(" ")}><img></img></div>                
            <div className={PhotogridContentCSS.topbottomFripleComplex}>
                <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
                <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            </div>
        </div>

        <div className={PhotogridContentCSS.tripleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
        </div>

        <div className={PhotogridContentCSS.trailingFripleGridder}>
            <div className={PhotogridContentCSS.topbottomFripleComplex}>
                <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
                <div className={PhotogridContentCSS.IMGgridContainer}><img></img></div>
            </div>
            <div className={[PhotogridContentCSS.IMGgridContainer, PhotogridContentCSS.fripleIMGIdentifier].join(" ")}><img></img></div>                
        </div>
    </section>
  )
}

export default PhotogridContent