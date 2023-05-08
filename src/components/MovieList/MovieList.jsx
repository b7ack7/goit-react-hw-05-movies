import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { StyledLink } from "./MovieList.styled"

export const MovieList = ({movies}) => {
    const location = useLocation();
    return (
     <ul>
        {movies.map((movie) => {
            return (
                <li key={movie.id}>
                    <StyledLink to={`/movies/${movie.id}`} state={{from: location}}>
                    {movie.name? movie.name : movie.title}
                    </StyledLink>
                </li>
            )
        })}
     </ul>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        title: PropTypes.string
    }))
}