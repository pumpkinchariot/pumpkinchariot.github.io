import ProjectComponent from "../../components/project/project-component";
import React, {useEffect, useState} from "react";
import SectionTitleComponent from "../../components/section-title/section-title-component";
import {Divider} from "@mui/material";
import "../../App.css";
import "../mobile/mobile-projects/projects-section-mobile-component.css";
import "./projects-section-component.css";
import {FormattedMessage} from "react-intl";

interface ProjectsSectionComponentProps {
    scrollValue: number;
}

const ProjectsSectionComponent = (props: ProjectsSectionComponentProps) => {

    const [arrowWidth, setArrowWidth] = useState(0);
    const [showArrow, setShowArrow] = useState(false);
    const [opacityValue, setOpacityValue] = useState(1);


    useEffect(() => {
        let calculatedWith = (props.scrollValue - 1400) / 4;
        console.log(calculatedWith)
        if (calculatedWith > 100) {
            setArrowWidth(100);
        } else if (calculatedWith < 0) {
            setArrowWidth(0);
            setShowArrow(false);
        } else {
            setArrowWidth(calculatedWith);
            setShowArrow(true);
        }

    }, [props.scrollValue])

    const projectComponentStyle = () => {
        return (
            {
                fontSize: "1rem",
                width: "25%",
                animation: "fade-in 1s 1",
            }
        );
    }


    return (
        <section id="projects" className={"section-container flex-column"}
                 style={{width: "70%", alignSelf: "center", minHeight: "100vh"}}>
            <div style={{display: "flex", width: "100%", height: "14vh", flexDirection: "column", zIndex: 6}}>
                <div style={{height: "50%"}}>
                    {true &&
                        <SectionTitleComponent scrollValue={props.scrollValue} title={<FormattedMessage id="title.projects"/>}></SectionTitleComponent>}
                </div>
                {showArrow && <div style={{
                    height: "50%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    alignItems: "center",
                    animation: "fade-in 1s 1",
                }}>
                    <div className="triangle-left"></div>
                    <div style={{
                        height: "2rem",
                        width: `${arrowWidth}%`,
                        backgroundColor: "#2b2838",
                        alignSelf: "center",
                        display: "flex",
                        borderTopRightRadius: "4px",
                        borderBottomRightRadius: "4px",
                        justifyContent: "center",
                        // backdropFilter: "blur(10px)"
                    }}>

                        {arrowWidth >= 100 && <div className="flex-row" style={{
                            justifyContent: "space-between",
                            width: "77%", // TODO calculate 74% of arrow length (+ triangle part)
                            alignItems: "center",
                            animation: "fade-in 1s 1",
                        }}>
                            <div className="arrow-date">
                                <FormattedMessage id="project-date.homologation"/>
                            </div>
                            <div className="arrow-date">
                                <FormattedMessage id="project-date.adf"/>
                            </div>
                            <div className="arrow-date">
                                <FormattedMessage id="project-date.skeditor"/>
                            </div>
                            <div className="arrow-date">
                                <FormattedMessage id="project-date.fleet-calculation"/>
                            </div>
                        </div>}

                    </div>
                </div>}
            </div>
            <div style={{
                alignItems: "baseline",
                justifyContent: "end",
                width: "74%",
                alignSelf: "center",
                marginLeft: "50px",
                zIndex: 6,
                // opacity: `${opacityValue}`

            }}
                 className={"flex-row"}>
                {arrowWidth >= 85 && <ProjectComponent title={<FormattedMessage id="project-title.homologation"/>}
                                                       description={<FormattedMessage id="project-text.homologation"/>}
                                                       technologies={["JAVA | Spring Boot", "MariaDB", "React (TypeScript, HTML, CSS)"]}
                                                       customStyle={projectComponentStyle()}/>}
                {arrowWidth >= 70 && <ProjectComponent title={<FormattedMessage id="project-title.adf"/>}
                                                       description={<FormattedMessage id="project-text.adf"/>}
                                                       technologies={["JAVA", "Python", "Amazon Web Services", "React (JavaScript, HTML, CSS)"]}
                                                       customStyle={projectComponentStyle()}>
                </ProjectComponent>}
                {arrowWidth >= 50 && <ProjectComponent title={<FormattedMessage id="project-title.skeditor"/>}
                                                       description={<FormattedMessage id="project-text.skeditor"/>}
                                                       technologies={["JAVA | Eclipse RCP", "ANTLR", "UNREAL ENGINE", "C++", "Robot Operating System (ROS)"]}
                                                       customStyle={projectComponentStyle()}>
                </ProjectComponent>}

                {arrowWidth >= 30 && <ProjectComponent title={<FormattedMessage id="project-title.fleet-calculation"/>}
                                                       description={<FormattedMessage
                                                           id="project-text.fleet-calculation"/>}
                                                       technologies={["JAVA | Spring Boot", "Groovy", "Hybernate", "Chromium Embedded Framework", "Angular (TypeScript, HTML, CSS)"]}
                                                       customStyle={projectComponentStyle()}>
                </ProjectComponent>}
            </div>
        </section>
    );
}

export default ProjectsSectionComponent;