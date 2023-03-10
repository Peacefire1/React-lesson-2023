import { useEffect } from "react";
import { useState } from "react"
import TimerData from "../data/data"
import EditableTimerList from "./EditableTimerList";
import TimerForm from "./TimerForm";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { newTimer } from "./Helpers"

export default function TimerDashbaord() {

    // const [projectData, setProjectData] = useState([]);
    // const [runningTime, setRunningTime] = useState(0);
    const [timers, setTimers] = useState({ timers: [] })



    useEffect(() => {
        setInterval(() => setTimers({ timers: TimerData }), 10000)

    }, [])


    function handleCreateFormSubmit(timer) {
        createTimer(timer)
    }

    function createTimer(timer) {
        const t = newTimer(timer)

        setTimers({
            timers: timers.timers.concat(t)
        })
    }

    function handleEditFormSubmit(timer) {
        updateTimer(timer)
    }

    function updateTimer(attributes) {
        setTimers({
            timers: timers.timers.map(timer => {
                if (timer.id === attributes.id) {
                    timer.title = attributes.title
                    timer.project = attributes.project
                }
                return timer;
            })
        })
    }


    function handleStopClick(timerId) {
        stopTimer(timerId)
    }

    function stopTimer(timerId) {
        const now = Date.now()
        setTimers({
            timers: timers.timers.map(timer => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    timer.elapsed = timer.elapsed + lastElapsed;
                    timer.runningSince = null;
                }
                return timer;
            })
        })
    }

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
                        onStopClick={handleStopClick}
                        onFormSubmit={handleEditFormSubmit}
                    />
                    <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
                </div>
            }
        </div>
    )
}