import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

 
export const ContactContainer = styled.div`
color: #fff;
/* background: ${({lightBg}) => (lightBg ? 'white' : 'black' )}; */
margin-top: -15rem;



.form-success {
  text-align: center;
  font-size: 24px;
  margin-top: 80px;
  /* left: 0; */
}


.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.form-inputs {
  margin-bottom: 0.5rem;
  width: 80%;
}

.form-inputs p {
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #f00e0e;
}

.form-label {
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 6px;
  color: #fff;
}

.form-input {
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
}


.form-textarea{
display: block;
  padding-left: 10px;
  padding-top: 10px;
  outline: none;
  border-radius: 2px;
  height: 100px;
  width: 100%;
  border: none;
}

.form-input::placeholder {
  font-size: 0.8rem;
}

.form-input-btn {
  width: 25%;
  height: 50px;
  margin-top: 1rem;
  margin-left: 18.5rem;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  @media screen and (max-width: 768px){
    margin-left: 14rem;
    /* margin-top: -2rem; */
    cursor: pointer;
}
}

.form-input-btn:hover {
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgb(39, 143, 255) 0%,
    rgb(12, 99, 250) 100%
  );
  transition: all 0.4s ease-out;
}


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
margin-top: -30rem;

@media screen and (max-width: 786px){
  margin-top: -40rem;
}
`

export const Culumn2 = styled.div`
margin-bottom: 15px;
display: flex;
padding: 0 15px;
grid-area: col2;

@media screen and (max-width: 786px){
  margin-top: -15rem;
}
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
margin-top: 25rem;
/* margin-top: 20rem; */

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

margin-bottom: 5rem;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
/* color: ${({lightText}) => (lightText ? 'white' : 'black' )}; */
text-transform: uppercase;

@media screen and (max-width: 768px){
    font-size: 32px;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: white;
`

export const BtnWrap = styled.div`
display: flex;
justify-content: center;
color: black;
text-transform: uppercase;
margin-top: 30rem;

`

export const ImgWrap = styled.div`
max-width: 500px;
height: 100%;
`

export const Img = styled.img`
width: 80%;
/* margin: 300px 0 10px 40px; */
`

export const Marg = styled.div`
margin-right: 20px;
`

export const IconDownload = styled(BiChevronRight)`
margin-left: 5px;
margin-right: -21px;
`