import data from "../services/data"
import { useState, useEffect } from "react"
import Movie from "./Movie"
import Details from "./Details"


const Content = () => {
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState([])

    useEffect(() => {
        data
            .getAll()
            .then(response => {
                setMovies(response)
            })
    }, [])

    console.log(movie)

    return (
        <div>
            <div class="grid grid-cols-5  mx-4 mt-5 mb-5 justify-items-center">
                <Movie data={movies} set={setMovie} />
                <Details data={movie} set={setMovie} />
            </div>

        </div>
    )
}

export default Content