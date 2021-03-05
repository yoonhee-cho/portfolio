import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ReactPlayer from 'react-player'

function TraumaBox(props) {

    return(
        <div>
          
          <Container fluid={true}>
               <Row className="header-box">
                    <Col lg={3} sm={12}></Col>
                    <Col lg={3} sm={12} >
                        <div className="header-1">
                            <h1 className="header-title">TraumaBox</h1>
                            <p><b>Type</b> : Wood working</p>
                            <p><b>Solo project</b></p>
                            <p><b>Date</b> : 2.5 week, Sep 2018</p>

                        </div>   
                    </Col>

                    <Col lg={3} sm={12}>
                   </Col>
                   <Col  lg={3} sm={12}></Col>

               </Row>

                <Row>
                  <Col lg={3} sm={12}></Col>
                  <Col lg={6} sm={12} >
                        <div className="body">
                            <h4> What</h4> <br></br>
                            <p className="body-text">
                            This installation is about my feelings that I felt after watching the movie. 
                            People can feel a little bit of my feelings while watching inside of the box by rotating two handles next to the box. 
                            I purposely designed the box height low for an uncomfortable position so that people have to bend their knees 
                            and endure their pain to watch it.
                            </p> <br></br> <br></br>

                            <h4> Why</h4> <br></br>
                            <p className="body-text">   
                            After watching a movie 'Okja' 
                            (It is a story about gentle massive animal Okja and the girl 
                            who raised her are caught in the crossfire between animal activism, 
                            corporate greed and scientific ethics), I was shocked. 
                            I was so resentful to myself that I did not have any doubt about where the meat came from 
                            and what kind of environment it was raised in. 
                            After that, I haven't been able to eat meat. Every time I see the meat, it reminds me of the cries of 
                            the animals I saw in the movie.
                            </p>

                        </div>
                    </Col>
                    <Col lg={3} sm={12}></Col>
            </Row>

            <Row>

                <Col></Col>

                <Col lg={9} sm={12}>
                    <div className ="video-box">
                        <ReactPlayer url={`https://vimeo.com/248677179`} width='100%' />
                    </div>
                 
                </Col>

                <Col></Col>

            </Row>

            <Row>
                  <Col lg={3} sm={12}></Col>
                  <Col lg={6} sm={12} >
                        <div className="body">
                            <h3> Images Inside of the Box</h3>
                            <p className="trauma-text">I tried to show what I felt in an abstract way. 
                                I made three illustrations and printed on transparency film. 
                                First illustration (from top left) is about eating, second one is about human body, 
                                third one is about meat. Inside of the box, three printed illustrations are overlapped and make abstract feeling by rotating.

                            </p>

                            <h3> Internal Construction</h3>
                            <p className="trauma-text">I wanted three illustrations to rotate in different directions with different speed. 
                                To do so, I was inspired by automata (mechanical toy) mechanism and used it to show my illustrations more interestingly.
                            </p>

                        </div>
                    </Col>
                    <Col lg={3} sm={12}></Col>
            </Row>


          </Container>
        </div>
    );

}

export default TraumaBox;