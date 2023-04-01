import React from "react"

export default function App({setClickedStart}){
    return (
        <main className="home">
            <div className="home-title">Quizzicals</div>
            <div className="home-description">The Ultimate Trivia Challenge!</div>
            <button 
                onClick={() => setClickedStart(true)} 
                className="home-start">Start Quiz
            </button>
        </main>
    )
}