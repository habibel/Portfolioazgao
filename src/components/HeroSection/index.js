import React, { useState } from 'react'
import hero from '../../images/hero.png'
import heroimg from '../../images/heroimg.png'
import arrow from '../../images/Heroarrow.svg'
import { Buttoncv } from '../Buttons'
import { RellaxWrapper } from 'react-rellax-wrapper'
import { FaFacebookF , FaInstagram , FaLinkedinIn , FaTwitter ,  } from "react-icons/fa";
import { HeroContainer ,
         HeroH1,
         HeroName,
         HeroImage,
         HeroImageB,
         HeroP,
         HeroHead,
         ScrollSocial,
         SocialMedia,
         SocialText,
         SocialItem,
         ScrollDown,
         ScrollText,
         BtnWrap,
         Heroarrow,
         Scrollarrow,
         BtnWrapper,
         IconDownload} from './HeroSectionElements'

function HeroSection() {

    const [hover , setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };


    return (
        <HeroContainer id='Home'>
            <HeroHead>
                <RellaxWrapper speed={-5}>
                    <HeroH1>
                        Hello! , my name is  
                    </HeroH1>
                    <HeroName> Habib Azgao </HeroName>
                </RellaxWrapper>

                
                   <HeroImage src={hero} alt=''></HeroImage> 
               
                
                   <RellaxWrapper speed={2}>
                      <HeroImageB src={heroimg} alt=''></HeroImageB> 
                   </RellaxWrapper>
                    
                
                
                <RellaxWrapper speed={1.5}>
                    <HeroP>
                        i'm a full-stack developper,
                        i'm working as a freelance web design and developper 
                    </HeroP>
                </RellaxWrapper>
                
                 <RellaxWrapper speed={9}>
                <BtnWrapper>
                    
                    <Buttoncv href="https://drive.google.com/file/d/1Rttl4fvLGdTU1ce07-PfGZE5nnifw6SL/view" target="_blank"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}> Download CV { hover ? <IconDownload /> : ''}
                     </Buttoncv>
                   
                </BtnWrapper>
                 </RellaxWrapper>
                
            </HeroHead>
            <ScrollSocial>

                <SocialMedia>
                    
                        <SocialText>Follow</SocialText>
                        <Heroarrow src={arrow} alt=''></Heroarrow>
              

                    
                        <SocialItem>
                            <BtnWrap href="https://www.facebook.com/elhabib.allah" target="_blank"><FaFacebookF /></BtnWrap>
                        </SocialItem>
                        <SocialItem>
                            <BtnWrap href="https://www.instagram.com/elhabibazgao" target="_blank"><FaInstagram /></BtnWrap>
                        </SocialItem>
                        <SocialItem>
                            <BtnWrap href="https://www.linkedin.com/in/lhabib-azgao" target="_blank"><FaLinkedinIn /></BtnWrap>
                        </SocialItem>
                        <SocialItem>
                            <BtnWrap href="https://twitter.com/habib_azgao" target="_blank"><FaTwitter /></BtnWrap>
                        </SocialItem>
                </SocialMedia>

                
            </ScrollSocial>
           <ScrollDown to='Services'
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact="true"
                        offset={-80}>
                    <ScrollText>Scroll Down</ScrollText>
                   <Scrollarrow src={arrow} alt=''></Scrollarrow>
            </ScrollDown> 
        </HeroContainer>
    )
}

export default HeroSection
