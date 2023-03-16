import ProjectComponent from "../../components/project/project-component";
import React from "react";
import SectionTitleComponent from "../../components/section-title/section-title-component";
import {Divider} from "@mui/material";
import "../../App.css";
import "../mobile/mobile-projects/projects-section-mobile-component.css";
import "./projects-section-component.css";
import {FormattedMessage} from "react-intl";

const ProjectsSectionComponent = () => {

    const projectComponentStyle = () => {
        return (
            {
                // borderTopLeftRadius: "0rem",
                // borderTopRightRadius: "0rem",
                fontSize: "1rem",
                width: "24%",
            }
        );
    }

    return (
        <section id="projects" className={"section-container flex-column"} style={{width: "90%", alignSelf: "center"}}>
            <SectionTitleComponent title={<FormattedMessage id="title.projects"/>}></SectionTitleComponent>

            <div className="arrow flex-row">
                <div className="triangle-left">

                </div>
                <div className="arrow-line flex-row">
                    <div className="arrow-date">
                        Januar 2022 - Heute
                    </div>
                    <div className="arrow-date">
                        Juli 2021 - Juli 2022
                    </div>
                    <div className="arrow-date">
                        November 2020 - Juli 2021
                    </div>
                    <div className="arrow-date">
                        September 2018 - Juli 2020
                    </div>
                </div>
            </div>

            <div style={{justifyContent: "center", alignItems: "baseline", marginLeft: "50px", width: "74%"}}
                 className={"flex-row"}>
                <ProjectComponent title={<FormattedMessage id="project-title.homologation"/>}
                                  date={"Januar 2022 - Heute"}
                                  description={<FormattedMessage id="project-text.homologation"/>}
                                  technologies={["JAVA | Spring Boot", "MariaDB", "React (TypeScript, HTML, CSS)"]}
                                  customStyle={projectComponentStyle()}/>
                <ProjectComponent title={<FormattedMessage id="project-title.adf"/>}
                                  date={"Juli 2021 - Juli 2022"}
                                  description={<FormattedMessage id="project-text.adf"/>}
                                  technologies={["JAVA", "Python", "Amazon Web Services", "React (JavaScript, HTML, CSS)"]}
                                  customStyle={projectComponentStyle()}>
                    {/*<Divider variant="inset"*/}
                    {/*         style={{*/}
                    {/*             backgroundColor: "var(--panel-border)",*/}
                    {/*             margin: "0rem",*/}
                    {/*             padding: "0rem",*/}
                    {/*             width: "100%"*/}
                    {/*         }}/>*/}
                </ProjectComponent>
                <ProjectComponent title={<FormattedMessage id="project-title.skeditor"/>}
                                  date={"November 2020 - Juli 2021"}
                                  description={<FormattedMessage id="project-text.skeditor"/>}
                                  technologies={["JAVA | Eclipse RCP", "ANTLR", "UNREAL ENGINE", "C++", "Robot Operating System (ROS)"]}
                                  customStyle={projectComponentStyle()}>
                    {/*<Divider variant="inset"*/}
                    {/*         style={{*/}
                    {/*             backgroundColor: "var(--panel-border)",*/}
                    {/*             margin: "0rem",*/}
                    {/*             padding: "0rem",*/}
                    {/*             width: "100%"*/}
                    {/*         }}/>*/}
                </ProjectComponent>

                <ProjectComponent title={<FormattedMessage id="project-title.fleet-calculation"/>}
                                  date={"September 2018 - Juli 2020"}
                                  description={<FormattedMessage id="project-text.fleet-calculation"/>}
                                  technologies={["JAVA | Spring Boot", "Groovy", "Hybernate", "Chromium Embedded Framework", "Angular (TypeScript, HTML, CSS)"]}
                                  customStyle={projectComponentStyle()}>
                    {/*<Divider variant="inset"*/}

                    {/*         style={{*/}
                    {/*             backgroundColor: "var(--panel-border)",*/}
                    {/*             margin: "0rem",*/}
                    {/*             padding: "0rem",*/}
                    {/*             width: "100%"*/}
                    {/*         }}/>*/}
                </ProjectComponent>


            </div>
        </section>
    );
}

export default ProjectsSectionComponent;