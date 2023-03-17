import * as React from "react";
import SocialLinkComponent from "../../../components/social/social-link-component";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import "./top-menu-component.css";

interface TopMenuComponent {
    languageComponent: React.ReactNode;
}
const TopMenuComponent = (props: TopMenuComponent) => {

    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        return setSubMenuOpen(!isSubMenuOpen);
    }

    return (
        <div style={{width: "100%"}}>
            <div className="top-menu flex-column">

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

                    <button className="menu-button" onClick={() => toggleSubMenu()}>
                        {isSubMenuOpen ? <CloseIcon className="menu-icon"/> : <LanguageIcon className="menu-icon"/>}
                    </button>
                </div>

            </div>

            {isSubMenuOpen &&
                <div style={{zIndex: "9998", top: "8vh", alignItems: "center"}}
                     className={"top-menu flex-row"}>
                    {props.languageComponent}
                </div>
            }
        </div>

    );

}

export default TopMenuComponent;