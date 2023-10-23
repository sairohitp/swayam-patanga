import React from "react";
import PhotogridContentCSS from "./PhotogridContent.module.css";

const LeadingFriple = (props) => {
    return (
        <div className={PhotogridContentCSS.leadingFripleGridder}>
            <div
                className={[
                    PhotogridContentCSS.IMGgridContainer,
                    PhotogridContentCSS.fripleIMGIdentifier,
                ].join(" ")}
            >
                <img src={props.imgSRC1} />
            </div>
            <div className={PhotogridContentCSS.topbottomFripleComplex}>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={props.imgSRC2} />
                </div>
                <div className={PhotogridContentCSS.IMGgridContainer}>
                    <img src={props.imgSRC3} />
                </div>
            </div>
        </div>
    );
};

export default LeadingFriple;
