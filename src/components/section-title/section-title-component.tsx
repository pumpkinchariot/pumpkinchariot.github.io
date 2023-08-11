import React, {useEffect, useState} from "react";
import "../../App.css";

interface SectionTitleComponentProps {
    scrollValue?: number;
    title: React.ReactNode;
    customStyle?: React.CSSProperties;
}

const SectionTitleComponent = (props: SectionTitleComponentProps) => {

    const [opacityValue, setOpacityValue] = useState(0);

    useEffect(() => {
        setOpacityValue((props.scrollValue!! / 200) - 1.4);

    }, [props.scrollValue]);

    return (
        <div className={"section-title"} style={{opacity: `${opacityValue}`}}>
            ❮<span style={props.customStyle ? props.customStyle : {color: "var(--white)"}}>{props.title}</span>❯
        </div>
    );
}

export default SectionTitleComponent;