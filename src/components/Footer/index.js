import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import MyLogo from '../../images/MyLogo.svg'
import { FaFacebook,
         FaInstagram,
         FaTwitter,
         FaLinkedin } from 'react-icons/fa'
import { FooterContainer,
         FooterWrap,
         FooterLinksContainer,
         FooterLinksWrapper,
         FooterLinkItems,
         FooterLinkTitle,
         FooterLink,
         SocialMedia,
         SocialMediaWrap,
         SocialLogo,
         WebsitesRights,
         SocialIcons,
         SocialIconLink,
        } from './FooterElements'

function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/termsofservices'>How it works</FooterLink>                           
                            <FooterLink to='/'>Testimonials</FooterLink>                                                    
                            <FooterLink to='/termsofservices'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>                           
                            <FooterLink to='/'>Support</FooterLink>                           
                            <FooterLink to='/'>Tele :+212 656789667</FooterLink>                                                   
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social media</FooterLinkTitle>
                            <FooterLink href='https://www.instagram.com/elhabibazgao'>Instagram</FooterLink>                           
                            <FooterLink href='https://www.facebook.com/elhabib.allah'>Facebook</FooterLink>                           
                            <FooterLink href='https://twitter.com/habib_azgao'>Twitter</FooterLink>                           
                            <FooterLink to='/'>Youtube</FooterLink>                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='Home' onClick={toggleHome}>
                             <img src={MyLogo} alt="" />
                        </SocialLogo>
                        <WebsitesRights>
                            Azgao © {new Date().getFullYear()} All Right Reserved.
                        </WebsitesRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/elhabib.allah" target="_blank" aria_label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/elhabibazgao" target="_blank" aria_label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/habib_azgao" target="_blank" aria_label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/lhabib-azgao" target="_blank" aria_label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>  
        </FooterContainer>
    )
}

export default Footer