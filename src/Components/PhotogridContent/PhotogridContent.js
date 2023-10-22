import React from 'react';
import PhotogridContentCSS from './PhotogridContent.module.css';

const PhotogridContent = () => {
  const images = [];
  for (let i = 1; i <= 26; i++) {
    images.push(require(`../../assets/images/collections/commercial/Picture${i}.jpg`));
  }

  return (
    <section id={PhotogridContentCSS.photogridSection}>

      <div className={PhotogridContentCSS.tripleGridder}>
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
      </div>

      <div className={PhotogridContentCSS.leadingDoubleGridder}>
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>        
      </div>

      <div className={PhotogridContentCSS.trainlingDoubleGridder}>
        
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
        
      </div>

      <div className={PhotogridContentCSS.tripleGridder}>
        
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
        
      </div>

      <div className={PhotogridContentCSS.leadingFripleGridder}>
        
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
        
            <div className={PhotogridContentCSS.topbottomFripleComplex}>
                
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={""} />
                </div>
                
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={""} />
                </div>
                
            </div>
      </div>

      <div className={PhotogridContentCSS.tripleGridder}>
        
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
        
      </div>

      <div className={PhotogridContentCSS.trailingFripleGridder}>
        <div className={PhotogridContentCSS.topbottomFripleComplex}>        
            <div className={PhotogridContentCSS.IMGgridContainer}>
              <img src={""} />
            </div>          
        </div>
        
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
        
          <div className={PhotogridContentCSS.IMGgridContainer}>
            <img src={""} />
          </div>
        
      </div>
    </section>
  );
};

export default PhotogridContent;