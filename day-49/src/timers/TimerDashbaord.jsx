import { useEffect } from "react";
import { useState } from "react"
import TimerData from "../data/data"
import Timer from "./timer"
import TimerForm from "./TimerForm";

export default function TimerDashbaord() {

    const [projectData, setProjectData] = useState([]);
    const [runningTime, setRunningTime] = useState(0);

    useEffect(() => {
        setProjectData(TimerData);

    }, [projectData])



    return (
        <div>
            <h1>Timmers</h1>
            {TimerData &&
                TimerData.map((data, index) => {
                    return <Timer
                        key={index}
                        project={data.project}
                        title={data.title}
                        elapsed={data.elapsed}
                        runningSince={data.runningSince}
                        runningTime={runningTime}
                    />
                })}
            <TimerForm />
        </div>
    )
}