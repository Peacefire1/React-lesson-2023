import Container from "@mui/material/Container"
import { Card, Typography } from "@mui/material"
import { Box } from "@mui/system"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import TimerActionButton from "./TimerAcctionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";


export default function Timer({ title, project, elapsed, runningSince, runningTime }) {

    const [timerIsRunning, setTimerIsRunnning] = useState(false)
    const timer = renderElapsedString(elapsed, runningSince)


    return (
        <Container maxWidth="sm">
            <Card sx={{ maxWidth: 345 }}>
                <Typography sx={{ fontSize: 28 }} color="text.secondary"  >
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {project}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h1>{runningTime}</h1>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h1>{timer}</h1>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: 2 }}>
                    <DeleteIcon />
                    <ModeIcon />
                </Box>
                <TimerActionButton isTimerRunning={timerIsRunning}
                    onStartClick={() => {
                        setTimerIsRunnning(true);
                    }}
                    onStopClick={() => {
                        setTimerIsRunnning(false);
                    }}
                />
            </Card>

        </Container>
    )
}