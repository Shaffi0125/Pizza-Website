import {NavLink as Link} from 'react-router-dom'

import styled from 'styled-components';
import {FaPizzaSlice} from 'react-icons/fa'

export const Nav = styled.nav`
    background: transperent;
    color:#fff;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;

`;

export const NavLink = styled(Link)`
font-size:3rem;
display:flex;
font-weight:bold;
align-items:center;
text-decoration: none;
cursor:pointer;
color: #fff;
    
    @media screen and (max-width:400px){
        position:absolute;
        top:10px;
        left:25px
    }
`;

export const NavIcon= styled.div`
position:absolute;
display:block;
top:0;
right:0;
font-size:1.5rem;
cursor:pointer;
color:#fff;


p {
    transform:translate(-175%,100%);
    font-weight:bold;
}
`;

export const Bars=styled(FaPizzaSlice)`
font-size:2rem;
transform:translate(-50%,-15%)
`;