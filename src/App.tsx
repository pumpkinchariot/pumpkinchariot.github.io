import React from 'react';
import './App.css';
import PortfolioSectionComponent from "./sections/portfolio/portfolio-section-component";
import ProjectsSectionComponent from "./sections/projects/projects-section-component";
import InterestsSectionComponent from "./sections/interests/interests-section-component";
import HomeSectionComponent from "./sections/landing/home-section-component";
import InfoComponent from "./sections/landing/info-component";
import CertificatesSectionComponent from "./sections/certifactes/certificates-section-component";
import SideMenu from "./sections/side-menu/side-menu";

function App() {

    return (
        <head className={"app flex-column"}>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet"></link>

            <SideMenu></SideMenu>

            <div className={"app-content flex-column"}>
                <HomeSectionComponent>
                    <InfoComponent/>
                </HomeSectionComponent>
                {/*<InterestsSectionComponent/>*/}
                <ProjectsSectionComponent/>
                <PortfolioSectionComponent/>

                <CertificatesSectionComponent></CertificatesSectionComponent>

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
