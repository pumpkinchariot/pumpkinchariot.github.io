import {Divider} from "@mui/material";
import React from "react";
import InfoPanelComponent from "../info-panel/info-panel-component";
import "./project-component.css";


interface ProjectComponentProps {
    title: string;
    date: string;
    description: string;
    technologies: string[];
    customStyle?: React.CSSProperties;
    children?: React.ReactNode;

}

const ProjectComponent = (props: ProjectComponentProps) => {

    const listItems = props.technologies.map((technology) =>
        <div><span style={{color: "var(--highlight)"}}>&gt;</span> <span style={{color: "var(--text)"}}>{technology}</span></div>
    );

    return (
        <div style={props.customStyle} className={"flex-column"}>
            <div style={{color: "var(--text-highlight)"}}>
                {props.date}
            </div>
            {props.children}
            <InfoPanelComponent customStyle={{margin: "0rem 0.5rem 0rem 0.5rem", fontSize: "0.8rem"}}>
                <div style={{fontWeight: "bold", color: "var(--highlight)"}}>
                    {props.title}
                </div>
                <div style={{textAlign: "left"}}>
                    {props.description}
                </div>

                <div style={{textAlign: "start", fontSize: "0.8rem"}}>{listItems}</div>
            </InfoPanelComponent>
            </div>
        // </div>
    );

}

export default ProjectComponent;