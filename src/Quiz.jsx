import React from "react";
import Question from "./Question"

export default function Quiz(){
    return (
        <main className="quiz">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <button className="quiz-check">Check Answers</button>
        </main>
    )
}