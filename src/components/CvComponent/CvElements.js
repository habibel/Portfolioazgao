import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const CvContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
/* height: 800px; */
z-index: 1;
color: #FFF;
background: #161623;
:before{
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
background: linear-gradient(#F00 , #F0F);
clip-path: circle(30% at right 20%);
}

:after{
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
background: linear-gradient(#2196F3 , #E91E63);
clip-path: circle(20% at 10% 70%);
}
`

export const Content = styled.div`
position: relative;
width: 100%;
padding: 20px;
display: grid;
/* justify-content: space-between; */

max-width: 1200px;
flex-wrap: wrap;
z-index: 1;
grid-auto-rows: minmax(100px, auto);
grid-template-columns: repeat(3, 5fr);
grid-auto-columns: minmax(auto , 1fr);
grid-template-areas: "Col1 Col2 Col2" "Col3 Col3 Col3";
@media screen and (max-width: 768px){
    grid-template-areas: "Col1" "Col2" "Col3";
    grid-template-columns: repeat(1, 5fr);
  
}
`
export const Column1 = styled.div`
/* display: flex; */
align-items: center;
flex-direction: column;
grid-area: Col1;
margin-right: 1rem;
`
export const CardContent = styled.div`
padding: 50px;
flex-direction: column;
border-radius: 15px;
background: rgba(255,255,255,0.05);
box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
border-top:1px solid rgba(255,255,255,0.35);
border-left:1px solid rgba(255,255,255,0.35);
backdrop-filter: blur(20px);

`
export const MarD = styled.div`
margin-bottom: 20px;
`
export const ProfileImg = styled.div`
width: 200px;
height: 200px;
border-radius: 100px;
border: 1px solid white ;
align-items: center;
display: flex;
justify-content: center;
`
export const Card =styled.div`
backdrop-filter: blur(20px);
`
export const Img = styled.img`
width: 200px;
margin-bottom: 60px;
border-radius: 100px;
`
export const Name = styled.h1`
font-size: 2em;
letter-spacing: 2px;
width: 100px;
text-transform: uppercase;
font-weight: 800;
margin-top: 20px;
`

export const CercleImg = styled.div`
width: 160px;
display: flex;
height: 160px;
align-items: center;
justify-content: center;
background: linear-gradient(#2196F3 , #E91E63);
border-radius: 100px;
`
export const Speciality = styled.p`
font-size: 0.8em;
letter-spacing: 1px;
width: 170px;
text-transform: uppercase;
font-weight: 800;
margin-top: 10px;
padding-bottom: 20px;
border-bottom: 2px solid #fff;
`
export const TitleSection = styled.h1`
width: 200px;
font-size: 1.5em;
letter-spacing: 2px;
text-transform: uppercase;
font-weight: 800;
margin-top: 10px;
padding-bottom: 10px;
border-bottom: 2px solid #fff;
`
export const InfoWrap = styled.ul`
list-style: none;
margin-top: 20px;
font-size: 1.2em;
font-weight: 900;
`
export const Info = styled.li`
display: flex;
margin-bottom: 10px;
max-width: 150px;
/* justify-content: space-between; */


`
export const Icon = styled.div`
font-size: 0.8em;
font-weight: 900;
text-transform: uppercase;
margin-right: 15px;
margin-top: 3px;
`
export const TextInfo = styled.p`
justify-content: center;
align-items: center;

#horizLine {
    stroke-width: 10;
    width: 150px;
    height: 10px;
}
    #horizLine rect:nth-child(1){
    stroke: grey;
    }

#horizLine rect:nth-child(2){
    stroke: #fff ;
    width: 190px;
}


#horizLine1 {
    stroke-width: 10;
    width: 150px;
    height: 10px;
}
    #horizLine1 rect:nth-child(1){
    stroke: grey;
    }

    #horizLine1 rect:nth-child(2){
    stroke: #fff ;
    width: 160px;
}

#horizLine2 {
    stroke-width: 10;
    width: 150px;
    height: 10px;
}
    #horizLine2 rect:nth-child(1){
    stroke: grey;
    }

    #horizLine2 rect:nth-child(2){
    stroke: #fff ;
    width: 110px;
}

