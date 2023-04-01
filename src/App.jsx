import React from "react"
import Home from "./Home"
import Quiz from "./Quiz"

export default function App(){
    const [clickedStart, setClickedStart] = React.useState(false)

    return (
        <>
            {
                clickedStart ? 
                <Quiz setClickedStart={setClickedStart}/> : 
                <Home setClickedStart={setClickedStart}/>
            }
        </>
    )
}