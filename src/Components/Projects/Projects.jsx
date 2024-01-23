import React from 'react'
import { Col, Container, Row, Tab, TabContainer, TabContent, Nav } from 'react-bootstrap'
import ProjectCards from '../ProjectCards/ProjectCards'
import myxalary from '../../assets/myxalary-payroll.png'
import locum from '../../assets/locum-dashboard.png'
import credence from '../../assets/credence.png'
import hackathon from '../../assets/get-linked-hackathon.png'
import sharecoin from '../../assets/sharecoin.png'
import recipe from '../../assets/recipe-app-rails.png'
import colorSharp2 from '../../assets/color-sharp2.png'
import mobi from '../../assets/mobi-bank.png'
import flight from '../../assets/flight-app.png'

function Projects() {
    const projects = [

        {
            title: 'MYXALARY',
            description: 'MyXalary is a free HR software designed to ease and automate HR processes. Built with Angular and Nodejs',
            imgUrl: myxalary,
            liveLink: 'https://myxalary.com/',
            githubLink: 'https://github.com/',
        },

        {
            title: 'Locum',
            description: 'Empowering freelance healthcare professionals to manage their hours. in locum practice. Your next few hours of work is just a click away. Buit with React and Nestjs',
            imgUrl: locum,
            liveLink: 'https://locum-ba5f5.firebaseapp.com/',
            githubLink: 'https://github.com',
        },

        {
            title: 'Credence',
            description: 'Credence serves as a trustworthy third party platform, protecting the integrity of your transaction when dealing with commodity traders. Built with React and Nodejs',
            imgUrl: credence,
            liveLink: 'https://credenceapp.co/',
            githubLink: 'https://github.com',
        },

        {
            title: 'Hackathon',
            description: 'Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day to shape the future. Whether you are a coding genius, a design maverick, or a concept wizard, you wil have the chance to transform your ideas into reality. Built with React and Redux',
            imgUrl: hackathon,
            liveLink: 'https://65858d46bd2a38ccc2df10fe--toyyib-hackathon.netlify.app/',
            githubLink: 'https://github.com/Simpleshaikh1/hackathon',
        },

        {
            title: 'Share Coin',
            description: 'Sharecoin is a mobile web application to check a list of metrics (numeric values of stock data). Built with React and Redux',
            imgUrl: sharecoin,
            liveLink: 'https://metric-app-v1.netlify.app/',
            githubLink: 'https://github.com/Simpleshaikh1/Metric-App',
        },

        {
            title: 'Recipe App',
            description: 'Recipe app is an app that allows you keep track of your recipes. Built with Ruby on Rails',
            imgUrl: recipe,
            liveLink: 'https://example.com/locum-live',
            githubLink: 'https://github.com/your-username/locum',
        },
        {
            title: 'Mobi Bank',
            description: 'Mobi Bank is a bank app that allows all form of banking operations. Built with Reactjs and Nodejs',
            imgUrl: mobi,
            liveLink: 'https://mobibankapp.onrender.com/',
            githubLink: 'https://github.com',
        },
        {
            title: 'Flight App',
            description: 'Flight App allows you to book flight and find best hotels in town. Built with React.',
            imgUrl: flight,
            liveLink: 'https://flight-advisor-app-6phr.vercel.app/explore',
            githubLink: 'https://github.com',
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>I am a software engineer and also a technology enthusiast. That is why I seek an interest in developing software applications, learning new Technologies 
                            and impacting in the industry.<br />
                            <br />
                            Here are the few projects I have built. Some are solo projects and some are collaborations.
                        </p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCards
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'><a href="https://github.com/Simpleshaikh1">Github Repositories</a></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

            <img src={colorSharp2} alt="" className="background-image-right" />
        </section>
    )
}

export default Projects