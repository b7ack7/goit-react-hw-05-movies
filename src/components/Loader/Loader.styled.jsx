import styled from '@emotion/styled';
import {BiLoaderCircle} from 'react-icons/bi';

export const Preloader = styled.div`
fill: red;
display: flex;
justify-content: center;
`;

export const PreloaderImg = styled(BiLoaderCircle)`
width: 70px;
height: 70px;
margin: 0 auto;
text-align: center;
fill: inherit;
animation: preloader-rotate 2s infinite linear;
@keyframes preloader-rotate {
    100% {
      transform: rotate(360deg);
    }
`;
