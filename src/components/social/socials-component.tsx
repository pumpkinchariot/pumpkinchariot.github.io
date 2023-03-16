import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import React from "react";
import {IconButton} from "@mui/material";
import "./socials-component.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import SocialLinkComponent from "./social-link-component";

const SocialsComponent = () => {
    return (
        <div className={"flex-column"} style={{alignItems: "end", gap: "0.6rem", marginRight: "0.2rem"}}>
            <SocialLinkComponent link={"https://github.com/pumpkinchariot"}>
                <GitHubIcon className="social-icon"></GitHubIcon>
            </SocialLinkComponent>

            <SocialLinkComponent link={"mailto:ldm.gonda@gmail.com"}>
                <EmailIcon className="social-icon"></EmailIcon>
            </SocialLinkComponent>

            {/*<SocialLinkComponent link={""}>*/}
            {/*    <LinkedInIcon className="social-icon"></LinkedInIcon>*/}
            {/*</SocialLinkComponent>*/}

            <SocialLinkComponent link={"https://www.instagram.com/didi.o3o/"}>
                <InstagramIcon className="social-icon"></InstagramIcon>
            </SocialLinkComponent>

            <div className="socials-line"></div>
        </div>
    );
}

export default SocialsComponent;