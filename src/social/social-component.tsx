import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import React from "react";
import {IconButton} from "@mui/material";
import "./social-component.css";
import GitHubIcon from "@mui/icons-material/GitHub";
const SocialComponent = () => {
    return(
        // <div style={{position: "fixed", top: "80vh", left: "94vw", zIndex: "9999"}}>
            <div className={"flex-column"} style={{alignItems: "center", gap: "0.6rem"}}>
                <IconButton className="icon-button">
                    <GitHubIcon className="social-icon"></GitHubIcon>
                </IconButton>
                <IconButton className="icon-button">
                    <EmailIcon className="social-icon"></EmailIcon>
                </IconButton>
                <IconButton className="icon-button">
                    <LinkedInIcon className="social-icon"></LinkedInIcon>
                </IconButton>
                <IconButton className="icon-button">
                    <InstagramIcon className="social-icon"></InstagramIcon>
                </IconButton>
                <div style={{backgroundColor: "var(--text-highlight)", height: "50vh", width: "1px", alignSelf: "center"}}></div>
            </div>
        // </div>
    );
}

export default SocialComponent;