import React from "react";
import { useState } from "react";

function Paragraph() {
    const [Counnter, setCounter] = useState(0)
    const [inputText, setInputTExt] = useState("")
    const handleInput = function (event) {
        setInputTExt(event.target.value)
    }
    return (
        <div>

            <p>{Counnter}</p>
            <button onClick={() => {
                setCounter(Counnter + 1)
            }}>Submit</button>
            <input value={inputText} onChange={handleInput} />
            <p>{inputText}</p>
        </div>
    )
}

export default Paragraph