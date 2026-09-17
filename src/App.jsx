import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useState } from 'react'


function App() {
  const { movies: mappedMovies } = useMovies()
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Searching for:', query)
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1> Movie Browser </h1>
        <form className="form" onSubmit={handleSubmit}>
          <input value={query} onChange={handleChange} name="query" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
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
