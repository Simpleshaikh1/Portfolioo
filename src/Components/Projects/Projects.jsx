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

function Projects() {
    const projects = [

        {
            title: 'MYXALARY',
            description: 'MyXalary is a free HR software designed to ease and automate HR processes. Built with Angular and Nodejs',
            imgUrl: myxalary,
        },

        {
            title: 'Locum',
            description: 'Empowering freelance healthcare professionals to manage their hours. in locum practice. Your next few hours of work is just a click away. Buit with React and Nestjs',
            imgUrl: locum,
        },

        {
            title: 'Credence',
            description: 'Credence serves as a trustworthy third party platform, protecting the integrity of your transaction when dealing with commodity traders. Built with React and Nodejs',
            imgUrl: credence,
        },

        {
            title: 'Hackathon',
            description: 'Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day to shape the future. Whether you are a coding genius, a design maverick, or a concept wizard, you wil have the chance to transform your ideas into reality. Built with React and Redux',
            imgUrl: hackathon,
        },

        {
            title: 'Share Coin',
            description: 'Sharecoin is a mobile web application to check a list of metrics (numeric values of stock data). Built with React and Redux',
            imgUrl: sharecoin,
        },

        {
            title: 'Recipe App',
            description: 'Recipe app is an app that allows you keep track of your recipes. Built with Ruby on Rails',
            imgUrl: recipe,
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
                                {/* <Tab.Pane eventKey='third'><a href="https://app.netlify.com/teams/ifennawisdom/sites">Projects hosted on Netlify</a></Tab.Pane> */}
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