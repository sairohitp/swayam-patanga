import React from "react";
import PhotogridContentCSS from "./PhotogridContent.module.css";

import TripleGrid from "./TripleGrid";
import LeadingDouble from "./LeadingDouble";
import TrailingDouble from "./trailingDouble";

const PhotogridContent = () => {
    const images = [];
    for (let i = 1; i <= 26; i++) {
        images.push(
            require(`../../assets/images/collections/commercial/Picture${i}.jpg`)
        );
    }

    return (
        <section id={PhotogridContentCSS.photogridSection}>
            <TripleGrid
                imgSRC1={images[0]}
                imgSRC2={images[0]}
                imgSRC3={images[0]}
            />

            <LeadingDouble 
                imgSRC1={images[0]} 
                imgSRC2={images[0]} 
            />

            <TrailingDouble
                imgSRC1={images[0]} 
                imgSRC2={images[0]} 
            />

            <div className={PhotogridContentCSS.tripleGridder}>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={images[7]} />
                </div>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={images[8]} />
                </div>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={images[9]} />
                </div>
            </div>

            <div className={PhotogridContentCSS.leadingFripleGridder}>
                <div
                    className={[
                        PhotogridContentCSS.IMGgridContainer,
                        PhotogridContentCSS.fripleIMGIdentifier,
                    ].join(" ")}
                >
                    <img src={images[10]} />
                </div>
                <div className={PhotogridContentCSS.topbottomFripleComplex}>
                    <div className={PhotogridContentCSS.IMGgridContainer}>
                        <img src={images[11]} />
                    </div>
                    <div className={PhotogridContentCSS.IMGgridContainer}>
                        <img src={images[12]} />
                    </div>
                </div>
            </div>

            <div className={PhotogridContentCSS.tripleGridder}>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={images[13]} />
                </div>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={images[14]} />
                </div>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={images[15]} />
                </div>
            </div>

            <div className={PhotogridContentCSS.trailingFripleGridder}>
                <div className={PhotogridContentCSS.topbottomFripleComplex}>
                    <div className={PhotogridContentCSS.IMGgridContainer}>
                        <img src={images[16]} />
                    </div>
                    <div className={PhotogridContentCSS.IMGgridContainer}>
                        <img src={images[17]} />
                    </div>
                </div>
                <div
                    className={[
                        PhotogridContentCSS.IMGgridContainer,
                        PhotogridContentCSS.fripleIMGIdentifier,
                    ].join(" ")}
                >
                    <img src={images[18]} />
                </div>
            </div>
        </section>
    );
};

export default PhotogridContent;
