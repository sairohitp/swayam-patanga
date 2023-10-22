import React from "react";
import { Link } from "react-router-dom";
import NavCSS from "./Navbar.module.css";

import SitePFP from "../../assets/images/profile/pfp.jpg"

const Navbar = () => {
    return (
            <nav>
                <div>
                    <div id={NavCSS.navTop}>
                        <img src={SitePFP} id={NavCSS.navImg} />
                        <div>
                            <Link to="/" id={NavCSS.navTitle}>
                                MAYAWS AGNATAP
                            </Link>
                        </div>
                    </div>
                    <div id={NavCSS.children}>
                        <div>
                            <Link to="/">about</Link>
                        </div>
                        <div>
                            <Link to="/Collection">collection</Link>
                        </div>
                        <div>
                            <Link to="/Contact">contact</Link>
                        </div>
                        <div>
                            <Link to="">support ❤️</Link>
                        </div>
                    </div>
                </div>
                <div id = {NavCSS.navBottom}>
                    <div id={NavCSS.navSocials}>
                        <Link to = {{pathname: "www.instagram.com/sairohitp"}} target="_blank"><i className="fa-brands fa-instagram fa"></i></Link>
                        <i class="fa-solid fa-plane fa"></i>
                        <i className="fa-brands fa-twitter fa"></i>                        
                        <i className="fa-regular fa-envelope fa"></i>
                    </div>
                    <div id = {NavCSS.salutation}>
                        <div>© swyam patanga</div>
                        <div>aesth. aviation photography</div>
                    </div>
                </div>
            </nav>
        
    );
};

export default Navbar;
