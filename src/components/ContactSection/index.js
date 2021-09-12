import React  from 'react'
import Map from '../../images/maps.svg'
import {
    ContactContainer,
    InfoWrapper,
    InfoRow,
    Culumn1,
    TextWrapper,
    TopLine,
    Heading,
    Culumn2,
    Img,
    ImgWrap
        } from './ContactElements'
import ContactForm from './ContactForm';




function ContactSection() {


    return (
        <>
        <ContactContainer id='Contact'>
            <InfoWrapper>
                <InfoRow >
                    <Culumn1>
                        <TextWrapper>
                            <TopLine>have a project in your mind</TopLine>
                            <Heading>Contact Us</Heading>
                            <ContactForm />
                        </TextWrapper>
                    </Culumn1>
                    <Culumn2>
                        <ImgWrap>
                           <Img src={Map} alt=''/> 
                        </ImgWrap>
                    </Culumn2>
                </InfoRow>
            </InfoWrapper>
        </ContactContainer>
            
        </>
    )
}

export default ContactSection
