import React, {useEffect, useState} from 'react';
import ProjectsSectionComponent from "./sections/projects/projects-section-component";
import HomeSectionComponent from "./sections/home/home-section-component";
import CertificatesSectionComponent from "./sections/certifactes/certificates-section-component";
import SideMenuComponent from "./sections/side-menu/side-menu";
import TopMenuComponent from "./sections/mobile/top-menu/top-menu-component";
import ProjectsSectionMobileComponent
    from "./sections/mobile/mobile-projects/projects-section-mobile-component";
import {IntlProvider} from "react-intl";
import en from "translations/en.json";
import de from "translations/de.json";
import fr from "translations/fr.json";
import LanguageChoiceComponent from "./components/language/language-selection-component";
import ContactButtonComponent from "./components/contact-button/contact-button-component";
import ContactButtonMobileComponent from "./components/contact-button/contact-button-mobile-component";
import LanguageSelectionComponent from "./components/language/language-selection-component";

import './App.css';

function App() {
    const [isMobile, setIsMobile] = useState(false);
    const [locale, setLocale] = useState('en');

    const messages: any = {
        en: en,
        de: de,
        fr: fr
    };

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
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet"></link>

            <IntlProvider locale={locale} messages={messages[locale]}>


                {isMobile ? <TopMenuComponent
                                languageComponent={<LanguageSelectionComponent setLocale={setLocale}/>}
                            /> : <SideMenuComponent/>}

                <div className={"app-content flex-column"}>
                    <HomeSectionComponent
                        isLocaleFrench={locale === "fr"}
                        languageComponent={!isMobile && <LanguageChoiceComponent setLocale={setLocale}/>}
                        contactComponent={isMobile ? <ContactButtonMobileComponent/> : <ContactButtonComponent/>}/>
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
            </IntlProvider>

        </head>
    );
}

export default App;
