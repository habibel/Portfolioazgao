import React from 'react'
import { RellaxWrapper } from 'react-rellax-wrapper'
import Web from '../../images/Webdesign.svg'
import Mobile from '../../images/mobileapp.svg'
import Design from '../../images/brandingdesign.svg'
import { ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    ServicesH1p} from './ServiceSectionElements';
function Services() {
    return (
        <ServicesContainer id='Services'>
            <ServicesH1>Services</ServicesH1>
            <ServicesH1p>What is our best services ?</ServicesH1p>
            <ServicesWrapper>
                <RellaxWrapper speed={1.5}>
                    <ServicesCard>
                    <ServicesIcon src={Design}/>
                    <ServicesH2>Brand Design</ServicesH2>
                    <ServicesP>UI / UX for websites and Mobile applications and Logo design</ServicesP>
                </ServicesCard> 
                </RellaxWrapper>

                <RellaxWrapper speed={1}>
                    <ServicesCard>
                    <ServicesIcon src={Web} />
                    <ServicesH2>Web Dev</ServicesH2>
                    <ServicesP>Developping websites create high performance with smooth animations and fast speed</ServicesP>
                </ServicesCard>
                </RellaxWrapper>
                
                <RellaxWrapper speed={0.5}>
                   <ServicesCard>
                        <ServicesIcon src={Mobile}/>
                        <ServicesH2>App Dev</ServicesH2>
                        <ServicesP>application mobile with high performance for Android and IOS </ServicesP>
                    </ServicesCard> 
                </RellaxWrapper>
                


                
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
