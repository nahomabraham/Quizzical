import React from "react";

export default function Choice(props){

    return (
        <div onClick={() => props.toggle(props.choice.id)} className={props.choice.isChosen ? "choice-clicked" : "choice"}>
            {props.name}
        </div>
    )
}