import { useState } from "react";
import moviesDataJSON from "../../movies-data.json";
import MovieCard from "./MovieCard";
import FilterMovies from "./FilterMovies";  
import AddMovie from "./AddMovie";

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON); // <== ADD
 
  
  // UPDATE
  const addNewMovie = (movie) => {
    const updatedMovies = [...movies, movie];
    const updatedMoviesData = [...moviesData, movie]; // <== ADD
 
    setMovies(updatedMovies);
    setMoviesData(updatedMoviesData);  // <== ADD
  };
 
  
  // ADD
  const filterMovieList = (str) => {
    let filteredMovies;
    if (str === "All") {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }
 
    setMovies(filteredMovies);
  };
 
  return (
    <div>
      <FilterMovies filterMovies={filterMovieList} />  {/* <== UPDATE */}
      
      <AddMovie addMovie={addNewMovie} />
      { movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      }) }
    </div>
  );
}
 
export default MovieList;