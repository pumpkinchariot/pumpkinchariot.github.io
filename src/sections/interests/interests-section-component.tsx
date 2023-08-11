import React, {useEffect, useState} from "react";
import InfoPanelComponent from "../../components/info-panel/info-panel-component";
import "./interests-section-component.css";
import {FormattedMessage} from "react-intl";

interface InterestsSectionComponentProps {
    scrollValue: number;
}

const InterestsSectionComponent = (props: InterestsSectionComponentProps) => {
    const [seedOpacityValue, setSeedOpacityValue] = useState(0);
    const [seedRotationValue, setRotationValue] = useState(0)

    const [treeOpacityValue, setTreeOpacityValue] = useState(0);

    const [pathArray, setPathArray] = useState<any>([]);

    const [show, setShow] = useState(true);

    const backgroundStyle = {};

    useEffect(() => {

    }, [pathArray]); // Beim ersten Rendern die Zustandsvariable auf true setzen


    useEffect(() => {
        setRotationValue(props.scrollValue - 250)

        setTreeOpacityValue((props.scrollValue) / 600)
        if (props.scrollValue > 1000) {
            let opacity = treeOpacityValue / (props.scrollValue / 1000);
            setTreeOpacityValue(opacity > 0.05 ? opacity : 0.05)
        }


        let it = parseInt((props.scrollValue / 70).toString(), 10);
        it = it > 8 ? 8 : it;


        setPathArray([
            ...generateTrapez(800, 800, 120, 200, 0, 10, it < 0 ? 0 : it)
        ]);
    }, [props.scrollValue]);


    function rotatePoint(pointX: number, pointY: number, anchorX: number, anchorY: number, angle: number): [number, number] {
        // Umrechnung des Winkels in Radianten
        const radians = (angle * Math.PI) / 180;

        // Verschiebung des Punktes, um den Ankerpunkt zum Ursprung zu machen
        const shiftedX = pointX - anchorX;
        const shiftedY = pointY - anchorY;

        // Rotation des verschobenen Punktes um den Ursprung
        const rotatedX = shiftedX * Math.cos(radians) - shiftedY * Math.sin(radians);
        const rotatedY = shiftedX * Math.sin(radians) + shiftedY * Math.cos(radians);

        // Rückverschiebung des rotierten Punktes zum ursprünglichen Koordinatensystem
        const finalX = rotatedX + anchorX;
        const finalY = rotatedY + anchorY;

        return [finalX, finalY];
    }

    function generateTrapez(positionX: number, positionY: number, width: number, height: number, angle: number, angleDelta: number, iterations: number): any {
        if (iterations <= 0) {
            return [];
        }

        // Berechnung der Koordinaten des Trapezes
        const x1 = positionX - width / 2.2;
        const y1 = positionY;

        const x2 = positionX + width / 2.2;
        const y2 = positionY;

        const x3 = positionX - (width * 0.5) / 2;
        const y3 = positionY - height;

        const x4 = positionX + (width * 0.5) / 2;
        const y4 = positionY - height;

        // Erstellung des SVG-Pfades für das Trapez
        const path = `M ${x1},${y1} L ${x2},${y2} L ${x4},${y4} L ${x3},${y3} Z`;

        const nextPosX = positionX
        const nextPosY = y4

        const anchor = [positionX, positionY]
        const rotatedPos = rotatePoint(nextPosX, nextPosY, anchor[0], anchor[1], angle)

        const newDelta = angleDelta / 2

        const center = [positionX, positionY - height / 2]
        const rotatedCenter = rotatePoint(center[0], center[1], anchor[0], anchor[1], angle)


        let currentHeight = 0;
        if (iterations > 2) {
            currentHeight = height * 0.72;
        } else {
            currentHeight = height * 0.8;
        }

        return [
            {
                path: path,
                anchor: anchor,
                angle: angle,
                rotatedPos: rotatedPos,
                center: rotatedCenter,
                //rotatedPos2: rotatedPos2,
            },
            ...generateTrapez(rotatedPos[0], rotatedPos[1], width / 2, currentHeight, angle - angleDelta - 25, newDelta, iterations - 1)
            , ...generateTrapez(rotatedPos[0], rotatedPos[1], width / 2, currentHeight, angle + angleDelta + 25, newDelta, iterations - 1)
            ,
        ]
    }

    const fadeStyle = {
        opacity: show ? 1 : 0,
        transition: 'opacity 2s'
    };

    const sectionStyle = {
        // width: "40vw",
        // height: "20rem",
        backgroundColor: "white",
        borderWidth: "3px",
        zIndex: 3,
        width: "20vw",
        animation: "fade-in 1",
        borderStyle: "none"
    }

    return <section id="interests"
                    style={{
                        width: "100%",
                        alignSelf: "center",
                        minHeight: "150vh",
                        // position: "relative",
                        alignItems: "center",
                        justifyContent: "end"
                    }}
                    className={"section-container flex-column"}>

        <div style={{
            backgroundColor: "white",
            zIndex: "3",
            padding: "0.5rem",
            color: "black",
            border: "black solid 1px",
            margin: "4rem"
        }}>
            ❮<FormattedMessage id="title.interests"/>❯
        </div>

        <div className={"flex flex-row"} style={{gap: "3rem"}}>
            <InfoPanelComponent customStyle={sectionStyle}>
                <h3>
                    Game Design
                </h3>
                <div>
                    ★Frameworks / Engines★
                </div>
                LibGDX, Box2d, Godot
                PixelArt
            </InfoPanelComponent>
            <InfoPanelComponent customStyle={sectionStyle}>
                <h3>
                    Programming
                </h3>
                <div>
                    ★Languages★
                </div>
                Java, Typescript, Javascript, HTML, CSS, SQL, C++
                <div>
                    ★Frameworks★
                </div>
                AWS, React, Angular
            </InfoPanelComponent>
            <InfoPanelComponent customStyle={sectionStyle}>
                <h3>
                    Others
                </h3>
                #CozyGaming
                #Piano
                #ArtsAndCrafts
                #StarTrek
            </InfoPanelComponent>
        </div>
        <div style={{height: "60vh"}}>
        </div>

        <svg height={1400} width={1400} id="my-object" transform={"scale(1.4)"}
             style={{position: "fixed", zIndex: "0", top: 100, right: 250, opacity: treeOpacityValue}}>
            {pathArray.map((obj: any, index: any) =>
                <>
                    <path
                        d={obj.path}
                        fill={"#d4c9f8"}
                        transform={`rotate(${obj.angle} ${obj.anchor[0]},${obj.anchor[1]})`}
                    />

                </>
            )}
            // TODO add 3 triangles to fake roots
        </svg>

    </section>;
}

export default InterestsSectionComponent;