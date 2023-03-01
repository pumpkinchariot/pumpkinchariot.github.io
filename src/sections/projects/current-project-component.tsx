import {Divider} from "@mui/material";
import React from "react";
import "./project-component.css";
import InfoPanelComponent from "../../utils/info-panel/info-panel-component";

interface CurrentProjectComponentProps {
    title: string;
    date: string;
    description: string;
    technologies: string[];

    customClass?: string;

}

const ProjectComponent = (props: CurrentProjectComponentProps) => {

    const listItems = props.technologies.map((technology) =>
        <div><span style={{color: "var(--highlight)"}}>&gt;</span> <span
            style={{color: "var(--text)"}}>{technology}</span></div>
    );

    return (
        <div style={{
            fontSize: "1rem",
            width: "20%",
            gap: "1rem"
        }}
             className={"flex-column"}
        >
            <div style={{color: "var(--text-highlight)"}}>
                {props.date}
            </div>

            <InfoPanelComponent customStyle={{margin: "0rem 0.5rem 0rem 0.5rem"}}>
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