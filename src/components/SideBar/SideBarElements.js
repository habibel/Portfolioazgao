import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'

export const SideBarContainer = styled.aside`
background: #000;
position: fixed;
z-index: 999;
width: 50%;
height: 55%;
border-radius: 5px;
border: 0.5px solid #fff;
display: grid;
align-items: center;
transition: 0.5s ease-in-out;
box-shadow: -1px 1px 5px black;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
right: ${({isOpen}) => (isOpen ? '1rem' : '-50rem')};
top: ${({isOpen}) => (isOpen ? '1rem' : '-100rem')};
text-transform: uppercase;

`

export const Icon = styled.div`
position: absolute;
top: 1rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

`

export const CloseIcon = styled(FaTimes)`
color: #fff;
&:hover {
    color: #00B0FF;
    transition: 0.2s ease-in-out;
}
`
export const SideBarWrapper = styled.div`
color: #fff;
`

export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4 , 80px);
text-align: center;
margin-top: 3rem;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(4 , 30px);
}
`

export const SideBarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;

&:hover {
    color: #00B0FF;
    transition: 0.2s ease-in-out;
}
`

