import './App.css';

import {BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import HomeScreen from './screens/HomeScreen.js';
import createScreen from './screens/createScreen';
import Header from './components/Header'
import Footer from './components/Footer'
import UpdateScreen from './screens/UpdateScreen';



function App() {
  return (
    <Router>
      <Header/>
      <Container>
      <Route exact={true} path="/" component={HomeScreen} />
      <Route path="/create" component={createScreen} />
      <Route path="/update/:id" component={UpdateScreen} />
      </Container>  

      <Footer /> 
    </Router>
  );
}

export default App;
