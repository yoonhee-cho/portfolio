import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

import NavBar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AccountaBeePage from './pages/AccountaBeePage'
import MealpPage from './pages/MealpPage'
import SproutPage from './pages/SproutPage'
import CupPage from './pages/CupPage'
import RecipePage from './pages/RecipePage'
import TraumaBoxPage from './pages/TraumaBoxPage'

function App() {
  return (
  
    <Router>
      <ScrollToTop />
      <Container className="p-0" fluid={true}>

        <NavBar />
   
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/accountabee" exact render={() => <AccountaBeePage />} />
        <Route path="/mealp" exact render={() => <MealpPage />} />
        <Route path="/sprout" exact render={() => <SproutPage />} />
        <Route path="/cup" exact render={() => <CupPage />} />
        <Route path="/recipes" exact render={() => <RecipePage />} />
        <Route path="/trauma-box" exact render={() => <TraumaBoxPage />} />


        <Route path="/about" render={() => <AboutPage />} />
          
        <Footer className="p-0 mb-0" />
      </Container>
     
   </Router >
  
  );
}

export default App;
