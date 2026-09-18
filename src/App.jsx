import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies: mappedMovies, getMovies } = useMovies( {search} )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1> Buscador de peliculas </h1>
        <form className="form" onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} name="query" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
        <div 
          className="error">{error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </header>

      <main>
        <section className="results">
          <Movies movies={mappedMovies} />
        </section>
      </main>
    </div>
  )
}

export default App
