import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import { fetchMovieById} from "services/api";
import { BackLink } from "components/BackLink";
import { MovieInfo } from "components/MovieInfo";
import { Loader } from "components/Loader";




const MovieDetails = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  
  useEffect(() => {
    async function fetchMovie() {
        const movie = await fetchMovieById(movieId);
        setMovie(movie);
    }
    fetchMovie().catch(error => {
        setError("The resource you requested could not be found.");
        console.error(error);
    }); 
    
  }, [movieId]);

  if (error) {
    return (
        <div>
            <BackLink to={backLinkHref} />
            <h1>{error}</h1>
        </div>
    )
  }

    return (
        <div>
            <BackLink to={backLinkHref} />
            <MovieInfo 
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            overview={movie.overview}
            genres={movie.genres}/>
           <p>Additional information</p>
             <ul style={{borderBottom: "1px solid black", paddingBottom: 12}}>
                <li>
                 <Link to="cast" state={{from: backLinkHref}}>Cast</Link>
                </li>
                <li>
                 <Link to="reviews" state={{from: backLinkHref}}>Reviews</Link>
                </li>
                </ul>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </div>
       
    )
}

export default MovieDetails;


