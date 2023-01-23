import { useEffect } from "react";
import { useState } from "react"


export default function Button() {
    const [isPlaying, setIsPlaying] = useState(false);


    useEffect(() => {
        if (isPlaying) {
            console.log("It's playing ");
        } else {
            console.log("It's not playing");
        }
    }, [isPlaying])

    function handleClick() {
        console.log("You clicked me!");
        setIsPlaying(!isPlaying)
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}