import styled from 'styled-components'

export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background: #010606; */
color: black;


@media screen and (max-width: 768px){
    height: 1100px;
    margin-bottom: 8rem;
}

@media screen and (max-width: 480px){
    height: 1300px;
    margin-bottom: 8rem;
}
`

export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 50px;
padding: 0 50px;
margin-top: 15rem;
margin-bottom: -10rem;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
    width: 80%;
}
`
export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 15px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
border-radius: 50px;
margin-bottom: 10px;
border: none;
`

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 20px;
margin-top: -80px;
text-transform: uppercase;
@media screen and (max-width: 768px){
    margin-top: 80px;
}
@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
color: black;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`
export const ServicesH1p = styled.p`
font-size: 18px;
color: #fff;
margin-bottom: 64px;
text-transform: uppercase;

@media screen and (max-width: 480px){
    font-size: 0.5rem;
}
`