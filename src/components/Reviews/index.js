import React , {useState} from 'react'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Review from './Data'
// import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { TestimonialsContainer,
         TestimonialsH1,
         TestimonialsH1p,
         TestimonialsWrapper,
         TestimonialsWrap,
         Testimonialsp,
         TestimonialsName,
         TestimonialsTitle,
         TestimonialsImg,
         ArrowsSlides,
         BsArrowLeft,
         BsArrowRight} from './ReviewsElements'

function Reviews() {
    const [ activeIndex , setActiveIndex ] = useState(0);
    const activeSlide = Review[activeIndex];

    function handlePrev(){
        if(activeIndex <= 0)
        {
            setActiveIndex(Review.length - 1);
        }else 
        {
            setActiveIndex((oldIndex) => oldIndex - 1 );
        }
    }

    function handleNext(){
        if(activeIndex >= Review.length - 1)
        {
            setActiveIndex(0);
        }else 
        {
            setActiveIndex((oldIndex) => oldIndex + 1 );
        }       
    }

    return (
        <>
        <TestimonialsContainer>     
                <TestimonialsH1>Testimonials</TestimonialsH1>
            <TestimonialsH1p>See what our clients say about us</TestimonialsH1p>
                <TestimonialsWrapper>
                    <SwitchTransition >
                        <CSSTransition 
                        key={activeSlide.id}
                        timeout={300}
                        classNames='fade'>
                            <TestimonialsWrap>
                              <TestimonialsImg src={activeSlide.img} alt=''/>
                                <Testimonialsp>
                                {activeSlide.Desc}
                                </Testimonialsp>

                                
                                
                                <TestimonialsName>
                                {activeSlide.name}
                                </TestimonialsName>
                                <TestimonialsTitle>
                                {activeSlide.title}
                                </TestimonialsTitle>
                            </TestimonialsWrap>
                        </CSSTransition>
                    </SwitchTransition>
                            <ArrowsSlides>
                                <BsArrowLeft 
                                onClick={handlePrev}
                                role="button"
                                tabIndex={0}
                                onKeyDown={handlePrev} />
                                <BsArrowRight 
                                onClick={handleNext}
                                role="button"
                                tabIndex={0}
                                onKeyDown={handleNext}/>
                            </ArrowsSlides>             
                </TestimonialsWrapper> 
        </TestimonialsContainer>
        
        </>
    )
}

export default Reviews
