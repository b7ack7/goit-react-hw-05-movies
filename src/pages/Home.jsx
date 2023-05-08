import {useEffect, useState} from "react";
import { MovieList } from "components/MovieList";
import { fetchTrendingMovies } from "services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
    }
    fetchMovies().catch(error => {
        setError("Something went wrong, please try again later");
        console.error(error);
    });
  }, [])

  if (error) {
    return <h1>{error}</h1>
  }
  
    return (
        <div>
           <h1>Trending today</h1>
           <MovieList movies={movies} />
        </div>
    )
}

export default Home;