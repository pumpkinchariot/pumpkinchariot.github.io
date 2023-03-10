import React from "react";
import "./project-mobile-component.css";

interface ProjectMobileComponent {
    groupId: number;
    setSelectedGroupId: (id: number) => void;
    renderContent?: boolean;
    customStyle?: React.CSSProperties;

    title: string;
    date: string;
    description: string;
    technologies: string[];
}

const ProjectMobileComponent = (props: ProjectMobileComponent) => {

    const listItems = props.technologies.map((technology) =>
        <div><span style={{color: "var(--highlight)"}}>&gt;</span> <span
            style={{color: "var(--text)"}}>{technology}</span></div>
    );

    return (
        <button className={`${props.renderContent ? 'active-panel-section' : ''} panel-section flex-column`} style={props.customStyle} onClick={() => props.setSelectedGroupId(props.groupId)}>
            <div style={{fontWeight: "bold", color: "var(--highlight)", alignSelf: "center"}}>
                {props.date}
            </div>
            <div style={{color: "var(--text-highlight)", alignSelf: "center"}}>
                {props.title}
            </div>
            {props.renderContent &&
                <div style={{textAlign: "left"}}>
                    {props.description}
                </div>}
            {props.renderContent &&
                <div style={{textAlign: "start", fontSize: "0.8rem"}}>{listItems}</div>}
        </button>

    );
}

export default ProjectMobileComponent;