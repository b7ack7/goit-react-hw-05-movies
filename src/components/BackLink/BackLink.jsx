import { HiArrowLeft } from "react-icons/hi";
import PropTypes from 'prop-types';
import { StyledLink } from "./BackLink.styled";

export const BackLink = ({to}) => {
    return (
        <StyledLink to={to}>
        <HiArrowLeft size="16"/>
        Go back
        </StyledLink>
    )
}

BackLink.propTypes = {
    to: PropTypes.shape({
        path: PropTypes.string
    })
}