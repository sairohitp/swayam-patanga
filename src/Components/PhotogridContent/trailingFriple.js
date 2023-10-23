import React from "react";
import PhotogridContentCSS from "./PhotogridContent.module.css";

const TrailingFriple = (props) => {
    return (
        <div className={PhotogridContentCSS.trailingFripleGridder}>
            <div className={PhotogridContentCSS.topbottomFripleComplex}>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={props.imgSRC1} />
                </div>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={props.imgSRC2} />
                </div>
            </div>
            <div
                className={[
                    PhotogridContentCSS.IMGgridContainer,
                    PhotogridContentCSS.fripleIMGIdentifier,
                ].join(" ")}
            >
                <img src={props.imgSRC3} />
            </div>
        </div>
    );
};

export default TrailingFriple;
