import React from 'react'
import MyImg from '../../images/CVimg.png'
import Circle from './Circle.tsx'
import Line from './Line'
import Line1 from './Line1'
import Line2 from './Line2'
import Line3 from './Line3'
import Tilty from 'react-tilty';
import { AiOutlineHome } from 'react-icons/ai'
import {FaInstagram, FaGithub, FaLinkedinIn,
        FaTelegram,FaEnvelopeOpenText,FaGlobeEurope,
        FaMusic, FaRunning,FaGamepad} from 'react-icons/fa'
import { CvContainer,
         Content,
         Column1,
         CardContent,
         ProfileImg,
         Img,
         Name,
         Speciality,
         TitleSection,
         InfoWrap,
         Info,
         Icon,
         TextInfo,
         Column2,
         Column3,
         AboutP,
         CercleImg,
         Year,
         InfoCertif,
         Desc,
         MarD,
        Card,
        SkillCercl,
    To } from './CvElements'


function CvComponent() {
    return (
        <>
            <CvContainer className='container'>
                <Content>
                    <Column1>
                        <Card>
                        <Tilty glare={true} speed={400} maxGlare={0.2} max={25}>
                            <CardContent>
                                <To to='/' >
                                     <AiOutlineHome />
                                </To>
                                <ProfileImg>
                                    <CercleImg>
                                        <Img src={MyImg} alt=''/>
                                    </CercleImg>
                                </ProfileImg>
                                <Name>Azgao Habib</Name>
                                <Speciality>Full-stack Developer</Speciality>
                            </CardContent>
                        </Tilty>
                        </Card>
                            <MarD />
                            
                        
                            <Card>
                            <Tilty glare={true} speed={400} maxGlare={0.2} max={25}>
                            <CardContent>
                                <TitleSection>References</TitleSection>
                                    <InfoWrap>
                                        <Info>
                                            <Icon><FaTelegram /></Icon>
                                            <TextInfo>+212656789667</TextInfo>
                                        </Info>
                                        <Info>
                                            <Icon><FaGlobeEurope /></Icon>
                                            <TextInfo>azgaohabib.com</TextInfo>       
                                        </Info> 
                                        <Info>
                                            <Icon><FaEnvelopeOpenText /></Icon>
                                            <TextInfo>elhabibazgao@gmail.com</TextInfo>       
                                        </Info> 
                                        <Info>
                                            <Icon><FaInstagram /></Icon>
                                            <TextInfo>ig/elhabibazgao</TextInfo>       
                                        </Info> 
                                        <Info>
                                            <Icon><FaGithub /></Icon>
                                            <TextInfo>git/habibel</TextInfo>       
                                        </Info> 
                                        <Info>
                                            <Icon><FaLinkedinIn /></Icon>
                                            <TextInfo>in/lhabibazgao</TextInfo>       
                                        </Info>               
                                    </InfoWrap>
                            </CardContent>
                            </Tilty>
                            </Card>
                            <MarD />
                            <Card>

                            
                            <Tilty glare={true} speed={400} maxGlare={0.2} max={25}>
                            <CardContent>
                                <TitleSection>Languages</TitleSection>
                                    <InfoWrap>
                                        <Info>
                                            <Icon>arabic</Icon>
                                            <TextInfo><Line /></TextInfo>
                                        </Info>
                                        <Info>
                                            <Icon>english</Icon>
                                            <TextInfo><Line1/></TextInfo>       
                                        </Info>
                                        <Info>
                                            <Icon>french</Icon>
                                            <TextInfo><Line2/></TextInfo>       
                                        </Info>  
                                        <Info>
                                            <Icon>russian</Icon>
                                            <TextInfo><Line3/></TextInfo>       
                                        </Info>                 
                                    </InfoWrap>
                            </CardContent>
                            </Tilty>
                            </Card>
                            <MarD />
                            <Card>
                            <Tilty glare={true} speed={400} maxGlare={0.2} max={25}>
                            <CardContent>
                                <TitleSection>Interest</TitleSection>
                                    <InfoWrap>
                                        <Info>
                                            <Icon><FaMusic /></Icon>
                                            <TextInfo>Music</TextInfo>
                                        </Info>
                                        <Info>
                                            <Icon><FaGamepad /></Icon>
                                            <TextInfo>Video Games</TextInfo>       
                                        </Info>
                                        <Info>
                                            <Icon><FaRunning /></Icon>
                                            <TextInfo>sport</TextInfo>       
                                        </Info>                 
                                    </InfoWrap>
                            </CardContent>
                            </Tilty>
                            </Card>
                            <MarD />
                    </Column1>


                    <Column2>
                    <Card>
                    <Tilty glare={true} speed={400} maxGlare={0.2} max={25}>
                    <CardContent>
                        <TitleSection>About me</TitleSection>
                            <AboutP>I’am always energetic and eager to learn new skills.and flexible in my working
                                hours, being able to work evenings and weekends. committed to learning
                                and self-development so that I can consistently achieve better results.
                                Even though I take my work seriously, I do have a good sense of humour.
                            </AboutP>
                    </CardContent>
                    </Tilty>
                    </Card>
                    <MarD />
                    <Card>
                    <Tilty glare={true} speed={400} maxGlare={0.2} max={25}>
                    <CardContent>
                    <TitleSection>education</TitleSection>
                    <InfoWrap>
                            <InfoCertif>
                                <Year>2020 - 2018</Year>
                                <TextInfo>Specialized technician diploma in multimedia development</TextInfo>
                                <Desc>The institute specialized in applied technology NTIC, SAFI/MOROCCO</Desc>
                            </InfoCertif>
                            <InfoCertif>
                                <Year>2015 - 2017</Year>
                                <TextInfo>Diploma in computer science and management</TextInfo>
                                <Desc>The new Safi city school ,SAFI/MOROCCO</Desc>
                            </InfoCertif>
                            <InfoCertif>
                                <Year>2014 - 2018</Year>
                                <TextInfo>Physical science</TextInfo>
                                <Desc>university cadi ayyad , SAFI/MOROCCO</Desc>
                            </InfoCertif>
                            <InfoCertif>
                                <Year>2013 - 2014</Year>
                                <TextInfo>Baccalaureate in physics and chemical science</TextInfo>
                                <Desc>Salaheddine El ayoubi High school, SAFI/MOROCCO</Desc>
                            </InfoCertif>
                
                        </InfoWrap>                                    
                    </CardContent>
                    </Tilty>
                    </Card>
                    <MarD />
                    <Card>
                    <Tilty glare={true} speed={400} maxGlare={0.2} max={25}>
                    <CardContent>
                    <TitleSection>EXPERIENCE</TitleSection>
                    <InfoWrap>
                            <InfoCertif>
                                <Year>2020 - present</Year>
                                <TextInfo>Full stack developer</TextInfo>
                                <Desc>Self-education, freelancer</Desc>
                            </InfoCertif>
                            <InfoCertif>
                                <Year>2019 - 2020</Year>
                                <TextInfo>End of studies project</TextInfo>
                                <Desc>Restaurant website with dashboard using
                                    HTML5, CSS3(BOOTSTRAP) JAVASCRIPT,
                                    PHP(LARAVEL),MYSQL</Desc>
                            </InfoCertif>
                            <InfoCertif>
                                <Year>2018 - 2020</Year>
                                <TextInfo>Graphic designer</TextInfo>
                                <Desc>Basma Center for Listening and Guidance,SAFI/MOROCCO</Desc>
                                <Desc>create the flyers of the events, and id cards,photography</Desc>
                            </InfoCertif>
                        </InfoWrap>                                    
                    </CardContent>
                    </Tilty>
                    </Card>
                    <MarD />
                    </Column2>
                    <Column3>
                    <Card>
                    <Tilty glare={true} speed={400} maxGlare={0.2} max={25}>
                    <CardContent>
                    <TitleSection>skills</TitleSection>
                    <InfoWrap>
                            {/*  */}
                                <SkillCercl>
                                    <Circle />
                                </SkillCercl>

                        </InfoWrap>                                    
                    </CardContent>
                    </Tilty>
                    </Card>
                    <MarD />
                    </Column3>
                </Content>
            </CvContainer>
        </>
    )
}

export default CvComponent
