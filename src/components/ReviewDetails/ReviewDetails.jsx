import PropTypes from 'prop-types';

export const ReviewDetails = ({author_details, content}) => {
    return (
        <li>
            <h2>Author: {author_details.username}</h2>
            <p>{content}</p>
        </li>
    )
}

ReviewDetails.propTypes = {
    author_details: PropTypes.shape({
        username: PropTypes.string
    }),
    content: PropTypes.string
}