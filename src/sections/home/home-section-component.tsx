import {Avatar, Button} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import {styled} from '@mui/material/styles';
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';


import "./home-section-component.css";
import "../../animations.css";
import LanguageChoiceComponent from "../../components/language/language-choice-component";
import TuBsChipComponent from "../../components/tu-bs-chip/tu-bs-chip-component";

interface LandingComponentProps {
    children?: React.ReactNode;
}

const HomeSectionComponent = (props: LandingComponentProps) => {

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
        <section id="home" className={"section-container home-container flex-column"}
                 style={{justifyContent: "center"}}>
            {/*<LanguageChoiceComponent></LanguageChoiceComponent>*/}
            <div className={"landing-component flex-column"}>
                <div className={"greeting"}>
                    <span style={{fontSize: "2rem"}}></span>Hi, ich bin Dibo! :)
                </div>
                <div className={"landing-text flex-row"}>
                    {/*<div style={{height: "80%", width: "3px", backgroundColor: "#6359852e"}}>*/}

                    {/*</div>*/}


                    {/*ich bin <Tooltip arrow*/}
                    {/*                 title={meTooltip()}><span*/}
                    {/*style={{color: "var(--text-highlight)"}}>Dibo</span></Tooltip>,*/}
                    Software Entwicklerin aus Deutschland.
                    {/*<CustomTooltip placement="top-end" arrow title={locationTooltip()}><span*/}
                    {/*style={{color: "var(--text-highlight)", verticalAlign: "baseline"}}>Deutschland.*/}
                    {/*/!*<LocationOnIcon sx={{fontSize: 40}}/>*!/*/}
                    {/*</span></CustomTooltip>*/}
                </div>
                <div className={"info-text"}>
                    <span>
                        Derzeit absolviere ich ein Halbtagsstudium im Masterstudiengang Informatik an der&nbsp;
                    </span>
                    <span>
                        <TuBsChipComponent/>&nbsp;
                    </span>
                    <span>
                        und arbeite nebenbei als Full-Stack Entwicklerin im Automobilumfeld.
                    </span>
                </div>

                <Button className="contact-button" style={{width: "100%", alignSelf: "center", height: "48px", backgroundColor: "#1d1a25", borderRadius: "8px"}} variant="contained">Kontakt</Button>

            </div>


            {/*{props.children}*/}
            {/*<div style={{borderRadius: "10%", color: "var(--text)", borderColor: "var(--highlight)", width: "2%", padding: "4rem", fontSize: "1.4rem", border: "dotted 2px"}}>*/}
            {/*    Kontakt aufnehmen*/}
            {/*</div>*/}
        </section>
    );
}

export default HomeSectionComponent;