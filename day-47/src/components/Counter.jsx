import { useState } from "react"

export default function Counter() {
    const [click, setClick] = useState(0)
    return (
        <div className="Card">
            <p className="Number">{click}</p>
            <button onClick={() => {
                setClick(click + 1)
            }}>Add one</button>
        </div>
    )
}