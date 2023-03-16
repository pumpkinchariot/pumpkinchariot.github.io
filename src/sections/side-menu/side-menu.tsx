import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import SocialsComponent from "../../components/social/socials-component";
import BreadCrumbsComponent from "../../components/bread-crumbs/bread-crumbs-component";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const SideMenu = () => {
    return (
        <div style={{position: "fixed", top: "60vh", right: "2vw", zIndex: "9999", gap: "3rem"}} className="flex-column">
            <BreadCrumbsComponent></BreadCrumbsComponent>
            <SocialsComponent></SocialsComponent>
        </div>
    );
}
export default SideMenu;