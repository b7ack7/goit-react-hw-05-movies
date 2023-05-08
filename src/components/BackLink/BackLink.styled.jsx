import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
display: inline-flex;
align-items: center;
gap: 4px;
padding: 4px 0;
margin-bottom: 12px;
color: black;
text-decoration: none;
font-weight: 500;
position: relative;
transition: color 250ms var(--timing-function);
::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    height: 2px;
    border-radius: 2px;
    background-color: red;
    width: 0%;
    transition: width 250ms var(--timing-function);
}
:hover::after,
:focus::after {
    color: red;
    width: 100%;
}
:hover,
:focus {
    color: red;
}
`;