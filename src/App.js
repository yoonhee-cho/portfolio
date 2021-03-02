import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

import NavBar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AccountaBeePage from './pages/AccountaBeePage'

function App() {
  return (
  
    <Router>
      <Container className="p-0" fluid={true}>

        <NavBar />
   
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/accountabee" exact render={() => <AccountaBeePage />} />
        <Route path="/about" render={() => <AboutPage />} />
          
     
        <Footer className="p-0 mb-0" />
      </Container>
     
   </Router >
  
  );
}

export default App;
