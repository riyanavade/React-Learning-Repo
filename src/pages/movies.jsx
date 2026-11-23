
import { useState } from "react";
import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emptyMessage, setEmptyMessage] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  async function fetchMovies(search, page) {
    setLoading(true);
    setError("");
    setEmptyMessage("");
    setMovies([]);

    try {
      let url = `https://www.omdbapi.com/?s=${encodeURIComponent(search)}&page=${page}&apikey=${API_KEY}`;

      if (year.trim() !== "") {
        url += `&y=${year}`;
      }

      if (type !== "") {
        url += `&type=${type}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "False") {
        if (data.Error === "Movie not found!") {
          setEmptyMessage("No movies found. Try another search!");
          setTotalPages(0);
          return;
        }

        throw new Error(data.Error);
      }

      setMovies(data.Search);
      setCurrentPage(page);
      setTotalPages(
        Math.ceil(Number(data.totalResults) / 10)
      );

    } catch (err) {
      setError(err.message);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(event) {
    event.preventDefault();

    if (searchTerm.trim() === "") {
      setError("Please enter a movie name");
      setMovies([]);
      setEmptyMessage("");
      setTotalPages(0);
      return;
    }

    fetchMovies(searchTerm.trim(), 1);
  }

  function handlePageChange(page) {
    fetchMovies(searchTerm.trim(), page);
  }

  return (
    <div className="movies-container">

      <h1>Movie Search App</h1>

      <MovieSearch
        searchTerm={searchTerm}
        onSearchChange={handleChange}
        onSearch={handleSearch}
      />

      <div className="movie-filters">

        <label>Release Year:</label>
        <input
          type="number"
          placeholder="Enter year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />

        <label>Movie Type:</label>
        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>

      </div>

      {loading && <h3>Loading movies...</h3>}

      {error && <p>{error}</p>}

      {emptyMessage && <h3>{emptyMessage}</h3>}

      {movies.length > 0 && !loading && (
        <>
          <h2>Search Results</h2>

          <MovieList movies={movies} />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}

    </div>
  );
}

export default Movies;
