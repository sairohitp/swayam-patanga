import React from "react";
import CollectionClassifierCSS from "./CollectionClassifier.module.css";
import { Link } from "react-router-dom";

const CollectionClassifier = () => {
    return (
        <section id={CollectionClassifierCSS.collectionSection}>
            <div>
                <div className={CollectionClassifierCSS.collectionPageText}>
                    Aviation Photography Collection
                </div>
                <div className={CollectionClassifierCSS.collectionIMG}>
                    <img></img>
                    <div className={CollectionClassifierCSS.categoryLink}>
                        <Link to = "/Photogrid">Military &rarr;</Link>
                    </div>
                </div>
                <div className={CollectionClassifierCSS.collectionIMG}>
                    <img></img>
                    <div className={CollectionClassifierCSS.categoryLink}>
                        <Link to = "">Commercial &rarr;</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionClassifier;
