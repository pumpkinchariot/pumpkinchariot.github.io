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
import InterestsSectionComponent from "./sections/interests/interests-section-component";

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


    // const [divHeight, setDivHeight] = useState(200);
    const [scrollValue, setScrollValue] = useState(0);

    // const handleScroll = () => {
    //     const scrollPosition = window.scrollY;
    //     console.log(scrollPosition)
    //
    //     setDivHeight(200 + scrollPosition); // Beispielhafte Berechnung der Höhe basierend auf der Scrollposition
    // };

    useEffect(() => {
        window.addEventListener('scroll', () => setScrollValue(window.scrollY));

        return () => {
            window.removeEventListener('scroll', () => setScrollValue(window.scrollY));
        };
        console.log("global scroll value", scrollValue);
    }, []);


    return (
        <div className={"app flex-column"}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                {isMobile ? <TopMenuComponent
                                languageComponent={<LanguageSelectionComponent setLocale={setLocale}/>}
                            /> : <SideMenuComponent/>}

                <div className={"app-content flex-column"}>

                    {/*<div*/}
                    {/*    className="scrollable-div"*/}
                    {/*    // style={{ width: `${divHeight}px` , backgroundColor: "yellow", height: "100px", margin: "100px"}}*/}
                    {/*>*/}
                    {/*</div>*/}

                    <HomeSectionComponent
                        scrollValue={scrollValue}
                        isLocaleFrench={locale === "fr"}
                        languageComponent={!isMobile && <LanguageChoiceComponent setLocale={setLocale}/>}
                        contactComponent={isMobile ? <ContactButtonMobileComponent/> : <ContactButtonComponent/>}/>
                    <InterestsSectionComponent scrollValue={scrollValue}/>

                    {isMobile ? <ProjectsSectionMobileComponent/> : <ProjectsSectionComponent scrollValue={scrollValue}/>}
                    <CertificatesSectionComponent></CertificatesSectionComponent>

                    <div className="footer-container">
                        Built and designed by Dibo Gonda.
                        <br></br>
                        All rights reserved. ©
                    </div>
                </div>
            </IntlProvider>

        </div>
    );
}

export default App;
