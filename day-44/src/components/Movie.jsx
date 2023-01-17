import { useParams, useLocation } from "react-router-dom"
import movieData from "../data/movies"





export default function Movie() {
    const { id } = useParams()
    const location = useLocation()
    const movie = movieData.filter(data => data.id == id)

    return (
        <div>
            <h1>Movie Detail Page {id}</h1>
            {/* <div>
                {location.state.id}
            </div>
            <div>
                {location.state.name}
            </div>
            <div>
                {location.state.ISBN}
            </div> */}
            {
                movie.map((m, idx) => {
                    return (
                        <div key={idx}>
                            <p>{m.id}</p>
                            <p>{m.name}</p>
                            <p>{m.ISBN}</p>

                        </div>
                    )
                })}
        </div>
    )
}