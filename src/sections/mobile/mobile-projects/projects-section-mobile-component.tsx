import React, {useState} from "react";
import ProjectComponent from "../../../components/project/project-component";
import SectionTitleComponent from "../../../components/section-title/section-title-component";
import "../../../App.css";
import "./projects-section-mobile-component.css";
import ProjectMobileComponent from "../../../components/project/project-mobile-component";
import {FormattedMessage} from "react-intl";

const ProjectsSectionMobileComponent = () => {

    const [selectedProject, setSelectedProject] = useState(1);

    const projectComponentStyle = () => {
        return (
            {
                fontSize: "1rem",
                width: "100%",
                gap: "1rem",
                height: "70vh"
            }
        );
    }

    const topBorder = () => {
        return (
            {
                borderRadius: "1rem 1rem 0rem 0rem"
            }
        );
    }

    const intermediateBorder = () => {
        return (
            {
                borderStyle: "none solid solid solid"
            }
        );
    }

    const bottomBorder = () => {
        return (
            {
                borderRadius: "0rem 0rem 1rem 1rem",
                borderStyle: "none solid solid solid"
            }
        );
    }

    return (
        <section id="projects" className={"projects-section section-container flex-column"}>
            <SectionTitleComponent title={<FormattedMessage id="breadcrumb.projects"/>}></SectionTitleComponent>
            <div style={{width: "80%", justifyContent: "center", alignItems: "center", gap: "0.1rem"}} className={"flex-column"}>
                <ProjectMobileComponent
                    groupId={1}
                    setSelectedGroupId={setSelectedProject}
                    renderContent={selectedProject === 1}
                    title={<FormattedMessage id="project-title.homologation"/>}
                    date={"Januar 2022 - Heute"}
                    description={<FormattedMessage id="project-text.homologation"/>}
                    technologies={["JAVA | Spring Boot", "MariaDB", "React (TypeScript, HTML, CSS)"]}
                    customStyle={topBorder()}/>
                <ProjectMobileComponent
                    groupId={2}
                    setSelectedGroupId={setSelectedProject}
                    renderContent={selectedProject === 2}
                    title={<FormattedMessage id="project-title.adf"/>}
                    date={"Juli 2021 - Juli 2022"}
                    description={<FormattedMessage id="project-text.adf"/>}
                    technologies={["JAVA", "Python", "Amazon Web Services", "React (JavaScript, HTML, CSS)"]}
                    customStyle={intermediateBorder()}/>
                <ProjectMobileComponent
                    groupId={3}
                    setSelectedGroupId={setSelectedProject}
                    renderContent={selectedProject === 3}
                    title={<FormattedMessage id="project-title.skeditor"/>}
                    date={"November 2020 - Juli 2021"}
                    description={<FormattedMessage id="project-text.skeditor"/>}
                    technologies={["JAVA | Eclipse RCP", "ANTLR", "UNREAL ENGINE", "C++", "Robot Operating System (ROS)"]}
                    customStyle={intermediateBorder()}/>
                <ProjectMobileComponent
                    groupId={4}
                    setSelectedGroupId={setSelectedProject}
                    renderContent={selectedProject === 4}
                    title={<FormattedMessage id="project-title.fleet-calculation"/>}
                    date={"September 2018 - Juli 2020"}
                    description={<FormattedMessage id="project-text.fleet-calculation"/>}
                    technologies={["JAVA | Spring Boot", "Groovy", "Hybernate", "Chromium Embedded Framework", "Angular (TypeScript, HTML, CSS)"]}
                    customStyle={bottomBorder()}/>
            </div>
        </section>
    );
}

export default ProjectsSectionMobileComponent;