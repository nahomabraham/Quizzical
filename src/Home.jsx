import React from "react"

export default function App({setClickedStart}){
    return (
        <main>
            <div className="main-title">Quizzicals</div>
            <div className="main-description">Some description if needed</div>
            <button onClick={() => setClickedStart(true)} className="main-start">Start Quiz</button>
        </main>
    )
}