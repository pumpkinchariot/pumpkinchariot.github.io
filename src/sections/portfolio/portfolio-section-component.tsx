import React from "react";
import InfoPanelComponent from "../../utils/info-panel/info-panel-component";
import "../../App.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

interface PortfolioComponentProps {

}

const PortfolioSectionComponent = (props: PortfolioComponentProps) => {

    return (
        <section id="portfolio" style={{alignItems: "center"}} className={"section-container flex-column"}>
            <div className={"section-title"}>
                ❮<span style={{color: "var(--white)"}}>Portfolio</span>❯

            </div>

            <div style={{width: "60%", gap: "1rem"}} className={"flex-column"}>


            <InfoPanelComponent>
                {/*Render Preview here!*/}
                <img src={require("../../simutales.png")} style={{width: "100%", borderRadius: "0.8rem", border: "1px white solid"}}></img>
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
                    Eine multiplayer Lebenssimulation in der die Freiheit hast, das zu tun was du möchtest!
                    Baue ein Haus, oder auch eine ganze Stadt, erkunde, eröffne deinen eigenen Laden, oder finde die große Liebe!
                    <br></br>
                    <br></br>
                    Tauche in eine aufregende Welt voller Möglichkeiten ein und erlebe das Leben in einer lebendigen vollständig simulierten Nachbarschaft.
                    <br></br>
                    <br></br>
                    Spiele mit Freunden und gestalte mit ihnen gemeinsam die Stadt oder lasst eure Simus miteinander interagieren!

                </div>

                {/*<div><span style={{color: "rgb(92, 187, 191)"}}>&gt;</span> Unity/C#</div>*/}
                <div>
                    #GameDev #Unity|C#
                </div>

            </InfoPanelComponent>
            </div>

        </section>
    );

}

export default PortfolioSectionComponent;