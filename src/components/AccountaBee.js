import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import accountaBee from '../assets/images/accountaBee.jpg'

function AccountaBee(props) {

    return(
        <div>
          
          <Container fluid={true}>
               <Row className="header-box">
                    <Col lg={3} sm={12}></Col>
                    <Col lg={3} sm={12} >
                        <div className="header-1">
                            <h1 className="header-title">AccountaBee</h1>
                            <p><b>Type</b> : Mobile Application</p>
                            <p><b>Role</b> : wireframe, </p>
                            <p><b>Team Members</b>: Ashley Valenzuela, Valerie Ingmann, Alexandra Langton</p>
                            <p><b>Date</b> : 1 week, Oct 2020</p>

                            {/* <Link to='https://github.com/AccountaBee'> */}
                            <a href='https://github.com/AccountaBee'>
                                <button className="github-button" type="submit">
                                    github
                                </button>
                            </a>
                            {/* </Link> */}

                        </div>   
                    </Col>

                    <Col lg={3} sm={12}>
                        <div className="header-2">
                            <h1 className="header-sub-title">
                            "Socially accountable goal setting for you and your friends." 
                            </h1>
                        </div>
                   </Col>
                   <Col  lg={3} sm={12}></Col>

               </Row>

                <Row>
                  <Col lg={3} sm={12}></Col>
                  <Col lg={6} sm={12} >
                        <div className="body">
                            <p className="body-text">   
                                AccountaBee is a mobile app that lets you and your friends set weekly goals, 
                                check them off as the week progresses, and keep each other socially accountable. 
                                With a feed that updates you on your friends' progress, you can encourage and 
                                applaud each others' efforts and achieve your goals together.
                            </p>

                            <p>
                                We decided the AccountaBee concept would work best as a mobile app, 
                                so in order to bring our vision to life we taught ourselves React Native 
                                and React Navigation over the course of this two week sprint. 
                                We integrated Redux for state management, Victory.js to visualize users' goal progress, 
                                and Firebase for user authentication. Our back-end server is deployed on Heroku 
                                and uses Express to handle HTTP requests, featuring Sequelize queries 
                                to a PostgreSQL database of highly connected models.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} sm={12}></Col>
            </Row>

            <Row>

                <Col></Col>

                <Col lg={9} sm={12}>
                    <ReactPlayer url={`https://vimeo.com/518405260`} width='100%' />
                    <img className="body-img" src={accountaBee} alt={accountaBee}></img>
                </Col>

                <Col></Col>

            </Row>


          </Container>
        </div>
    );

}

export default AccountaBee;