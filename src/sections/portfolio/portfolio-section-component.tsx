import React from "react";
import InfoPanelComponent from "../../components/info-panel/info-panel-component";
import "../../App.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import SectionTitleComponent from "../../components/section-title/section-title-component";
import PortfolioItemComponent from "./portfolio-item-component";
import {FormattedMessage} from "react-intl";

interface PortfolioComponentProps {

}

const PortfolioSectionComponent = (props: PortfolioComponentProps) => {
    const portfolioItemStyle = () => {
        return (
            {
                width: "60%",
                gap: "1rem"
            }
        );
    }

    return (
        <section id="portfolio" style={{alignItems: "center"}} className={"section-container flex-column"}>
            <SectionTitleComponent title={<FormattedMessage id="title.portfolio"/>}></SectionTitleComponent>
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

export default PortfolioSectionComponent;