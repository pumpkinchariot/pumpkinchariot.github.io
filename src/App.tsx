import React from 'react';
import './App.css';
import PortfolioComponent from "./portfolio/portfolio-component";
import ProjectComponent from "./projects/project-component";
import {Avatar, Chip, Divider, Tooltip} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProjectExperienceComponent from "./projects/project-experience-component";
import TuBsChipComponent from "./tu-bs-chip/tu-bs-chip-component";
import InterestsComponent from "./interests/interests-component";
import LandingComponent from "./landing/landing-component";
import InfoComponent from "./landing/info-component";
import LanguageChoiceComponent from "./language/language-choice-component";
import SocialComponent from "./social/social-component";
import CertificatesComponent from "./certifactes/certificates-component";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SideMenu from "./bread-crumbs/side-menu";

function App() {

    return (
        // <div className={"my-shape"}>
        <head className={"app flex-column"}>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet"></link>

            {/*<SocialComponent></SocialComponent>*/}
            <SideMenu></SideMenu>

            {/*<div style={{position: "fixed", top: "80vh", left: "94vw", zIndex: "9999"}}>*/}
            {/*    <div className={"flex-column"} style={{alignItems: "center", marginTop: "4rem", gap: "0.4rem"}}>*/}
            {/*        <EmailIcon style={{color: "#504e5c"}}></EmailIcon>*/}
            {/*        <LinkedInIcon style={{color: "#504e5c"}}></LinkedInIcon>*/}
            {/*        <InstagramIcon style={{color: "#504e5c"}}></InstagramIcon>*/}
            {/*        <div style={{backgroundColor: "#504e5c", height: "50vh", width: "1px", alignSelf: "center"}}></div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<LanguageChoiceComponent/>*/}
            <div className={"app-content flex-column"}>
                {/*<LandingComponent>*/}
                {/*    <InfoComponent/>*/}
                {/*</LandingComponent>*/}
                {/*<InterestsComponent/>*/}
                <ProjectExperienceComponent/>
                <PortfolioComponent/>

                <CertificatesComponent></CertificatesComponent>

                <div className={"footer-container"} style={{padding: "5rem 0rem 5rem 0rem"}}>

                    Built and designed by Dibo Gonda.
                    <br></br>
                    All rights reserved. ©
                </div>
            </div>
        </head>
    );
}

export default App;
