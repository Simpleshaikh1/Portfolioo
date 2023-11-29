import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/meter1.svg'
import meter2 from '../assets/meter2.svg'
import meter3 from '../assets/meter3.svg'
// import meter4 from '../assets/meter4.svg'
// import meter5 from '../assets/meter5.svg'
import colorSharp from '../assets/color-sharp.png'








function Skills() {

    const responsive = {

        superLargeDesktop: {
            
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };








  return (
    <section className='skills' id='skills'>

        <Container>

            <Row>

                <Col>
                
                    <div className="skill-bx">

                        <h2>Skills</h2>

                        <p>Skills in my opinion as a software engineer are not just lines of code; they are the building blocks of innovation, 
                            the architects of progress, and the key to turning imagination into reality.</p>

                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter1} alt="image" />    
                                <h5>Problem Solving</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="image" />    
                                <h5>Database Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />    
                                <h5>Version Control</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />    
                                <h5>Testing and Debugging</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />    
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />    
                                <h5>Ruby on Rails</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />    
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />    
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />    
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />    
                                <h5>Nodejs</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />    
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image" />    
                                <h5>PostgresQl</h5>
                            </div>
                        </Carousel> 
                    </div>
                </Col>
            </Row>
        </Container>

        <img className='background-image-left' src={colorSharp} alt="" />
        
    </section>
  )
}

export default Skills
