import React from "react";
import InfoPanelComponent from "../utils/info-panel-component";
import {Avatar} from "@mui/material";

const InterestsComponent = () => {

    const generateSkillTree = () => {
        const divs = [];
        // for (let i = 0; i < 5; i++) {
        //     const rot = "rotate(" + (i * 45) + "deg)";
        //     divs.push(<div key={i} style={{transform: rot, height: "40px", backgroundColor: "white", width: "3px"}}></div>);
        // }
        let rot = "rotate(" + 45 + "deg)";
        divs.push(
            <div className="flex-column" style={{width: "60px"}}>
                <div key={1} style={{transform: rot, height: "80px", backgroundColor: "white", width: "1px"}}></div>
                <div style={{border: "1px solid white", borderRadius: "0.5rem", padding: "1rem", width: "60px"}} className="flex-column">
                    Fullstack Dev
                </div>
            </div>
        );
        rot = "rotate(" + -45 + "deg)";
        divs.push(<div key={2} style={{transform: rot, height: "80px", backgroundColor: "white", width: "1px"}}></div>);



        return(
            <div>
                <div style={{border: "1px solid white", borderRadius: "0.5rem"}} className="flex-column">
                    Interessen
                </div>
                <div style={{gap: "4rem"}} className={"flex-row"}>
                    {divs}
                </div>
            </div>
        );
    }

    return(
        <div style={{width: "100%", alignSelf: "center"}} className={"section-container flex-column"}>
            {generateSkillTree()}

            <div style={{color: "var(--highlight)", fontSize: "1.2rem"}}>
                Steckbrief
            </div>
            <div style={{
                fontSize: "1.8rem",
                border: "1px var(--highlight) solid",
                borderRadius: "1rem",
                padding: "2rem"
            }}>
                <Avatar alt="Remy Sharp"
                        src={require("../dibo_2.jpg")}
                        sx={{width: 50, height: 50}}
                        variant="rounded"
                        style={{border: "2px var(--avatar-pink) solid", alignSelf: "baseline"}}/>
                <ul style={{
                    listStyle: "none",
                    margin: "0rem",
                    padding: "0rem",
                    gap: "1rem"
                }}
                    className={"flex-column"}
                >
                    <div>Lisa Dibo Marie Gonda</div>
                    <div>Bachelor of Science</div>


                    Interessen
                    <li>Fullstack Dev</li>
                    <li>UX</li>
                    <li>Game Dev</li>
                    <li>Agile Methoden</li>
                    Ansonsten interessiere ich mich für Pixel Art, Klavier spielen und Sprachen!
                </ul>
            </div>
        </div>

        // <div>
        //     <InfoPanelComponent>
        //         <div>
        //             Interessen
        //         </div>
        //         Fullstack
        //     </InfoPanelComponent>
        // </div>
    );
}

export default InterestsComponent;