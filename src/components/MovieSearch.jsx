
function MovieSearch({ searchTerm, onSearchChange, onSearch }) {
  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={onSearchChange}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default MovieSearch;
