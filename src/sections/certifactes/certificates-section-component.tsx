import InfoPanelComponent from "../../utils/info-panel/info-panel-component";
import React from "react";
import "../../App.css";
import SectionTitleComponent from "../../utils/section-title-component";

const CertificatesSectionComponent = () => {
    return (
        <section id="certificates" className={"section-container flex-column"} style={{justifyContent: "center"}}>
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