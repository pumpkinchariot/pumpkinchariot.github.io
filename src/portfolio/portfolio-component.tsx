import React from "react";
import InfoPanelComponent from "../utils/info-panel-component";
import "../App.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

interface PortfolioComponentProps {

}

const PortfolioComponent = (props: PortfolioComponentProps) => {

    return (
        <div style={{alignItems: "center"}} className={"section-container flex-column"}>
            <div className={"section-title"}>
                ❮<span style={{color: "var(--white)"}}>Portfolio</span>❯

            </div>

            <div style={{width: "60%", gap: "1rem"}} className={"flex-column"}>


            <InfoPanelComponent>
                {/*Render Preview here!*/}
                <img src={require("../simutales.png")} style={{width: "100%", borderRadius: "0.8rem", border: "1px white solid"}}></img>
            </InfoPanelComponent>

            <InfoPanelComponent>
                <div className={"flex-row"} style={{color: "rgb(92, 187, 191)"}}>
                    <div style={{width: "33%"}}></div>
                    <div style={{fontWeight: "bold", alignSelf: "center", width: "34%"}}>Simutales</div>
                    <div style={{width: "33%", justifyContent: "flex-end", gap: "0.5rem", alignSelf: "center"}} className={"flex-row"}>
                        <OpenInNewIcon style={{fontSize: "1.2rem"}}></OpenInNewIcon>
                        <GitHubIcon style={{fontSize: "1.2rem"}}></GitHubIcon>
                    </div>
                </div>


                <div style={{textAlign: "left"}}>
                    Lebenssimulation mit multiplayer und vollständig simulierten Nachbarschaften.
                    Kreiere eine Familie und spiele das Leben. Kochen, Gärtnern, Erkunden, Liebe.
                    Keine Grenzen!
                    <br></br>
                    <br></br>
                    Spiele mit Freunden. Gemeinsam eine ganze Stadt gestalten. Simus mit einander interagieren lassen.
                </div>

                {/*<div><span style={{color: "rgb(92, 187, 191)"}}>&gt;</span> Unity/C#</div>*/}
                <div>
                    #GameDev #Unity|C#
                </div>

            </InfoPanelComponent>
            </div>

        </div>
    );

}

export default PortfolioComponent;