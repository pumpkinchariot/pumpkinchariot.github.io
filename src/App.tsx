import React, {useEffect, useState} from 'react';
import './App.css';
import PortfolioSectionComponent from "./sections/portfolio/portfolio-section-component";
import ProjectsSectionComponent from "./sections/projects/projects-section-component";
import InterestsSectionComponent from "./sections/interests/interests-section-component";
import HomeSectionComponent from "./sections/home/home-section-component";
import InfoComponent from "./sections/home/info-component";
import CertificatesSectionComponent from "./sections/certifactes/certificates-section-component";
import SideMenuComponent from "./sections/side-menu/side-menu";
import TopMenuComponent from "./sections/mobile/top-menu/top-menu-component";
import ProjectsSectionMobileComponent
    from "./sections/mobile/mobile-projects/projects-section-mobile-component";
import PortfolioSectionMobileComponent from "./sections/mobile/mobile-portfolio/portfolio-section-mobile-component";

function App() {
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <head className={"app flex-column"}>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet"></link>

            {isMobile ? <TopMenuComponent/> : <SideMenuComponent/>}

            <div className={"app-content flex-column"}>
                <HomeSectionComponent>
                    <InfoComponent/>
                </HomeSectionComponent>
                {/*<InterestsSectionComponent/>*/}

                {isMobile ? <ProjectsSectionMobileComponent/> : <ProjectsSectionComponent/>}
                {/*{isMobile ? <PortfolioSectionMobileComponent/> : <PortfolioSectionComponent/>}*/}

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
