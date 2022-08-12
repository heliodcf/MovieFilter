// src/components/MovieList.js
 
import { useState } from "react";
import moviesDataJSON from "../Movies-data.json";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";
import FiterMovies from "./FilterMovies";
 
 
function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);


  const addNewMovie = (newMovie) => {
    const id = '1ae22f'+ movies.length;
    newMovie._id = id;
    //const moviesCopy = [...movies]; //copia do array original
    //moviesCopy.push(newMovie); //
    //setMovies(moviesCopy); // altera o valor
    const updatedMovies = [ ...movies, newMovie];
    const updatedMoviesData = [...moviesData, newMovie];
    setMovies(updatedMovies);
    setMoviesData(updatedMoviesData);
  }
 
  const FilterMovieList = (qualquernome) => {
    let filteredMovies;
    if (qualquernome === 'ALL'){
        filteredMovies = moviesData;
    } else {
        filteredMovies = moviesData.filter((eachMovie) => {
            return eachMovie.title[0].toLowerCase() === qualquernome.toLowerCase();
        })
    }
    setMovies(filteredMovies);
    }
  


  return (
    <div>
      
      <AddMovie addMovie={addNewMovie}/>
      <h2>Movie List</h2>
      <FiterMovies filterMovies={FilterMovieList}/>
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}
 
export default MovieList;