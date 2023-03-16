import React from "react";
import InfoPanelComponent from "../info-panel/info-panel-component";
import "./project-component.css";


interface ProjectComponentProps {
    title: React.ReactNode;
    description: React.ReactNode;
    technologies: string[];
    customStyle?: React.CSSProperties;
    children?: React.ReactNode;

}

const ProjectComponent = (props: ProjectComponentProps) => {

    const listItems = props.technologies.map((technology) =>
        <div><span style={{color: "var(--highlight)"}}>&gt;</span> <span
            style={{color: "var(--white)"}}>{technology}</span></div>
    );

    return (
        <div style={props.customStyle} className={"flex-column"}>
            <InfoPanelComponent customStyle={{margin: "0rem 0.5rem 0rem 0.5rem", fontSize: "0.9rem"}}>
                <div style={{fontWeight: "bold", color: "var(--highlight)"}}>
                    {props.title}
                </div>
                <div style={{textAlign: "left"}}>
                    {props.description}
                </div>

                <div style={{textAlign: "start", fontSize: "0.8rem"}}>{listItems}</div>
            </InfoPanelComponent>
        </div>
    );

}

export default ProjectComponent;