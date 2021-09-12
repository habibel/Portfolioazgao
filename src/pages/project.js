import React from 'react'
import Video1 from '../images/digitalbyte.mp4';
import Video2 from '../images/BB LADY.mp4';
import Video3 from '../images/beats.mov';
import L1 from '../images/TL.png'
import L2 from '../images/L2.png'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineHome } from 'react-icons/ai'

const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5px;

`

const ProjectContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px;
`

const ProjectTitle = styled.h1`
text-align: center;
text-transform: uppercase;
font-size: 2rem;
margin-top: 5rem;
`

const VideoP = styled.video`
max-width: 700px;
width: 100%;
height: 100%;
border: white;
border-radius: 10px;
margin-top: 1rem;
`

const Desc = styled.div`
text-align: center;
text-transform: uppercase;
font-size: 1rem;
margin-top: 5rem;
`

const Back = styled(LinkR)`
text-align: center;
text-transform: uppercase;
margin-top: 2rem;
color: white;
font-size: 4rem;
align-items: center;
`

const ImgP = styled.img`
max-width: 700px;
width: 100%;
height: 100%;
border: white;
border-radius: 10px;
margin-top: 1rem;
`

function projectpage() {
    return (
        <Content>
            <Back to='/'><AiOutlineHome /></Back>
            <ProjectContent>
                <ProjectTitle>digitalByte Agency</ProjectTitle>
                <VideoP autoPlay  muted src={Video1} type='video/mp4' />
                <Desc>this website is a agency of digital dvelopper</Desc>
            </ProjectContent>

            <ProjectContent>
                <ProjectTitle>BB LADY</ProjectTitle>
                <VideoP autoPlay  muted src={Video2} type='video/mp4' />
                <Desc>ui design for e-commerce website a store for makeup products</Desc>
            </ProjectContent>

            <ProjectContent>
                <ProjectTitle>Beats Studio by Dr.dree</ProjectTitle>
                <VideoP autoPlay  muted src={Video3} type='video/mp4' />
                <Desc>redesign of website beats studio by dr. dree </Desc>
            </ProjectContent>

            <ProjectContent>
                <ProjectTitle>THE LEGEND BARBERSHOP</ProjectTitle>
                <ImgP src={L1} />
                <Desc>logo brand identity for barbershop</Desc>
            </ProjectContent>

            <ProjectContent>
                <ProjectTitle>VIGAVIBE</ProjectTitle>
                <ImgP src={L2} />
                <Desc>musician logo guitar with the name of singer</Desc>
            </ProjectContent>
        </Content>
    )
}

export default projectpage
