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
        {images.map((image, index) => (
          <div key={index} className={PhotogridContentCSS.IMGgridContainer}>
            <img src={image.default} alt={`Picture ${index}`} />
          </div>
        ))}
      </div>

      <div className={PhotogridContentCSS.leadingDoubleGridder}>
        {images.slice(0, 2).map((image, index) => (
          <div key={index} className={PhotogridContentCSS.IMGgridContainer}>
            <img src={image.default} alt={`Picture ${index}`} />
          </div>
        ))}
      </div>

      <div className={PhotogridContentCSS.trainlingDoubleGridder}>
        {images.slice(2, 4).map((image, index) => (
          <div key={index} className={PhotogridContentCSS.IMGgridContainer}>
            <img src={image.default} alt={`Picture ${index}`} />
          </div>
        ))}
      </div>

      <div className={PhotogridContentCSS.tripleGridder}>
        {images.slice(4, 7).map((image, index) => (
          <div key={index} className={PhotogridContentCSS.IMGgridContainer}>
            <img src={image.default} alt={`Picture ${index}`} />
          </div>
        ))}
      </div>

      <div className={PhotogridContentCSS.leadingFripleGridder}>
        {images.slice(7, 10).map((image, index) => (
          <div key={index} className={PhotogridContentCSS.IMGgridContainer}>
            <img src={image.default} alt={`Picture ${index}`} />
          </div>
        ))}
        <div className={PhotogridContentCSS.topbottomFripleComplex}>
          {images.slice(10, 12).map((image, index) => (
            <div key={index} className={PhotogridContentCSS.IMGgridContainer}>
              <img src={image.default} alt={`Picture ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className={PhotogridContentCSS.tripleGridder}>
        {images.slice(12, 15).map((image, index) => (
          <div key={index} className={PhotogridContentCSS.IMGgridContainer}>
            <img src={image.default} alt={`Picture ${index}`} />
          </div>
        ))}
      </div>

      <div className={PhotogridContentCSS.trailingFripleGridder}>
        <div className={PhotogridContentCSS.topbottomFripleComplex}>
          {images.slice(15, 17).map((image, index) => (
            <div key={index} className={PhotogridContentCSS.IMGgridContainer}>
              <img src={image.default} alt={`Picture ${index}`} />
            </div>
          ))}
        </div>
        {images.slice(17, 20).map((image, index) => (
          <div key={index} className={PhotogridContentCSS.IMGgridContainer}>
            <img src={image.default} alt={`Picture ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotogridContent;