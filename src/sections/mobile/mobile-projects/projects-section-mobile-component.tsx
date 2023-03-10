import React, {useState} from "react";
import ProjectComponent from "../../../components/project/project-component";
import SectionTitleComponent from "../../../components/section-title/section-title-component";
import "../../../App.css";
import "./projects-section-mobile-component.css";
import ProjectMobileComponent from "../../../components/project/project-mobile-component";

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
            <SectionTitleComponent title="ProjektErfahrung"></SectionTitleComponent>
            <div style={{width: "80%", justifyContent: "center", alignItems: "center", gap: "0.1rem"}} className={"flex-column"}>
{/*                <ProjectComponent title={"Homologations Management"}
                                  date={"Januar 2022 - Heute"}
                                  description={"Agile Entwicklung eines Ökosystems für die Unterstützung und Teilautomatisierung komplexer Zulassungs- und Zertifizierungsprozessen von Fahrzeugen."}
                                  technologies={["JAVA | Spring Boot", "MariaDB", "React (TypeScript, HTML, CSS)"]}
                                  customStyle={projectComponentStyle()}/>*/}
                {/*<ProjectComponent title={"Cloudbasiertes Diagnose Framework"}*/}
                {/*                  date={"Juli 2021 - Juli 2022"}*/}
                {/*                  description={"Empirische entwicklung eines Frameworks zum Modellieren und Deployen von Konfigurationen zur Diagnose von Fahrzeugsensordaten auf Basis von Microservices am Institut für Softwaretechnik und Fahrzeuginformatik."}*/}
                {/*                  technologies={["JAVA", "Python", "Amazon Web Services", "React (JavaScript, HTML, CSS)"]}*/}
                {/*                  customStyle={projectComponentStyle()}/>*/}
                {/*<ProjectComponent title={"Skillgraphen"}*/}
                {/*                  date={"November 2020 - Juli 2021"}*/}
                {/*                  description={"Editor zum Modellieren, Spezifizieren und validieren von Skillgraphen auf Basis von Grammatiken. Simulation der Algorithmen in der Unreal Engine. Cyberphysische Systeme."}*/}
                {/*                  technologies={["JAVA | Eclipse RCP", "ANTLR", "UNREAL ENGINE", "C++"]}*/}
                {/*                  customStyle={projectComponentStyle()}/>*/}
                {/*<ProjectComponent title={"CO₂ Flottenberechnung"}*/}
                {/*                  date={"September 2018 - Juli 2020"}*/}
                {/*                  description={"Agile entwicklung einer Expertenanwendung zum Modellieren komplexer Berechnungs-Pipelines zum performanten Aggregieren immenser Datenmengen (Tabellen mit mehreren Millionen Datenzeilen) für die internationale Berechnung von Fahrzeugflotten."}*/}
                {/*                  technologies={["JAVA | Spring Boot", "Groovy", "Hybernate", "Chromium Embedded Framework", "Angular (TypeScript, HTML, CSS)"]}*/}
                {/*                  customStyle={projectComponentStyle()}/>*/}

                <ProjectMobileComponent
                    groupId={1}
                    setSelectedGroupId={setSelectedProject}
                    renderContent={selectedProject === 1}
                    title={"Homologations Management"}
                    date={"Januar 2022 - Heute"}
                    description={"Agile Entwicklung eines Ökosystems für die Unterstützung und Teilautomatisierung komplexer Zulassungs- und Zertifizierungsprozessen von Fahrzeugen."}
                    technologies={["JAVA | Spring Boot", "MariaDB", "React (TypeScript, HTML, CSS)"]}
                    customStyle={topBorder()}/>
                <ProjectMobileComponent
                    groupId={2}
                    setSelectedGroupId={setSelectedProject}
                    renderContent={selectedProject === 2}
                    title={"Cloudbasiertes Diagnose Framework"}
                    date={"Juli 2021 - Juli 2022"}
                    description={"Empirische entwicklung eines Frameworks zum Modellieren und Deployen von Konfigurationen zur Diagnose von Fahrzeugsensordaten auf Basis von Microservices am Institut für Softwaretechnik und Fahrzeuginformatik."}
                    technologies={["JAVA", "Python", "Amazon Web Services", "React (JavaScript, HTML, CSS)"]}
                    customStyle={intermediateBorder()}/>
                <ProjectMobileComponent
                    groupId={3}
                    setSelectedGroupId={setSelectedProject}
                    renderContent={selectedProject === 3}
                    title={"Skillgraphen"}
                    date={"November 2020 - Juli 2021"}
                    description={"Editor zum Modellieren, Spezifizieren und validieren von Skillgraphen auf Basis von Grammatiken. Simulation der Algorithmen in der Unreal Engine. Cyberphysische Systeme."}
                    technologies={["JAVA | Eclipse RCP", "ANTLR", "UNREAL ENGINE", "C++"]}
                    customStyle={intermediateBorder()}/>
                <ProjectMobileComponent
                    groupId={4}
                    setSelectedGroupId={setSelectedProject}
                    renderContent={selectedProject === 4}
                    title={"CO₂ Flottenberechnung"}
                    date={"September 2018 - Juli 2020"}
                    description={"Agile entwicklung einer Expertenanwendung zum Modellieren komplexer Berechnungs-Pipelines zum performanten Aggregieren immenser Datenmengen (Tabellen mit mehreren Millionen Datenzeilen) für die internationale Berechnung von Fahrzeugflotten."}
                    technologies={["JAVA | Spring Boot", "Groovy", "Hybernate", "Chromium Embedded Framework", "Angular (TypeScript, HTML, CSS)"]}
                    customStyle={bottomBorder()}/>
            </div>
        </section>
    );
}

export default ProjectsSectionMobileComponent;