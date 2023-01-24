import Panel from "./Panel";
import{Link} from "react-router-dom"
import { useState } from "react";

export default function Accordion() {
    const[activeIndex, setActiveIndex] = useState(0)

    return (
        <div>
            <h2>Ulaanbaatar mongol uls</h2>
            <Panel title="tuhai" isActive={activeIndex === 0} OnShow={() => setActiveIndex(0)}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem incidunt, eius perspiciatis modi iste eaque nihil, odit libero illum, tempore quam doloremque accusantium. Voluptates dolore molestias unde dolor odit.
            </Panel>
            <Panel title="elit" isActive={activeIndex === 1} OnShow={() => setActiveIndex(1)}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem incidunt, eius perspiciatis modi iste eaque nihil, odit libero illum, tempore quam doloremque accusantium. Voluptates dolore molestias unde dolor odit.
            </Panel>
            
        </div>
    )
}