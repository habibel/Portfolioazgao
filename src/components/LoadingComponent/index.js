import React from 'react'
import Logosvg from './logo.tsx'
import styled from 'styled-components'

const LoadingContainer = styled.div`
width: 100%;
height: 100vh;
background: black;
  color: aliceblue;

#logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    animation: fillanim 1.5s ease-in forwards 3s;
  
}

@keyframes fillanim{
    0%{
        fill: transparent;
        
    }
    100%{
        fill: #fff;
    }
}
#logo path:nth-child(1){
stroke-dasharray: 320px;
stroke-dashoffset: 320px;
animation: lineanime 2s ease forwards 0.3s;
}

#logo path:nth-child(2){
stroke-dasharray: 390px;
stroke-dashoffset: 390px;
animation: lineanime 2s ease forwards 0.8s;
}
#logo path:nth-child(3){
stroke-dasharray: 495px;
stroke-dashoffset: 495px;
animation: lineanime 2s ease forwards 0.6s;
}
#logo polygon:nth-child(4){
stroke-dasharray: 120px;
stroke-dashoffset: 120px;
animation: lineanime 2s ease forwards 0.2s;
}

@keyframes lineanime{
    to{
        stroke-dashoffset: 0px;
    }
}

`


function Load() {
    return (
        <LoadingContainer>
            <Logosvg />
        </LoadingContainer>
    )
}

export default Load
