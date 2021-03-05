import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ReactPlayer from 'react-player'
import light from '../assets/images/light.png'

function Cup(props) {

    return(
        <div>
          
          <Container fluid={true}>
               <Row className="header-box">
                    <Col lg={3} sm={12}></Col>
                    <Col lg={6} sm={12} >
                        <div className="header-1">
                            <h1 className="header-title">{`CUP & CUP`}</h1>
                            <p><b>Type</b> : Sustainable Lighting</p>
                            <p><b>Solo project</b></p>
                            <p><b>Date</b> : 2 weeks, Aug 2019</p>

                        </div>   
                    </Col>

                   <Col  lg={3} sm={12}></Col>

               </Row>

                <Row>
                  <Col lg={3} sm={12}></Col>
                  <Col lg={6} sm={12} >
                        <div className="header-2">
                            <h1 className="header-sub-title">
                            "A DIY kit for assembling a lighting<br></br> from disposable plastic cups" 
                            </h1>
                        </div>
                        <div className="body">
                            <h4> What</h4> <br></br>
                            <p className="body-text">
                            {`CUP & CUP is a sociologically broader take on the current environmental landscape. 
                            It is a DIY lighting kit with disposable cups that we often use for a cup of coffee and easily throw away. 
                            People can play with the cups and assemble them into a lighting like Lego pieces and see what kinds of shapes can be made.`}  
                            </p>
                            <br></br> <br></br>

                            <h4> Why</h4> <br></br>
                            <p className="body-text"> 
                            {`Today, we experience economic, environmental, and health issues due to excessive use of plastic. 
                            To help reduce plastic consumption by reusing and make people think about toxic contamination caused by plastic usage, 
                            I designed CUP & CUP. In this project, I wanted to explore how lighting design can be used for functional and expressive purposes. 
                            I also wanted to show that we can make beautiful things with what we would normally throw away by witnessing the cups turning into a functional and beautiful lighting. 
                            I hope that the project provides an opportunity for people to think twice before using plastic cups.
                           `}</p>

                        </div>
                    </Col>
                    <Col lg={3} sm={12}></Col>
            </Row>

            <Row>

                <Col> </Col>

                <Col lg={6} sm={12} className="justify-content-center align-items-center">

                    <img className="cup" src={light} alt={light}></img>
                    <div className ="video-box">
                        <ReactPlayer url={`https://vimeo.com/235834860`} width='100%' />
                    </div>
                 
                </Col>

                <Col></Col>

            </Row>

          </Container>
        </div>
    );

}

export default Cup;