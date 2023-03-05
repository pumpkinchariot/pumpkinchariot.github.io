import React from "react";
import InfoPanelComponent from "../../utils/info-panel/info-panel-component";
import "../../App.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import SectionTitleComponent from "../../utils/section-title-component";
import PortfolioItemComponent from "./portfolio-item-component";

interface PortfolioComponentProps {

}

const PortfolioSectionComponent = (props: PortfolioComponentProps) => {

    return (
        <section id="portfolio" style={{alignItems: "center"}} className={"section-container flex-column"}>
            <SectionTitleComponent title="Portfolio"></SectionTitleComponent>
            <PortfolioItemComponent
                title="Simutales"
                imgPath={"../../simutales.png"}
                url={"https://themoonforge.github.io/simutales.github.io/"}
                gitHubUrl={"https://github.com/themoonforge/simutales"}
                tags={["Unity", "GameDev", "C++"]}></PortfolioItemComponent>
        </section>
    );

}

export default PortfolioSectionComponent;