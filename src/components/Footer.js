import React from 'react'
import Contianer from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Footer(){
    return (
        <footer className="footer">
            <Contianer fluid={true}>
                <Row className="justify-content-between p-3">

                    <Col className="p-3 m-3" sd={12}>
                      <p className="footer-brand"> YOON HEE CHO © 2021</p> 
                    </Col>

                    <Col className="p-3 m-3 d-flex justify-content-end" md={3}>
                        <div className="footer-link-box">
                            <p>Github</p>
                            <p>LinkedIn</p>
                            <p>E-mail</p>
                        </div>
                    </Col>

                </Row>
            </Contianer>

        </footer>
    )
}

export default Footer