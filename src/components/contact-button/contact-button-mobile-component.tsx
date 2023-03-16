import {Button} from "@mui/material";
import {FormattedMessage} from "react-intl";
import React from "react";
import "./contact-button-mobile-component.css";

const ContactButtonMobileComponent = () => {
    return (
        <div style={{padding: "0.4rem", marginTop: "0.8rem"}}>
            <button className="mobile-contact-button">
                <FormattedMessage id="home.contact-me"/>
            </button>
        </div>
    );
}

export default ContactButtonMobileComponent;