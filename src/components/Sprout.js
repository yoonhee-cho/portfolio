import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ReactPlayer from 'react-player'

import sprout from '../assets/images/sprout.png'

function Sprout(props) {

    return(
        <div>
          
          <Container fluid={true}>
               <Row className="header-box">
                    <Col lg={3} sm={12}></Col>
                    <Col lg={6} sm={12} >
                        <div className="header-1">
                            <h1 className="header-title">Sprout</h1>
                            <p><b>Type</b> : Mobile Game Application Design</p>
                            <p><b>Solo project</b></p>
                            <p><b>Date</b> : 2.5 weeks, Oct 2019</p>

                        </div>   
                    </Col>

                   <Col  lg={3} sm={12}></Col>
               </Row>

                <Row>
                  <Col lg={3} sm={12}></Col>
                  <Col lg={6} sm={12} >
                        <div className="header-2">
                            <h1 className="header-sub-title">
                                "Communicate, Grow a garden, and Connect" 
                            </h1>
                        </div>
                        <div className="body">
                            <h4> What</h4> <br></br>
                            <p className="body-text">
                            Through this mobile game application, users of Sprout can meet people and talk based on their interest’s preferences. 
                            To stimulate the communication, plants grow as users talk more. Using voice recognition function.
                            Users with low vision due to aging can easily have a conversation.
                            </p>
                            <br></br> <br></br>

                            <h4> Why</h4> <br></br>
                            <p className="body-text">   
                            I was inspired by my grandmother and made this mobile game. 
                            As I live in U.S. and my grandmother lives in South Korea, 
                            there are not that many chances to have deep conversation with her. 
                            Through this game, me and my grandmother will have more chances to talk no matter the distance. 
                            Since our hobby is gardening, I used gardening in this game to gain our attention more.
                            </p>
                        
                        </div>
                    </Col>
                    <Col lg={3} sm={12}></Col>
            </Row>

            <Row>

                <Col></Col>

                <Col lg={9} sm={12} className="m-5">
                    <div className ="video-box">
                        <ReactPlayer url={`https://vimeo.com/242474840`} width='100%' />
                    </div>
                    <img className="sprout-detail" src={sprout} alt={sprout}></img>
                </Col>

                <Col></Col>

            </Row>

          </Container>
        </div>
    );

}

export default Sprout;