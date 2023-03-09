import InfoPanelComponent from "../../utils/info-panel/info-panel-component";
import React from "react";
import SectionTitleComponent from "../../utils/section-title-component";
import "../../App.css";
import "./certificates-section-component.css";

const CertificatesSectionComponent = () => {
    return (
        <section id="certificates" className={"certificates-section section-container flex-column"}>
            <SectionTitleComponent title="Zertifikate"></SectionTitleComponent>
            <InfoPanelComponent customStyle={{width: "60%"}}>
                <div className={"flex-row"} style={{gap: "1rem"}}>
                    <img src={require("../../scrum.png")} style={{width: "30%"}}></img>
                </div>
            </InfoPanelComponent>
        </section>
    );
}

export default CertificatesSectionComponent;