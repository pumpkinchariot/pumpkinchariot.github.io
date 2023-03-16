import React from "react";
import SectionTitleComponent from "../../../components/section-title/section-title-component";
import PortfolioItemComponent from "../../portfolio/portfolio-item-component";
import "../../../App.css";
import "./portfolio-section-mobile-component.css";
import {FormattedMessage} from "react-intl";

const PortfolioSectionMobileComponent = () => {
    const portfolioItemStyle = () => {
        return (
            {
                width: "90%",
                gap: "1rem",
            }
        );
    }

    return (
        <section id="portfolio" style={{alignItems: "center"}} className={"portfolio-section section-container flex-column"}>
            <SectionTitleComponent title={<FormattedMessage id="breadcrumb.portfolio"/>}></SectionTitleComponent>
            <PortfolioItemComponent
                title="Simutales"
                imgPath={"../../simutales.png"}
                url={"https://themoonforge.github.io/simutales.github.io/"}
                gitHubUrl={"https://github.com/themoonforge/simutales"}
                tags={["Unity", "GameDev", "C++"]}
                customStyle={portfolioItemStyle()}/>
        </section>
    );

}

export default PortfolioSectionMobileComponent;