import React from "react";
import ContactModuleCSS from "./ContactModule.module.css";

const ContactModule = () => {
    return (
        <section id={ContactModuleCSS.contactCSSsection}>
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
        </section>
    );
};

export default ContactModule;
