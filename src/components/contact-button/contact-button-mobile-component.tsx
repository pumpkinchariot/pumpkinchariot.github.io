import React from "react";
import {FormattedMessage} from "react-intl";
import "./contact-button-mobile-component.css";

const ContactButtonMobileComponent = () => {
    return (
        <div style={{alignSelf: "center", width: "95%", marginTop: "1rem"}}>
            <a href="mailto:ldm.gonda@gmail.com">
                <div className="mobile-contact-button">
                    <FormattedMessage id="home.contact-me" />
                </div>
            </a>
        </div>
    );
}

export default ContactButtonMobileComponent;