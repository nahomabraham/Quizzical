import React from "react";
import Question from "./Question"
import {nanoid} from "nanoid";
import initGuess from "../DataModel/init.json"

export default function Quiz(){

    const [guesses, setGuesses] = React.useState(initGuess)
    
    const questionElements = []
    for (let i = 0; i < 5; i++) {
        questionElements.push(<Question guess={guesses[i]} toggle={toggle}/>); 
    }

    function toggle(id){
        setGuesses(prevGuesses => prevGuesses.map(guess => guess.map(choice => {
            return choice.id === id ?
            {...choice, isChosen: !choice.isChosen} :
            choice
        })))
    }
    
    return (
        <main className="quiz">
            {questionElements}
            <button className="quiz-check">Check Answers</button>
        </main>
    )
}