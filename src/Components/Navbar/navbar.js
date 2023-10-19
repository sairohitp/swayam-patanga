import React from "react";
import { Link } from "react-router-dom";
import NavCSS from "./Navbar.module.css";

const Navbar = () => {
    return (
            <div className="subsection">
        <nav>
                <div>
                    <div id = {NavCSS.navTop}>
                        <img src="" id={NavCSS.navImg} />
                        <div>
                            <Link to="" id = {NavCSS.navTitle}>SWAYAM PATANGA</Link>
                        </div>
                    </div>
                    <div>
                        
                        <div>
                            <Link to=""></Link>
                        </div>
                        <div>
                            <Link to=""></Link>
                        </div>
                        <div>
                            <Link to=""></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div>{/* iconset */}</div>
                    <div>{/* salutation */}</div>
                </div>
        </nav>
            </div>
    );
};

export default Navbar;
