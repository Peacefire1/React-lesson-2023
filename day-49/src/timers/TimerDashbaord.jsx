import { useEffect } from "react";
import { useState } from "react"
import TimerData from "../data/data"
import EditableTimerList from "./EditableTimerList";
import Timer from "./timer"
import TimerForm from "./TimerForm";

export default function TimerDashbaord() {

    // const [projectData, setProjectData] = useState([]);
    // const [runningTime, setRunningTime] = useState(0);
    const [timers, setTimers] = useState({ timers: [] })

    useEffect(() => {
        setInterval(() => setTimers({ timers: TimerData }), 1000)

    }, [])

    function handleStartClick(timerId) {
        startTimer(timerId);
    }

    function startTimer(timerId) {
        const now = Date.now()
        setTimers({
            timers: timers.timers.map(timer => {
                if (timer.id === timerId) {
                    timer.runningSince = now
                    return timer
                } else {
                    return timer
                }
            })
        })
    }


    function handleTrashClick(timerId) {
        deleteTimer(timerId)
    }

    function deleteTimer(timerId) {
        setTimers({
            timers: timers.timers.filter((t) => t.id !== timerId)
        })
    }

    return (
        <div>
            <h1>Timmers</h1>

            {
                timers.timers && <div>
                    <EditableTimerList timers={timers.timers}
                        onTrashClick={handleTrashClick}
                        onStartClick={handleStartClick}
                    />

                </div>
            }
        </div>
    )
}