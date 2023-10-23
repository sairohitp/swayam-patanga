import React from "react";
import PhotogridContentCSS from "./PhotogridContent.module.css";

import TripleGrid from "./TripleGrid";
import LeadingDouble from "./LeadingDouble";
import TrailingDouble from "./TrailingDouble";
import LeadingFriple from "./LeadingFriple";
import TrailingFriple from "./TrailingFriple";

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
                imgSRC2={images[1]}
                imgSRC3={images[2]}
            />

            <LeadingDouble 
                imgSRC1={images[3]} 
                imgSRC2={images[4]} 
            />

            <TrailingDouble
                imgSRC1={images[5]} 
                imgSRC2={images[6]} 
            />

            <TripleGrid
                imgSRC1={images[7]}
                imgSRC2={images[8]}
                imgSRC3={images[9]}
            />
            
            <LeadingFriple
                imgSRC1={images[10]}
                imgSRC2={images[11]}
                imgSRC3={images[12]}
            />

            <TripleGrid
                imgSRC1={images[13]}
                imgSRC2={images[14]}
                imgSRC3={images[15]}
                />
            

            <TrailingFriple
                imgSRC1={images[16]}
                imgSRC2={images[17]}
                imgSRC3={images[18]}
            />

            <LeadingDouble 
                imgSRC1={images[19]} 
                imgSRC2={images[20]} 
            />

            <TripleGrid
                imgSRC1={images[21]}
                imgSRC2={images[22]}
                imgSRC3={images[23]}
            />
            
            <TrailingDouble
                imgSRC1={images[24]}
                imgSRC2={images[25]} 
            />


        </section>
    );
};

export default PhotogridContent;
