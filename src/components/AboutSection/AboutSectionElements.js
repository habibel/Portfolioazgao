import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

 
export const AboutContainer = styled.div`
margin-top: 12rem;
@media screen and (max-width: 768px){
    padding: 100px 0;
}
`

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
margin: 0 auto;
padding: 0 24px;
justify-content: center;
`

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto , 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

@media screen and (max-width: 768px){

    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1''col2 col2'` )};
}
`

export const Culumn1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Culumn2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
/* margin-top: 20rem; */

@media screen and ( max-width: 768px){

/* margin-top: -4rem; */
}
`

export const TopLine = styled.p`
color: white;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? 'white' : 'black' )};
text-transform: uppercase;

@media screen and (max-width: 768px){
    font-size: 32px;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 50px;
font-size: 18px;
line-height: 24px;
color: white;
`

export const BtnWrap = styled.div`
display: flex;
justify-content: center;
color: black;
text-transform: uppercase;
margin-top: 15rem;
@media screen and (max-width: 768px){
    margin-bottom: -5rem;
}
`

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
@media screen and (max-width: 768px){
    margin-top: -15rem;
}
`

export const Img = styled.img`
width: 80%;
margin: 100px 0 10px 100px;
padding-right: 0;
`
export const Img2 = styled.img`
width: 50%;
height: 50%;
margin: 0px 0 10px 0;
padding-right: 0;
`
export const Marg = styled.div`
margin-right: 20px;
`

export const IconDownload = styled(BiChevronRight)`
margin-left: 5px;
margin-right: -21px;
`