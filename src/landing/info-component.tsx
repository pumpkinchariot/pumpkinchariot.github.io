import TuBsChipComponent from "../tu-bs-chip/tu-bs-chip-component";
import React from "react";
import "./info-component.css";
import "../animations.css";

const InfoComponent = () => {
    return(

        <div className={"info-text"}>
            Derzeit absolviere ich ein Halbtagsstudium im Masterstudiengang Informatik an der <TuBsChipComponent/>
            <span> und arbeite nebenbei als Full-Stack Entwicklerin im Automobilumfeld.</span>
        </div>
    );
}

export default InfoComponent;