import {IconButton} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, {ReactNode} from "react";
import {SvgIconComponent} from "@mui/icons-material";

interface SocialLinkComponentProps {
    link: string;
    children?: ReactNode;
}

const SocialLinkComponent = (props: SocialLinkComponentProps) => {
    return (
        <a href={props.link}>
            <IconButton className="icon-button">
                {props.children}
            </IconButton>
        </a>
    );
}

export default SocialLinkComponent;