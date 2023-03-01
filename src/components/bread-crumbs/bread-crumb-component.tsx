import * as React from "react";
import "./bread-crumb-component.css";

interface BreadCrumbComponentProps {
    title: string;
}
const BreadCrumbComponent = (props: BreadCrumbComponentProps) => {
    return(
        <div>
            <a href="" className="bread-crumb">
                ❮<span className="bread-crumb-title">{props.title}</span>/❯
            </a>
        </div>
    );
}

export default BreadCrumbComponent;