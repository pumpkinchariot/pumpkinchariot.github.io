import Link from "@mui/material/Link";
import * as React from "react";
import BreadCrumbComponent from "./bread-crumb-component";

const BreadCrumbsComponent = () => {
    return(
        <div className="flex-column" style={{textAlign: "right", marginRight: "5rem", gap: "0.4rem", color: "var(--highlight-violet) !important"}}>
            <BreadCrumbComponent sectionId="#home" title={"Home"}></BreadCrumbComponent>
            {/*<BreadCrumbComponent sectionID="#interests" title={"Interessen"}></BreadCrumbComponent>*/}
            <BreadCrumbComponent sectionId="#projects" title={"ProjektErfahrung"}></BreadCrumbComponent>
            <BreadCrumbComponent sectionId="#portfolio" title={"Portfolio"}></BreadCrumbComponent>
            <BreadCrumbComponent sectionId="#certificates" title={"Zertifikate"}></BreadCrumbComponent>
        </div>
    );
}

export default BreadCrumbsComponent;