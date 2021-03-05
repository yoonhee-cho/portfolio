import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ReactPlayer from 'react-player'
import recipebook from '../assets/images/1.jpg'
import recipedetail from '../assets/images/4.jpg'
import recipecover from '../assets/images/recipes.jpg'
import processA from '../assets/images/processA.jpg'
import processB from '../assets/images/processB.png'


function Recipe(props) {

    return(
        <div>
          
          <Container fluid={true}>
               <Row className="header-box">
                    <Col lg={3} sm={12}></Col>

                    <Col lg={3} sm={12} >
                        <div className="header-1">
                            <h1 className="header-title">Korean Comfort Food Recipes</h1>
                            <p><b>Type</b> : Recipes Zine</p>
                            <p><b>Solo project</b></p>
                            <p><b>Date</b> : 2 weeks, May 2020</p>

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
                            This book is about my comfort food recipes. As I decided to eat less meat, especially because I didn’t want to eat the meat product from the factory farming, 
                            I tried to gather the vegetarian recipes that are good for health. 
                            This book contains my childhood memories, nostalgic feelings, my past days in NYC, and the happiness 
                            that I feel now in my everyday life with my husband and our cat Mango.
                            </p>
                            <br></br> <br></br>

                            <h4> Why</h4> <br></br>
                            <p className="body-text">
                            I was born and raised in South Korea and have lived in New York City since 2011. 
                            When I feel nostalgic, I cook Korean food. After eating what I made, I feel the energy is filled up from bottom of my gut. 
                            That way, my emptiness is filled, and my daily life keeps going on. 
                            
                            The reason I wanted to make this book is because it shows who I am and what I pursue. 
                            With this book, I want people who are interested in vegetable dishes to learn more about Korean food 
                            and enjoy the healthy food with reasonable cost.
                            </p>

                        </div>
                    </Col>
                    <Col lg={3} sm={12}></Col>
            </Row>

            <Row>

                <Col></Col>

                <Col lg={9} sm={12} className="mb-5">
                    <div className ="video-box">
                        <ReactPlayer url={`https://vimeo.com/415975553`} width='100%' />
                    </div>
                    
                    <img className="recipe-photo" src={recipecover} alt={recipecover}></img>
                    <img className="recipe-photo" src={recipebook} alt={recipebook}></img>
                    <img className="recipe-photo" src={recipedetail} alt={recipedetail}></img>
                    <img className="recipe-photo" src={processA} alt={processA}></img>
                    <img className="recipe-photo"  src={processB} alt={processB}></img>
                </Col>

                <Col></Col>

            </Row>


          </Container>
        </div>
    );

}

export default Recipe;