import React from 'react'
import Logo from '../images/MyLogo.svg'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

const TermsContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;
margin-bottom: 2rem;
`
const HomeButton = styled(LinkR)`
width: 100px;
left: 50%;
top: 5%;
transform: translateX(-50%);
position: absolute;
`
const Icon = styled.img`
cursor: pointer;
`
const Info = styled.div`
width: 80%;
border: 1px solid white;
display: flex;
position: relative;
border-radius: 5px;
padding: 20px;
align-items: center;
justify-content: center;
flex-direction: column;
left: 50%;
margin-top: 10rem;
transform: translateX(-50%);
`
const Heading = styled.h2`
margin-top: 2rem;
align-items: center;
justify-content: center;
text-align: center;
`
const ContentP = styled.p`
margin-top: 5rem;
margin-bottom: 5rem;
`

function terms() {
    return (
        <>
        <TermsContainer>
            <HomeButton to='/'>
                <Icon src={Logo} alt=''/>
            </HomeButton>
            <Info>
                <Heading>How it works</Heading>
                <ContentP>
                    Lorem Ipsum is simply dummy
                     text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard
                     dummy text ever since the 1500s,
                     when an unknown printer took a galley
                     of type and scrambled it to make a type
                     specimen book. It has survived not only
                     five centuries, but also the leap into
                     electronic typesetting,
                     remaining essentially unchanged.
                </ContentP>

                <Heading>Terms Of Use</Heading>
                <ContentP>

If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at elhabibazgao@gmail.com. 



At azgaohabib.com, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by azgaohabib.com and how it is used.



Log Files

Like many other Web sites, azgaohabib.com makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable. 


Cookies and Web Beacons 

azgaohabib.com does use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser. 


DoubleClick DART Cookie 

Google, as a third party vendor, uses cookies to serve ads on azgaohabib.com.

Google's use of the DART cookie enables it to serve ads to users based on their visit to azgaohabib.com and other sites on the Internet.
Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL - http://www.google.com/privacy_ads.html



Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include Google Adsense.



These third-party ad servers or ad networks use technology to the advertisements and links that appear on azgaohabib.com send directly to your browsers. They automatically receive your IP address when this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and / or to personalize the advertising content that you see.



azgaohabib.com has no access to or control over these cookies that are used by third-party advertisers.



You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices.

azgaohabib's privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites.



If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers' respective websites.
                </ContentP>

            </Info>
            
        </TermsContainer>   
        </>
    )
}

export default terms
