import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CastDetails } from "components/CastDetails";
import { fetchMovieCast } from "services/api";

export const Cast = () => {
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchCast() {
            const cast = await fetchMovieCast(movieId);
            setCast(cast);
        }
        fetchCast().catch(error => {
            setError("Something went wrong, please try again later");
            console.error(error);
        });
      },[movieId])

    if (error) {
        return <h1>{error}</h1>
    }  

    return (
        <div>
           <ul>
            {cast?.map((castValue) => {
                return (
                    <CastDetails key={castValue.id}
                    profile_path={castValue.profile_path}
                    original_name={castValue.original_name}
                    character={castValue.character}/>
                )
            })}
           </ul>
           {!cast.length && <p>We don't have any cast for this movie</p>}
        </div>
    )
}

