import React from "react";

const TrailingFriple = () => {
    return (
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
    );
};

export default TrailingFriple;
