import Container from "@mui/material/Container"
import { Card, Typography } from "@mui/material"
import { Box } from "@mui/system"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import TimerActionButton from "./TimerAcctionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";


export default function Timer({ id, title, project, elapsed, runningSince, onTrashClick, onStartClick, onStopClick, onEditClick }) {

    const [timerIsRunning, setTimerIsRunnning] = useState(false)
    const timer = renderElapsedString(elapsed, runningSince)

    function handleEditClick() {
        onEditClick(id)
    }

    function handleStopClick() {
        onStopClick(id);
    }

    function handleStartClick() {
        onStartClick(id);
    }


    function handleDelete() {
        onTrashClick(id)
    }

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
                    <h1>{ }</h1>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h1>{timer}</h1>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: 2 }}>
                    <DeleteIcon onClick={handleDelete} />
                    <ModeIcon onClick={handleEditClick} />
                </Box>
                <TimerActionButton isTimerRunning={runningSince}
                    onStartClick={handleStartClick}
                    onStopClick={handleStopClick}
                />
            </Card>

        </Container>
    )
}