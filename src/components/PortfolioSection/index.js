import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore , { Navigation } from 'swiper'
import Projects from './Projects'
// import Pr1 from '../../images/utracker.jpg'
import ProjectItem from './ProjectItem'
import 'swiper/swiper-bundle.min.css'
import { 
        PortfolioContainer,
        PortfolioH1,
        PortfolioH1p,
        PortfolioWrapper,
            } from './PortfolioElements'

SwiperCore.use([Navigation]);

function PortfolioSection() {
    return (

        <PortfolioContainer id="Portfolio">
            <PortfolioH1>Portfolio</PortfolioH1>
                <PortfolioH1p>racent works</PortfolioH1p>

                   <PortfolioWrapper>
                    <Swiper spaceBetween={30} 
                            slidesPerView={1} 
                            navigation
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1100: {
                                    slidesPerView: 3,
                                }
                            }}
                            >
                        {Projects.map((project, index) => {
                            if (index >= 5 ) 
                                return '';
                            return (
                                <SwiperSlide key={project.id}>
                                   <ProjectItem name={project.name}
                                   Description={project.Description}
                                   img={project.img}/> 
                                </SwiperSlide>
                                
                            )
                        })}
                    </Swiper>
                 </PortfolioWrapper> 
  
                
         </PortfolioContainer>
                

    )
}

export default PortfolioSection
