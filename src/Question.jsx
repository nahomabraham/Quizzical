import React from "react";
import Choice from "./Choice";

export default function Question(props){

    const choiceElements = []
    for (let i = 0; i < 4; i++) {
        choiceElements.push(<Choice choice={props.guess[i]} toggle={props.toggle} name={`choice ${i+1}`}/>);
        
    }
    return (
        <div className="question">
            <div className="question-title">Question</div>
            <div className="question-choices">
            {choiceElements}
            </div>
            <hr />
        </div>
    )
}