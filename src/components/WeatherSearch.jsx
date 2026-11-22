
function WeatherSearch({ city, onCityChange, onSearch }) {
  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={onCityChange}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default WeatherSearch;
