import React from "react";
import { Link } from "react-router-dom";

import HomeContentCSS from "./HomeContent.module.css";

const HomeContent = () => {
    return (
        <section id={HomeContentCSS.homeSection}>
            <div>
                <img id={HomeContentCSS.headerIMG}></img>
            </div>
            <div>
                <p>
                    Unlocking the mesmerizing world of aviation through the
                    lens, I am your storyteller of the skies. With a passion for
                    capturing the elegance of soaring aircraft, the thrill of
                    aviation events, and the majesty of aerial landscapes, my
                    portfolio is a visual journey that takes you above the
                    clouds and into the heart of aviation's finest moments.
                    <br />
                    <br />
                    Join me as we navigate the boundless beauty of flight, one
                    frame at a time.
                </p>
            </div>
            <div id={HomeContentCSS.collectionG}>
                <div id={HomeContentCSS.categWindows}>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <img></img>
                    </div>
                </div>
                <div>
                    <Link to="" id={HomeContentCSS.collectionLink}>
                        view the complete collection &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeContent;
