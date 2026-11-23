import { useState } from "react";
import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";


function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  async function handleSearch(event) {
    event.preventDefault();

    if (searchTerm.trim() === "") {
      setError("Please enter a movie name");
      setMovies([]);
      return;
    }

    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm.trim())}&apikey=${API_KEY}`
      );

      const data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error);
      }

      setMovies(data.Search);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="movies-container">
      <h1>Movie Search App</h1>

      <MovieSearch
        searchTerm={searchTerm}
        onSearchChange={handleChange}
        onSearch={handleSearch}
      />

      {loading && <h3>Loading movies...</h3>}

      {error && <p>{error}</p>}

      {movies.length > 0 && (
  <div>
    <h2>Search Results</h2>
    <MovieList movies={movies} />
  </div>
)}
        
     
    </div>
  );
}

export default Movies;
