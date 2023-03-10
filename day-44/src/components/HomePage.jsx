import { Link, useLocation } from "react-router-dom"



export default function HomePage() {

    const location = useLocation()

    return (
        <div>
            <h1>{location.state.message}</h1>
            <p>{location.state.timestamp}</p>
            <Link to={"/"}>Back</Link>
        </div>
    )
}