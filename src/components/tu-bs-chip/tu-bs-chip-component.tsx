import {Chip} from "@mui/material";
import React from "react";
import "./tu-bs-chip-components.css";

interface TuBsChipComponentProps {
    //customStyle?: React.CSSProperties;
}

const TuBsChipComponent = (props: TuBsChipComponentProps) => {
    return (
        <a href="https://www.tu-braunschweig.de/">
        <Chip
            //style={props.customStyle}
            id={"tu-chip"}
            icon={<img id={"tu-icon"} src={require("../../tu_wappen.jpg")}></img>}
            label="Technischen Universität Braunschweig"
            clickable/>
        </a>
    );
}

export default TuBsChipComponent;