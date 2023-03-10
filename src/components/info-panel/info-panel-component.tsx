import "./info-panel-component.css";
import React from "react";
interface InfoPanelComponentProps {
    customStyle?: React.CSSProperties;
    children?: React.ReactNode;
}

const InfoPanelComponent = (props: InfoPanelComponentProps) => {

    return (
        <div className={"panel flex-column"} style={props.customStyle}>
            {props.children}
        </div>
    );
}

export default InfoPanelComponent;