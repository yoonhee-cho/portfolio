import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../assets/images/profile.JPG'
import resume from '../assets/images/yoonheecho_resume.pdf'

function Content(props) {

    return(
        <Container fluid={true}>
            <Row className="justify-content-center md={2}">

                <Col md={4} sm={12}>
                    <img className="about-image" src={profile} alt={profile} />
                </Col>

                <Col md={5} sm={12} >
                    
                    <div className="about-box">
                        <h1 className="about-title">
                            {`Developer & Designer`}
                        </h1>
                        
                        <p className="about-text">
                        Hello! I'm Yoon, a full-stack/ front-end developer with a passion for
                        crafting web applications with clean code and UI/UX that create practical solutions.
                       
                        </p>
                        <p className="about-text">
                        Previously, I worked as a handbag designer after getting my BFA in Accessories 
                        Design from Fashion Institute of Technology. Browsing innovative and fascinating
                        websites was just a hobby of mine. A hobby quickly turned into a passion and 
                        motivated me to enrolled at Parsons Schools of Design in Design and Technology.
                        After receiving my MFA degree, I attended The Grace Hopper Program at Fullstack 
                        Academy to hone my programming skills. 
                        </p>

                        <p className="about-text">
                        I used to design and create complex patterns for handbags and small leather goods for fashion shows.
                        Now, I am fascinated with the similar kind of work – but in a different industry. I love the achievement of learning and am excited to pursue a lifelong journey
                        of knowledge and problem-solving! <br></br><br></br>
                        When I am not coding, I am usually playing tennis, doing yoga, go camping and hiking,
                        cooking and watching documentaries about eco-friendly houses. 
                        </p> 
                    </div>
                   
                    <a className="resume-a" href={resume} download="yoonheecho_resume.pdf">
                        Resume
                    </a>  
                   
                </Col>

            </Row>
        </Container>
    );

}

export default Content;