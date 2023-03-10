import InfoPanelComponent from "../../utils/info-panel/info-panel-component";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import SocialLinkComponent from "../../components/social/social-link-component";
import "./portfolio-item-component.css";

interface PortfolioItemComponent {
    title: string;
    imgPath: string;
    url?: string;
    gitHubUrl: string;
    tags?: string[];
    customStyle?: React.CSSProperties;
}

const PortfolioItemComponent = (props: PortfolioItemComponent) => {

    const listItems = props.tags?.map((tag) =>
        <div style={{backgroundColor: "#988ebc14", borderRadius: "1rem", padding: "0.2rem 0.4rem 0.2rem 0.4rem"}}>#{tag}</div>
    );

    return(
        <div style={props.customStyle} className={"flex-column"}>
            <InfoPanelComponent>
                {/*Render Preview here!*/}
                <img src={require("../../simutales.png")}
                     style={{width: "100%", borderRadius: "0.8rem", border: "1px white solid"}}></img>
            </InfoPanelComponent>

            <InfoPanelComponent>
                <div className={"flex-row"} style={{color: "rgb(92, 187, 191)"}}>
                    <div style={{width: "33%"}}></div>
                    <div style={{fontWeight: "bold", alignSelf: "center", width: "34%"}}>{props.title}</div>
                    <div style={{width: "33%", justifyContent: "flex-end", gap: "0.5rem", alignSelf: "center"}}
                         className={"flex-row"}>

                        {props.url &&
                            <SocialLinkComponent link={props.url}>
                                <OpenInNewIcon className={"link-icon"}></OpenInNewIcon>
                            </SocialLinkComponent>
                        }

                        <SocialLinkComponent link={props.gitHubUrl}>
                            <GitHubIcon className={"link-icon"}></GitHubIcon>
                        </SocialLinkComponent>
                    </div>
                </div>


                <div style={{textAlign: "left"}}>
                    Eine multiplayer Lebenssimulation in der die Freiheit hast, das zu tun was du möchtest!
                    Baue ein Haus, oder auch eine ganze Stadt, erkunde, eröffne deinen eigenen Laden, oder finde die
                    große Liebe!
                    <br></br>
                    <br></br>
                    Tauche in eine aufregende Welt voller Möglichkeiten ein und erlebe das Leben in einer lebendigen
                    vollständig simulierten Nachbarschaft.
                    <br></br>
                    <br></br>
                    Spiele mit Freunden und gestalte mit ihnen gemeinsam die Stadt oder lasst eure Simus miteinander
                    interagieren!

                </div>

                {/*<div><span style={{color: "rgb(92, 187, 191)"}}>&gt;</span> Unity/C#</div>*/}
                <div className={"tags-container flex-row"}>
                    {listItems}
                </div>

            </InfoPanelComponent>
        </div>

    );
}

export default PortfolioItemComponent;