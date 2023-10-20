import React from "react";
import CollectionClassifierCSS from "./CollectionClassifier.module.css";

const CollectionClassifier = () => {
    return (
        <section id={CollectionClassifierCSS.collectionSection}>
            <div>
                <div className = {CollectionClassifierCSS.collectionPageText}>Aviation Photography Collection</div>
                <div className={CollectionClassifierCSS.collectionIMG}>
                    <img></img>
                </div>
                <div className={CollectionClassifierCSS.collectionIMG}>
                    <img></img>
                </div>
            </div>
        </section>
    );
};

export default CollectionClassifier;
