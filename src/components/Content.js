import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Content(props) {

    return(
        <Container fluid={true}>
            <Row className="justify-content-center md={6}">
                <Col sm={12} md={12}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default Content;