import {Button} from "@mui/material";
import {FormattedMessage} from "react-intl";
import React from "react";

const ContactButtonMobileComponent = () => {
    return (
        <div style={{}}>
            <Button>
                <FormattedMessage id="home.contact-me" />
            </Button>
        </div>
    );
}

export default ContactButtonMobileComponent;