function RenderMovies({movies}) {
    return (
        <ul className="results_list">
            {movies.map((movie) => (
                <li key={movie.id} className="results_item">
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
                </li>
            ))}
        </ul>
    )
} 

export function Movies({movies}) {
    const hasMovies = movies && movies.length > 0

    return (
        hasMovies ? <RenderMovies movies={movies} /> : <p>No movies found</p>
    )
}