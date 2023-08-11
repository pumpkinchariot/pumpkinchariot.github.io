import React from "react";

interface SeedAnimationProps {
    opacityValue: number;
    rotateValue: number
}

const SeedAnimation = (props: SeedAnimationProps) => {

    return (
        <>
            <div style={{
                top: "50vh",
                alignSelf: "center",
                zIndex: "5",
                position: "fixed",
                opacity: `${props.opacityValue}`,
                display: "flex",
                flexDirection: "row",
                border: "white solid 4px",
                width: "3rem",
                height: "5rem",
                borderRadius: "50%"
            }}>
            </div>
        </>
    )
}

export default SeedAnimation;