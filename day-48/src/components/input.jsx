import { useState } from "react";

export default function Input() {
    const [type, setType] = useState("")

    function handleChanage(e) {
        console.log(e.target.value);
        setType(e.target.value)
    }
    return (
        <div>
            <form action="">

                <label htmlFor="">First:</label>
                <input name="first" type="text" onChange={handleChanage} value={type} />
                <label htmlFor="">Second:</label>
                <input name="second" type="text" onChange={handleChanage} value={type} />
            </form>
        </div>
    )
}