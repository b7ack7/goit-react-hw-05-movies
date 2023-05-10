import PropTypes from 'prop-types';
import DefaultImage from 'components/DefaultImage';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export const CastDetails = ({ profile_path, original_name, character }) => {
  return (
    <li>
      <img
        src={profile_path ? IMAGES_BASE_URL + profile_path : DefaultImage}
        alt={original_name}
      />

      <h4>{original_name}</h4>
      <p>Character: {character || 'No information'}</p>
    </li>
  );
};

CastDetails.propTypes = {
  profile_path: PropTypes.string,
  original_name: PropTypes.string,
  character: PropTypes.string,
};
