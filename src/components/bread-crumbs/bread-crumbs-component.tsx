import Link from "@mui/material/Link";
import * as React from "react";
import BreadCrumbComponent from "./bread-crumb-component";
import {FormattedMessage, IntlProvider} from "react-intl";


const BreadCrumbsComponent = () => {
    return (
        <div className="flex-column" style={{
            textAlign: "right",
            gap: "0.4rem",
            color: "var(--highlight-violet) !important",
            alignItems: "end"
        }}>
            <BreadCrumbComponent sectionId="#home" title={<FormattedMessage id="breadcrumb.home"/>}/>
            {/*<BreadCrumbComponent sectionID="#interests" title={"Interessen"}></BreadCrumbComponent>*/}
            <BreadCrumbComponent sectionId="#projects" title={<FormattedMessage id="breadcrumb.experience"/>}/>
            {/*<BreadCrumbComponent sectionId="#portfolio" title={"Portfolio"}></BreadCrumbComponent>*/}
            <BreadCrumbComponent sectionId="#certificates" title={<FormattedMessage id="breadcrumb.certificates"/>}/>
        </div>
    );
}

export default BreadCrumbsComponent;