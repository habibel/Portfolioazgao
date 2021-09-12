import styled from "styled-components";
// import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FiDownload } from "react-icons/fi";

export const HeroContainer = styled.div`
align-items: center;
justify-content: center;
margin:0 auto;
width: 90%;
display: flex;
position: relative;
flex-direction: column;
`

export const HeroHead = styled.div`
align-items: center;
justify-content: center;
position: relative;
display: inline-block;
margin-top: 6rem;
@media screen and ( max-width: 768px){
    margin-top: 8rem;
}
`

export const HeroH1 = styled.h1`
font-size: 1.5rem;
text-align: center;
position: relative;
background: transparent;
color: white;
`

export const HeroName = styled.h1`
font-size: 4rem;
text-align: center;
margin-bottom: -2.2rem;
color: white;
background: transparent;
`

export const HeroImage = styled.img`
max-width: 900px;
width: 100%;
margin: 0 auto;
border: 2px solid white;
border-radius: 5px;
`

export const HeroImageB = styled.img`
max-width: 900px;
width: 100%;
margin: 0 auto;
/* border: 2px solid white;
border-radius: 5px; */
position: absolute;
left: 0;
margin-top: -35.5rem;
/* opacity: 70%; */

@media screen and ( max-width: 768px){

    margin-top: -13.6rem;
}

/* @media screen and (max-width: 1000px){
    margin-top: -18rem;
} */
`

export const HeroP = styled.p`
text-align: center;
max-width: 600px;
margin: 0 auto;
font-size: 1.5rem;
text-transform: uppercase;
margin-top: -7rem;
@media screen and ( max-width: 768px){
    font-size: 1rem;
    max-width: 300px;
    margin-top: 2rem;
}
`

export const BtnWrapper = styled.div`
text-align: center;
max-width: 700px;
margin: 0 auto;
font-size: 1rem;
line-height: 2rem;
letter-spacing: 0.2rem;
text-transform: uppercase;
margin-top: 1rem;

@media screen and (max-width: 768px){
margin-top: 2rem;
}
`
export const Atag = styled.a`
text-decoration: none;
`

export const ScrollSocial = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
margin-top: -11rem;

@media screen and (max-width: 768px){
margin-top: -7rem;
}
`

export const SocialMedia = styled.ul`
left: 10px;
list-style: none;
position: absolute;

`
export const SocialText = styled.p`
font-size: 1rem;
text-transform: uppercase;
letter-spacing: 0.5rem;
transform: translate(-45px , -60px) rotate(90deg) ;
`
export const SocialItem = styled.li`
width: 30px;
margin-top: 1rem;

&:hover {
    transition: all 0.2s ease-in-out;
    height: 30px;
    
}
`

export const ScrollDown = styled(LinkS)`
position: absolute;
right: 0px;
bottom: 0;
@media screen and (max-width: 768px){
width: 100px;
right: 0;
transform: translate(0 , 3.5rem);
}
`
export const ScrollText = styled.p`
font-size: 1rem;
text-transform: uppercase;
letter-spacing: 0.5rem;
transform:rotate(90deg) translateY(-83px);
animation: ScrollTextAnim 0.5s alternate ease infinite;
cursor: pointer;
@keyframes ScrollTextAnim {
    0% {
        color: #00B0FF;
    }
    66% {
        color: #C6F8FF;
    }
    100% {
        color: #FFF;
    }
}
@media screen and (max-width: 768px){
width: 100px;
right: 0;
transform:rotate(90deg)translate(60px , -35px );
}
`

export const BtnWrap = styled.a`
width: 30px;
color: white;
text-decoration: none;
`

export const Scrollarrow = styled.img`
width: 30px;
right: 0;
transform: translateY(100px);
position: absolute;
cursor: pointer;
animation: ScrollDownAnim 0.5s alternate ease infinite;

@keyframes ScrollDownAnim {
    from {
        transform: translateY(110px);
    }
    to {
        transform: translateY(100px);
    }
}

`

export const Heroarrow = styled.img`
width: 20px;
margin-bottom: 0.5rem;
animation: FollowAnim 0.5s alternate ease infinite;
@keyframes FollowAnim {
    from {
        transform: translateY(10px);
    }
    to {
        transform: translateY(0px);
    }
}
`

export const IconDownload = styled(FiDownload)`
margin-left: 8px;
font-size: 20px;
`