#horizLine3 {
    stroke-width: 10;
    width: 150px;
    height: 10px;
}
    #horizLine3 rect:nth-child(1){
    stroke: grey;
    }

    #horizLine3 rect:nth-child(2){
    stroke: #fff ;
    width: 50px;
}

`
export const Column2 = styled.div`
grid-area: Col2;
`
export const Column3 = styled.div`
grid-area: Col3;
align-items: center;
`
export const AboutP = styled.div`
margin-top: 20px;
font-weight: 800;
`
export const Year = styled.h1`
font-size: 1.5em;
letter-spacing: 2px;
text-transform: uppercase;
font-weight: 800;
margin-top: 10px;
padding-bottom: 10px;
`

export const InfoCertif = styled.li`
margin-bottom: 20px;
`

export const Desc = styled.p`
font-size: 0.8em;
margin-top: 5px;
`

export const SkillCercl = styled.div`
/* justify-content: space-between; */
text-align: center;
display: grid;
align-items: center;
grid-template-columns: 1fr 1fr 1fr 1fr;
@media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    width: 320px;
    /* margin-left: -1rem; */
}

.cer{
    /* align-items: center; */
    transform: translateY(-6rem);
}

#circle {
    margin-top: 20px;
    stroke-width: 10;
    stroke:#fff ;
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    width: 150px;
    stroke-linecap: round;
}

#circle circle:nth-child(1){
    stroke: grey;
    stroke-dashoffset: 0;

}

#circle circle:nth-child(2){
    /* stroke-dashoffset: 100 ; */
    animation: lineanime 2s ease forwards 0.9s;
    @keyframes lineanime{
        from{
            stroke-dashoffset: 0;
        }
        to{
    stroke-dashoffset: calc(440 - (440 * 88 )/100) ;
            
        }
    }
}

#circle1 {
    margin-top: 20px;
    stroke-width: 10;
    stroke:#fff ;
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    width: 150px;
    stroke-linecap: round;
}

#circle1 circle:nth-child(1){
    stroke: grey;
    stroke-dashoffset: 0;
    
}

#circle1 circle:nth-child(2){
    stroke-dashoffset: 100 ;
    animation: lineanime1 2s ease forwards 0.9s; 
    @keyframes lineanime1{
        from{
            stroke-dashoffset: 0;
        }
        to{
    stroke-dashoffset: calc(440 - (440 * 92 )/100) ;
            
        }
    }
}

#circle2 {
    margin-top: 20px;
    stroke-width: 10;
    stroke:#fff ;
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    width: 150px;
    stroke-linecap: round;
}

#circle2 circle:nth-child(1){
    stroke: grey;
    stroke-dashoffset: 0;
}

#circle2 circle:nth-child(2){
    stroke-dashoffset: 100 ;
    animation: lineanime2 2s ease forwards 0.9s;
    @keyframes lineanime2{
        from{
            stroke-dashoffset: 0;
        }
        to{
    stroke-dashoffset: calc(440 - (440 * 95 )/100) ;
            
        }
    }
}

#circle3 {    margin-top: 20px;

    stroke-width: 10;
    stroke:#fff ;
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    width: 150px;
    stroke-linecap: round;
}

#circle3 circle:nth-child(1){
    stroke: grey;
    stroke-dashoffset: 0;
    /* animation: lineanime 2s ease forwards 0.9s; */
}

#circle3 circle:nth-child(2){
    stroke-dashoffset: 100 ;
    animation: lineanime3 2s ease forwards 0.9s;
    @keyframes lineanime3{
        from{
            stroke-dashoffset: 0;
        }
        to{
    stroke-dashoffset: calc(440 - (440 * 93 )/100) ;
            
        }
    }
}
`

export const InfoSkillCercl = styled.ul`
justify-content: space-between;
display: grid;
position: absolute;
grid-template-columns: 1fr 1fr 1fr 1fr;
list-style: none;
/* width: 1000px; */
transform: translate(35px,80px);
@media screen and (max-width: 768px){
    grid-template-rows: 170px;
    width: 300px;
    grid-template-columns: 1fr 1fr;
}
`

export const SkillsText = styled.li`
text-decoration: none;
/* text-align: center; */

`
export const To = styled(LinkR)`
float: right;
color: #fff;
font-size: 2rem;
`