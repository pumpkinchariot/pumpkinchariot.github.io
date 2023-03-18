import {Chip} from "@mui/material";
import React from "react";
import "./tu-bs-chip-components.css";
import {FormattedMessage} from "react-intl";

interface TuBsChipComponentProps {
    //customStyle?: React.CSSProperties;
}

const TuBsChipComponent = (props: TuBsChipComponentProps) => {
    return (
        <a href="https://www.tu-braunschweig.de/">
        <span className="tu-chip">
            {/*<img id={"tu-icon"} src={require("../../tu_symbol.jpg")}></img>*/}
            <FormattedMessage id="home.tu-bs"/>
        </span>
        </a>
    );
}

export default TuBsChipComponent;