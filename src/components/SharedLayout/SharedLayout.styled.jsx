import styled from '@emotion/styled';
import { NavLink } from "react-router-dom"; 

export const Container = styled.div`
width: 1200 px;
padding: 0 15px;
margin: 0 auto;
`;

export const Header = styled.header`
padding: 24px 30px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
margin-bottom: 12px;
`;

export const Nav = styled.nav`
display: flex;
gap: 30px;
`;

export const Link = styled(NavLink)`
font-size: 20px;
line-height: 1.5;
font-weight; 500;
text-decoration: none;
color: black;
position: relative;
transition: color 250ms var(--timing-function);
::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    height: 4px;
    border-radius: 2px;
    background-color: red;
    width: 0%;
    transition: width 250ms var(--timing-function);
}
&.active {
    color: red;
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