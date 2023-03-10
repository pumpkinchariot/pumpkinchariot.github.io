import React from "react";
import ProjectComponent from "../../projects/project-component";
import SectionTitleComponent from "../../../utils/section-title-component";
import "../../../App.css";
import "./projects-section-mobile-component.css";

const ProjectsSectionMobileComponent = () => {

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

    return (
        <section id="projects" className={"projects-section section-container flex-column"}>
            <SectionTitleComponent title="ProjektErfahrung"></SectionTitleComponent>
            <div style={{width: "80%", justifyContent: "center", alignItems: "baseline"}} className={"flex-column"}>
                <ProjectComponent title={"Homologations Management"}
                                         date={"Januar 2022 - Heute"}
                                         description={"Agile Entwicklung eines Ökosystems für die Unterstützung und Teilautomatisierung komplexer Zulassungs- und Zertifizierungsprozessen von Fahrzeugen."}
                                         technologies={["JAVA | Spring Boot", "MariaDB", "React (TypeScript, HTML, CSS)"]}
                                         customStyle={projectComponentStyle()}/>
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

            </div>
        </section>
    );
}

export default ProjectsSectionMobileComponent;