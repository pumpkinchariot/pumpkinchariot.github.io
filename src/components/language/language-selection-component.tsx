import React from "react";
import "./language-selection-component.css";

interface LanguageSelectionComponent {
    setLocale: (locale: string) => void
}

const LanguageChoiceComponent = (props: LanguageSelectionComponent) => {
    return(
        <div className="language-section flex-row">
            <button className="language-button" onClick={() => props.setLocale('de')}>DE</button>
            <div className="language-button-spacer"></div>
            <button className="language-button" onClick={() => props.setLocale('en')}>ENG</button>
            <div className="language-button-spacer"></div>
            <button className="language-button" onClick={() => props.setLocale('fr')}>FR</button>
        </div>
    );
}

export default LanguageChoiceComponent;