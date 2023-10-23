import React from "react";
import PhotogridContentCSS from "./PhotogridContent.module.css";

const TrailingDouble = (props) => {
    return (
        <div className={PhotogridContentCSS.trainlingDoubleGridder}>
            <div className={PhotogridContentCSS.IMGgridContainer}>
                <img src={props.imgSRC1} />
            </div>
            <div
                className={[
                    PhotogridContentCSS.IMGgridContainer,
                    PhotogridContentCSS.doubleIMGIdentifier,
                ].join(" ")}
            >
                <img src={props.imgSRC2} />
            </div>
        </div>
    );
};

export default TrailingDouble;
