import withoutResults from '../mocks/no-results.json'
import { useState, useRef } from 'react'

const API_KEY = '2fa0b8e7'

export function useMovies({ search }) {
    const [responseMovies, setResponseMovies] = useState([])
    const previousSearch = useRef(search)

    const movies = responseMovies.Search
    const mappedMovies = movies?.map((movie) => ({
        title: movie.Title,
        year: movie.Year,
        id: movie.imdbID,
        poster: movie.Poster
    }))

    const getMovies = () => {
        if (search === previousSearch.current) return
        if (search) {
            //setResponseMovies(withResults)
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
                .then((response) => response.json())
                .then((data) => {
                    setResponseMovies(data)
                })
        }else{
            setResponseMovies(withoutResults)
        }
    }
    return { movies: mappedMovies, getMovies }
}