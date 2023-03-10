import BreadCrumbsComponent from "../../../components/bread-crumbs/bread-crumbs-component";
import SocialsComponent from "../../../components/social/socials-component";
import * as React from "react";
import "./top-menu-component.css";
import SocialLinkComponent from "../../../components/social/social-link-component";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

const TopMenuComponent = () => {
    return (
        <div style={{height: "8vh", width: "100%", position: "fixed", zIndex: "9999", gap: "0.5rem"}}
             className="top-menu flex-column">

            <div className="flex-row" style={{gap: "0.5rem", marginRight: "1rem", justifyContent: "flex-end"}}>
                <div className="button-border">
                    <SocialLinkComponent link={"https://github.com/pumpkinchariot"}>
                        <GitHubIcon className="social-icon"></GitHubIcon>
                    </SocialLinkComponent>
                </div>

                <div className="button-border">
                    <SocialLinkComponent link={"mailto:ldm.gonda@gmail.com"}>
                        <EmailIcon className="social-icon"></EmailIcon>
                    </SocialLinkComponent>
                </div>

                {/*<SocialLinkComponent link={""}>*/}
                {/*    <LinkedInIcon className="social-icon"></LinkedInIcon>*/}
                {/*</SocialLinkComponent>*/}

                <div className="button-border">
                    <SocialLinkComponent link={"https://www.instagram.com/didi.o3o/"}>
                        <InstagramIcon className="social-icon"></InstagramIcon>
                    </SocialLinkComponent>
                </div>
            </div>

        </div>

    );

}

export default TopMenuComponent;