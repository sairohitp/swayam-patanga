import React from 'react';
import PhotogridContentCSS from './PhotogridContent.module.css';

const PhotogridContent = () => {
  const images = [];
  for (let i = 1; i <= 26; i++) {
    images.push(require(`../../assets/images/collections/commercial/Picture${i}.jpg`));
  }

  return (
    <section id = {PhotogridContentCSS.photogridSection}>
        <div className={PhotogridContentCSS.tripleGridder}>
        
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {images[0]}/>
            </div>
            <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src = {images[1]}/>
            </div>
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {images[2]}/>
            </div>
    
        </div>
        
        <div className={PhotogridContentCSS.leadingDoubleGridder}>
            <div className={[PhotogridContentCSS.IMGgridContainer, PhotogridContentCSS.doubleIMGIdentifier].join(" ")}>
                <img src = {images[3]}/>
            </div>
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {images[4]}/>
            </div>
        </div>
        
        <div className={PhotogridContentCSS.trainlingDoubleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {images[5]}/>
            </div>
            <div className={[PhotogridContentCSS.IMGgridContainer, PhotogridContentCSS.doubleIMGIdentifier].join(" ")}>
                <img src = {images[6]}/>
            </div>
        </div>

        <div className={PhotogridContentCSS.tripleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {images[7]}/>
            </div>
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {images[8]}/>
            </div>
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {images[9]}/>
            </div>
        </div>

        <div className={PhotogridContentCSS.leadingFripleGridder}>
            <div className={[PhotogridContentCSS.IMGgridContainer, PhotogridContentCSS.fripleIMGIdentifier].join(" ")}>
                <img src = {images[10]}/>
            </div>                
            <div className={PhotogridContentCSS.topbottomFripleComplex}>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src = {images[11]}/>
                </div>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src = {images[12]}/>
                </div>
            </div>
        </div>

        <div className={PhotogridContentCSS.tripleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {images[13]}/>
            </div>
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {images[14]}/>
            </div>
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src = {images[15]}/>
            </div>
        </div>

        <div className={PhotogridContentCSS.trailingFripleGridder}>
            <div className={PhotogridContentCSS.topbottomFripleComplex}>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src = {images[16]}/>
                </div>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src = {images[17]}/>
                </div>
            </div>
            <div className={[PhotogridContentCSS.IMGgridContainer, PhotogridContentCSS.fripleIMGIdentifier].join(" ")}>
                <img src = {images[18]}/>
            </div>                
        </div>
        
    </section>
  )
}

export default PhotogridContent