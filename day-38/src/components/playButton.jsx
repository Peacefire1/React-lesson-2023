import ChildButton from "./ChildButton";

export default function PlayButton({ movieName }) {
    function handlePlayclick() {
        alert(`Playing ${movieName}!`)
    }

    return (
        <ChildButton onClick={handlePlayclick}>Play {movieName}</ChildButton>

    )
}