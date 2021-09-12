import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const PortfolioContainer = styled.div`
display: flex; 
justify-content: center;
align-items: center;
margin: 0 auto;
padding: 5rem 0; 
flex-direction: column;
max-width: 90%;

.swiper-container{
    max-width: 990px;
    padding-top: 4rem;
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 768px){
        max-width: 300px; 
    }
   
}

.swiper-button-prev, .swiper-button-next{
    position: absolute;
    height: 45px;
    width: 45px;
  color: aliceblue;;
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: white;
    border-radius: 5px;
}
.swiper-button-next{
    right: 0;
}
.swiper-button-prev::after,
.swiper-button-next::after{
    font-size: 1.5rem;
}

`

export const PortfolioH1 = styled.h1`
font-size: 2.5rem;
text-transform: uppercase;
margin-top: -3rem;
@media screen and (max-width: 768px){
    margin-top: -2.5rem;
    
}
@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const PortfolioH1p = styled.p`
font-size: 18px;
margin-bottom: -4rem;
text-transform: uppercase;

@media screen and (max-width: 480px){
    font-size: 0.5rem;
}
`

export const PortfolioWrapper = styled.div`
margin: 100px;
align-items: center;
justify-content: center;
display: inline-block;
`

export const ProjectCard = styled.div`
justify-content: center;
align-items: center; 
overflow: hidden;
border-radius: 10px; 
display: inline-block; 
`
export const LinkItem = styled(LinkR)`
height: 100%;
height: 300px;

`
export const ProjectImg = styled.img`
width: 300px;
height: 230px;
border: 1px solid white;
border-radius: 10px;
`

export const ProjectText = styled.div`
max-width: 300px;
height: 150px;
justify-content: center;
align-items: center;
padding: 0.5rem;
border-radius: 10px;
border: 1px solid white;
`

export const ProjectH2 = styled.h3`
font-size: 1rem;
text-transform: uppercase;
margin-bottom: 1rem;
`

export const ProjectP = styled.p`
font-size: 1rem;
/* text-transform: uppercase; */
/* letter-spacing: 0.5rem; */
`

