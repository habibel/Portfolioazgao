import styled from "styled-components";
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'


export const TestimonialsContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background: #010606; */
.fade-enter{
    opacity: 0;
    transform: scale(0.90);
}
.fade-enter-active{
    opacity: 1;
    transform: scale(1);
    transition: 0.2s ease-in opacity;
    transition-property: opacity, transform;
}
.fade-exit{
    opacity: 1;
    transform: scale(1);
}
.fade-exit-active{
    opacity: 0;
    transform: scale(0.90);
    transition: 0.2s ease-in opacity;
    transition-property: opacity, transform;
}

@media screen and (max-width: 768px){
    height: 1100px;
    margin-top: 0rem;
}

@media screen and (max-width: 480px){
    height: 1300px;
    margin-bottom: 8rem;
}
`

export const TestimonialsH1 = styled.h1`
font-size: 3rem;
margin-bottom: 1rem;
margin-top: -20rem;
text-transform: uppercase;
@media screen and (max-width: 768px){
    margin-top: -30rem;

}
@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const TestimonialsH1p = styled.p`
font-size: 18px;
margin-bottom: 64px;
text-transform: uppercase;
`

export const TestimonialsWrapper = styled.div`
text-align: center;
justify-content: center;
width: 600px;



@media screen and (max-width: 768px){
    max-width: 300px;
}
`

export const TestimonialsWrap = styled.div`
border: 1px solid white;
margin: 0 auto;
padding: 0 1rem;
border-radius: 20px;
min-height: 300px;
@media screen and (max-width: 768px){

max-width: 300px;
min-height: 400px;
}
`

export const Testimonialsp = styled.p`
margin-top: 2rem;
margin-bottom: 0.5rem;
min-height: 90px;
@media screen and (max-width: 768px){
    min-height: 150px; 
}
`

export const TestimonialsImg = styled.img`
width: 100px;
height: 100px;
overflow: hidden;
border-radius: 5px;
margin-top: 1rem;
border: 1px solid white;
`

export const TestimonialsName = styled.h3`
margin-bottom: 0.5rem;
`

export const TestimonialsTitle = styled.p`
margin-bottom: 1rem;
`

export const ArrowsSlides = styled.div`
margin-top: 2rem;
/* justify-content: space-between; */
`
export const BsArrowLeft = styled(IoChevronBack)`
/* border-radius: 2px; */
margin-right: 10px;
font-size: 2rem;
/* border: 1px solid white; */
cursor: pointer;
`
export const BsArrowRight = styled(IoChevronForward)`
/* border-radius: 2px; */
margin-left: 10px;
font-size: 2rem;
/* border: 1px solid white; */
cursor: pointer;
`
