import {  useSearchParams } from "react-router-dom";
import {useEffect, useState} from "react";
import { SearchBar } from "components/SearchBar";
import { MovieList } from "components/MovieList";
import { fetchMovieBySearchQuery } from "services/api";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    async function fetchMovies() {
        const movies = await fetchMovieBySearchQuery(query);
        setMovies(movies);
    }
    fetchMovies().catch(error => {
        setError("Something went wrong, please try again later");
        console.error(error);
    });
  }, [query])
  
  const getSearchQuery  = (searchQuery) => {
    setSearchParams({query: searchQuery});
  }

  if (error) {
    return <h1>{error}</h1>
  }

    return (
        <div>
           <SearchBar onSubmit={getSearchQuery} searchQuery={query}/>
           <MovieList movies={movies}/>
        </div>
    )
}

export default Movies;