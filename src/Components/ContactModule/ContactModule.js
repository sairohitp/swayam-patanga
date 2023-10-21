import React from "react";
import ContactModuleCSS from "./ContactModule.module.css";

const ContactModule = () => {
    return (
        <div id={ContactModuleCSS.contactCSSsection}>
            <div id={ContactModuleCSS.contactTitle}>get in touch with me!</div>
            <div id={ContactModuleCSS.contactCSScontent}>
                <input
                    className={ContactModuleCSS.field}
                    type="text"
                    placeholder="Name"
                />
                <input
                    className={ContactModuleCSS.field}
                    type="text"
                    placeholder="Email"
                />
                <textarea
                    className={ContactModuleCSS.field}
                    type="text"
                    placeholder="Message"
                ></textarea>
                <div>
                    <button id={ContactModuleCSS.submitbutton}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactModule;
