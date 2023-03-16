import * as React from "react";
import "./bread-crumb-component.css";

interface BreadCrumbComponentProps {
    sectionId: string;
    title: React.ReactNode;
}
const BreadCrumbComponent = (props: BreadCrumbComponentProps) => {
    return(
        <div>
            <a href={props.sectionId} className="bread-crumb">
                ❮<span className="bread-crumb-title">{props.title}</span>/❯
            </a>
        </div>
    );
}

export default BreadCrumbComponent;