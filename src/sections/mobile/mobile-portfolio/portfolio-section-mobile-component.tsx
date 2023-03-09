import React from "react";
import "../../../App.css";
import SectionTitleComponent from "../../../utils/section-title-component";
import PortfolioItemComponent from "../../portfolio/portfolio-item-component";

const PortfolioSectionMobileComponent = () => {
    const portfolioItemStyle = () => {
        return (
            {
                width: "80%",
                gap: "1rem"
            }
        );
    }

    return (
        <section id="portfolio" style={{alignItems: "center"}} className={"section-container flex-column"}>
            <SectionTitleComponent title="Portfolio"></SectionTitleComponent>
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