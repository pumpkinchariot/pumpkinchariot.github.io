import InfoPanelComponent from "../utils/info-panel-component";
import React from "react";
import "../App.css";

const CertificatesComponent = () => {
    return (
        <div className={"section-container flex-column"}>
            <div className={"section-title"}>
                ❮<span style={{color: "var(--white"}}>Zertifikate</span>❯
            </div>
            <InfoPanelComponent customStyle={{width: "60%"}}>
                <div className={"flex-row"} style={{gap: "1rem"}}>
                    <img src={require("../scrum.png")} style={{width: "30%"}}></img>
                </div>
            </InfoPanelComponent>
        </div>
    );
}

export default CertificatesComponent;