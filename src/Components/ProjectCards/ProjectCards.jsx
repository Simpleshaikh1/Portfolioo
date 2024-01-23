import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCards({title, description, imgUrl, liveLink, githubLink}) {
  return (
    <Col sm={6} md={4}>

        <div className="proj-imgbx">

            <img src={imgUrl} alt={title}/>

            <div className="proj-imgtxtx">

                <h4>{title}</h4>

                <span>{description}</span>

                <div className="proj-links">
                  {liveLink && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className='link'>
                      Live
                    </a>
                  )}
                  {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className='link'>
                      GitHub
                    </a>
                  )}
                </div>
            </div>
        </div>
    
    </Col>
  )
}

export default ProjectCards