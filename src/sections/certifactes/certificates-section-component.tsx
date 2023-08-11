import InfoPanelComponent from "../../components/info-panel/info-panel-component";
import React from "react";
import SectionTitleComponent from "../../components/section-title/section-title-component";
import "../../App.css";
import "./certificates-section-component.css";
import {FormattedMessage} from "react-intl";

const CertificatesSectionComponent = () => {
    return (
        <section id="certificates" className={"certificates-section section-container flex-column"} style={{alignItems: "center"}}>
            <SectionTitleComponent title={<FormattedMessage id="title.certificates"/>}></SectionTitleComponent>
            <InfoPanelComponent customStyle={{width: "60%"}}>
                <div className={"flex-row"} style={{gap: "1rem"}}>
                    <img id="scrum-img" src={require("../../assets/scrum.png")}></img>
                </div>
            </InfoPanelComponent>
        </section>
    );
}

export default CertificatesSectionComponent;