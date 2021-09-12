import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? 'black': 'transparent' )};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;


@media screen and (max-width: 960px){
transition: 0.8s all ease;
}
`
export const NavContainer = styled.div`
display: flex;
justify-content: center;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
justify-self: center;
position: absolute;
cursor: pointer;
display: flex;
top: 20px;
width: 50px;



@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(100% , 50%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
export const MobileIcon = styled.div`
display: none;
color: white;
&:hover {
    color: #00B0FF;
    transition: 0.2s ease-in-out;
}


@media screen and (max-width: 768px){
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100% , 50%);
font-size: 2.5rem;
cursor: pointer;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;


@media screen and (max-width: 768px){
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
transform: translate(10%);
:nth-child(2){
    margin-right: 200px;
}
`
export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover{
    color: #00B0FF;
    transition: 0.3s ease-out;
}

&.active{
    transition: 0.3s ease-out;
    color: #00B0FF;
    border-bottom: 3px solid #00B0FF;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
}
`
