import {Avatar, Button} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';


import "./landing-component.css";
import "../../animations.css";
import LanguageChoiceComponent from "../../components/language/language-choice-component";

interface LandingComponentProps {
    children?: React.ReactNode;
}

const HomeSectionComponent = (props: LandingComponentProps) => {

    const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
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
        <section id="home" className={"landing-container flex-column"}>
            {/*<LanguageChoiceComponent></LanguageChoiceComponent>*/}
            <div className={"landing-component flex-column"}>
                <div className={"flex-row"} style={{alignItems: "baseline", gap: "1.4rem"}}>
                    <div className={"landing-greeting"}>
                        <span style={{fontSize: "2rem"}}></span>Hi, ich bin Dibo!
                    </div>
                </div>
                <div>
                </div>
                <div className={"landing-text"}>
                    {/*ich bin <Tooltip arrow*/}
                    {/*                 title={meTooltip()}><span*/}
                    {/*style={{color: "var(--text-highlight)"}}>Dibo</span></Tooltip>,*/}
                    Software Entwicklerin aus <CustomTooltip placement="top-end" arrow title={locationTooltip()}><span
                    style={{color: "var(--text-highlight)", verticalAlign: "baseline"}}>Deutschland.
                    {/*<LocationOnIcon sx={{fontSize: 40}}/>*/}
                    </span></CustomTooltip>
                </div>
            </div>
            {props.children}
            {/*<div style={{borderRadius: "10%", color: "var(--text)", borderColor: "var(--highlight)", width: "2%", padding: "4rem", fontSize: "1.4rem", border: "dotted 2px"}}>*/}
            {/*    Kontakt aufnehmen*/}
            {/*</div>*/}
        </section>
    );
}

export default HomeSectionComponent;