import React from "react";
import { Link } from "react-router-dom";
import NavCSS from "./Navbar.module.css";

import SitePFP from "../../assets/images/profile/pfp.jpg";

const Navbar = () => {
    return (
        <nav>
            <div>
                <div id={NavCSS.navTop}>
                    <img src={SitePFP} id={NavCSS.navImg} />
                    <div>
                        <Link to="/" id={NavCSS.navTitle}>
                            SWYAM PATANGA
                        </Link>
                    </div>
                </div>
                <div id={NavCSS.children}>
                    
                    {/* <Link to="/">
                        <div className={NavCSS.navButtons}>about</div>
                    </Link> */}
                    
                    <Link to="/Collection">
                        <div className={NavCSS.navButtons}>collections</div>
                    </Link>
                    <Link to="/Contact">
                        <div className={NavCSS.navButtons}>contact</div>
                    </Link>
                    <Link to="/Collection">
                        <div className={NavCSS.navButtons}>support</div>
                    </Link>
                    
                </div>
            </div>
            <div id={NavCSS.navBottom}>
                <div id={NavCSS.navSocials}>
                    <Link
                        to={{ pathname: "www.instagram.com/sairohitp" }}
                        target="_blank"
                    >
                        <i className="fa-brands fa-instagram fa"></i>
                    </Link>
                    <i class="fa-solid fa-plane fa"></i>
                    <span>𝕏</span>
                    <i className="fa-regular fa-envelope fa"></i>
                </div>
                <div id={NavCSS.salutation}>
                    <div>© swyam patanga</div>
                    <div>aviation photography</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
