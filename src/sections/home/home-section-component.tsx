import React, {ReactNode, useEffect, useState} from "react";
// import {styled} from '@mui/material/styles';
// import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import {FormattedMessage} from "react-intl";
import "./home-section-component.css";
import "../../animations.css";

interface HomeSectionComponentProps {
    scrollValue: number;
    isLocaleFrench: boolean;
    languageComponent: ReactNode;
    contactComponent: ReactNode;
}

const HomeSectionComponent = (props: HomeSectionComponentProps) => {

    const [opacityValue, setOpacityValue] = useState(1);

    useEffect(() => {
        setOpacityValue(1 - (props.scrollValue / 300))

    }, [props.scrollValue])

    return (
        <section id="home" className={"section-container home-container flex-column"}>
            <div className={"home-component flex-column"} style={{opacity: `${opacityValue}`}}>
                {props.languageComponent}

                <div className="home-top-spacer"></div>

                <div className={"greeting"}>
                    <FormattedMessage id="home.greeting"/>
                </div>
                <div className={"sub-text flex-row"}>
                    <FormattedMessage id="home.sub-title"/>
                </div>

                <div className="home-middle-spacer"></div>

                <div className={"info-text"}>
                    <FormattedMessage id="home.info-text.p1"/>
                    <span>
                        <a href="https://www.tu-braunschweig.de/" className="tu-bs">
                            <FormattedMessage id="home.tu-bs"/>
                        </a>
                    </span>
                    <FormattedMessage id="home.info-text.p2"/>
                </div>

                {props.contactComponent}

            </div>
        </section>
    );
}

export default HomeSectionComponent;