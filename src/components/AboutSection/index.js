import React , {useState} from 'react'
import  { Button,Buttonto   }  from '../Buttons'
import { RellaxWrapper } from 'react-rellax-wrapper'
import {
    AboutContainer,
    InfoWrapper,
    InfoRow,
    Culumn1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Culumn2,
    Img,
    Img2,
    ImgWrap,
    Marg,
    IconDownload } from './AboutSectionElements'

function AboutSection({id,lightBg,lightText,lightTextDes,topline,headline,description,ButtonLabel1,ButtonLabel2,imgStart,img1,img2,alt,dark,primary,darktext}) {

    const [hover , setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <>
        <AboutContainer id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart} >
                    <Culumn1>
                        <TextWrapper>
                            <TopLine>{topline}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle>{description}</Subtitle>
                            <RellaxWrapper speed={3}>
                            <BtnWrap>
                                <Buttonto to='/cv'
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}>{ButtonLabel1} { hover ? <IconDownload /> : ''}
                                </Buttonto>
                                <Marg />
                             <Button to="Portfolio"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>{ButtonLabel2}</Button>
                            </BtnWrap>
                            </RellaxWrapper>
                        </TextWrapper>
                    </Culumn1>
                    <Culumn2>
                        <ImgWrap>
                        <RellaxWrapper speed={0}>
                           <Img src={img1} alt=''/> 
                        </RellaxWrapper>
                        
                        <RellaxWrapper speed={5}>
                            <Img2 src={img1} alt=''/>
                            </RellaxWrapper>
                        
                        </ImgWrap>
                    </Culumn2>
                </InfoRow>
            </InfoWrapper>
        </AboutContainer>
            
        </>
    )
}

export default AboutSection
