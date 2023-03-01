import Link from "@mui/material/Link";
import * as React from "react";
import BreadCrumbComponent from "./bread-crumb-component";

const BreadCrumbsComponent = () => {
    return(
        <div className="flex-column" style={{textAlign: "right", marginRight: "5rem", gap: "0.4rem", color: "var(--highlight-violet) !important"}}>
            <BreadCrumbComponent title={"Home"}></BreadCrumbComponent>
            {/*<BreadCrumbComponent title={"Steckbrief"}></BreadCrumbComponent>*/}
            <BreadCrumbComponent title={"ProjektErfahrung"}></BreadCrumbComponent>
            <BreadCrumbComponent title={"Portfolio"}></BreadCrumbComponent>
            <BreadCrumbComponent title={"Zertifikate"}></BreadCrumbComponent>
        </div>
    );
}

export default BreadCrumbsComponent;