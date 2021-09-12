import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import {Link} from 'react-scroll';

export const Button = styled(Link)`
border-radius: 5px;
background: white;
padding: 15px 50px;
outline: none;
border: none;
cursor: pointer;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
color: black;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: transparent;
    border: 1px solid #00B0FF;
    color: #00B0FF;
}
`

export const Buttoncv = styled.a`
border-radius: 5px;
background: white;
padding: 15px 50px;
outline: none;
border: none;
cursor: pointer;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
color: black;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: transparent;
    border: 1px solid #00B0FF;
    color: #00B0FF;
}
`

export const Buttonto = styled(LinkR)`
border-radius: 5px;
background: white;
padding: 15px 50px;
outline: none;
border: none;
cursor: pointer;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
color: black;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: transparent;
    border: 1px solid #00B0FF;
    color: #00B0FF;
}
`