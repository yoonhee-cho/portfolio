import React from 'react'
import Contianer from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ScrollButton from './ScrollButton'

function Footer(){

    return (
        <footer className="footer">
            <Contianer fluid={true}>
           
                <Row className="justify-content-between align-items-center p-3">
                  
                    <div className="scoll-button-box">
                         <ScrollButton />
                    </div>

                    <Col className="p-3 m-3 d-flex justify-content-start" sm={3}>
                      <p className="footer-brand"> YOON HEE CHO © 2021</p> 
                    </Col>

                    <Col></Col>

                    <Col className="p-3 m-3 d-flex justify-content-end" sm={6}>
                       
                        <div className="footer-link-box"> 
                            <a className="footer-link" href="https://github.com/yoonhee-cho">Github</a>
                            <a className="footer-link" href="https://www.linkedin.com/in/yoonhee-cho/">LinkedIn</a>
                            <a className="footer-link" href="mailto:yoonheecho1123@gmail.com">E-mail</a>
                        </div> 
                    </Col>
                    
                
                </Row>
            </Contianer>

        </footer>
    )
}

export default Footer