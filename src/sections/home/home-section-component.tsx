import {Avatar, Button} from "@mui/material";
import React, {ReactNode} from "react";
import {styled} from '@mui/material/styles';
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import TuBsChipComponent from "../../components/tu-bs-chip/tu-bs-chip-component";
import {FormattedMessage} from "react-intl";
import "./home-section-component.css";
import "../../animations.css";

interface HomeSectionComponentProps {
    isLocaleFrench: boolean;
    languageComponent: ReactNode;
    contactComponent: ReactNode;
}

const HomeSectionComponent = (props: HomeSectionComponentProps) => {

    const CustomTooltip = styled(({className, ...props}: TooltipProps) => (
        <Tooltip {...props} classes={{popper: className}}/>
    ))(({theme}) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.white,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
        },
    }));


    const meTooltip = () => {
        return (
            <div style={{fontSize: "1.2rem"}} className={"flex-column"}>
                <div>Lisa Dibo Marie Gonda</div>
                <div>Bachelor of Science</div>
                <br></br>
                <div>Hannover, 14.05.1997</div>
                <div>Deutsch | Englisch | Französisch</div>
            </div>
        );
    }

    const locationTooltip = () => {
        return (
            <div style={{gap: "0.7rem", padding: "1rem"}} className={"flex-column"}>
                <div style={{fontSize: "0.9rem"}}>
                    Remote aus Braunschweig, Niedersachsen
                </div>
                <img style={{width: "100%", borderRadius: "0.5rem"}} src={require("../../location.jpg")}></img>
            </div>
        );
    }

    return (
        <section id="home" className={"section-container home-container flex-column"}>
            <div className={"home-component flex-column"}>
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
                    <span className="tu-bs">
                        <FormattedMessage id="home.tu-bs"/>
                    </span>
                    <FormattedMessage id="home.info-text.p2"/>
                </div>

                {props.contactComponent}

            </div>
        </section>
    );
}

export default HomeSectionComponent;