import React from "react";
import "../App.css";

interface SectionTitleComponentProps {
    title: string;
}

const SectionTitleComponent = (props: SectionTitleComponentProps) => {
    return (
        <div className={"section-title"}>
            ❮<span style={{color: "var(--white"}}>{props.title}</span>❯
        </div>
    );
}

export default SectionTitleComponent;