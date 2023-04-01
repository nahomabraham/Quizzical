import React from "react"

export default function App({setClickedStart}){
    return (
        <main className="home">
            <div className="home-title">Quizzicals</div>
            <div className="home-description">Some description if needed</div>
            <button 
                onClick={() => setClickedStart(true)} 
                className="home-start">Start Quiz
            </button>
        </main>
    )
}