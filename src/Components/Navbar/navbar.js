import React from "react";
import { Link } from "react-router-dom";
import NavCSS from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className="subsection">
            <nav>
                <div>
                    <div id={NavCSS.navTop}>
                        <img src="" id={NavCSS.navImg} />
                        <div>
                            <Link to="" id={NavCSS.navTitle}>
                                MAYAWS AGNATAP
                            </Link>
                        </div>
                    </div>
                    <div id={NavCSS.children}>
                        <div>
                            <Link to="">about</Link>
                        </div>
                        <div>
                            <Link to="">collection</Link>
                        </div>
                        <div>
                            <Link to="">contact</Link>
                        </div>
                        <div>
                            <Link to="">support ❤️</Link>
                        </div>
                    </div>
                </div>
                <div id = {NavCSS.navBottom}>
                    <div id={NavCSS.navSocials}>
                        <i className="fa-brands fa-instagram fa"></i>
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
        </div>
    );
};

export default Navbar;
