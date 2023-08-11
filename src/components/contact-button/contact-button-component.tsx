import {FormattedMessage} from "react-intl";
import React from "react";
import "./contact-button-component.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const ContactButtonComponent = () => {
    return (
        <div>
            <a href="mailto:ldm.gonda@gmail.com">
                <div className="contact-button">
                    <FormattedMessage id="home.contact-me" />
                </div>
            </a>
        </div>
    );
}

export default ContactButtonComponent;