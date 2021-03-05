import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ReactPlayer from 'react-player'
import mealp from '../assets/images/meal-p.jpg'
import MealpInfo from './MealpInfo'

function Mealp(props) {

    return(
        <div>
          
          <Container fluid={true}>
               <Row className="header-box">
                    <Col lg={3} sm={12}></Col>
                    <Col lg={6} sm={12} >
                        <div className="header-1">
                            <h1 className="header-title">Meal:P</h1>
                            <MealpInfo />
                        
                            <a href='https://github.com/yoonhee-cho/MEAL-P'>
                                <button className="github-button" type="submit">
                                    github
                                </button>
                            </a>
                
                        </div>   
                    </Col>

                    <Col lg={3} sm={12}></Col>

               </Row>
         
               
                <Row>
                    <Col></Col>

                    <Col lg={6} sm={12}>
                        <div className="header-2">
                            <h1 className="header-sub-title">
                               "Efficient meal plan, grocery shopping list,<br></br> and recipes managing tool"
                            </h1>
                        </div>

                        <h3 className="body-subtitle">Main Features</h3>

                        <div className="detail-box">
                            <p >   
                                1. Users can plan their meals on the calendar, write a grocery shopping list based on their meal menus
                                 and adjust the items based on the estimated price within their budget
                            </p>
                            <ReactPlayer url={`https://vimeo.com/518671678`} playing={true} width='100%'/>
                        </div>

                        <div className="detail-box">
                            <p>   
                                2. Users can search recipes by ingredients to get meal plan ideas and ave the recipes you want to keep
                            </p>
                            <div className="videp-box">
                            <ReactPlayer url={`https://vimeo.com/518671704`} playing={true} width='100%'/>
                            </div>
                        </div>
                    </Col>

                    <Col></Col>

                </Row>


            <Row>

                <Col></Col>

                <Col lg={9} sm={12}>
                    <img className="body-img" src={mealp} alt={mealp}></img>
                    <br></br> <br></br>
                </Col>

                <Col></Col>

</Row>


            </Container>
        </div>
    );

}

export default Mealp;