import './App.css';

import {BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import homeScreen from './screens/homeScreen';
import createScreen from './screens/createScreen';
import quitScreen from './screens/quitScreen';
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  return (
    <Router>
      <Header/>
      <Container>
      <Route path="/" component={homeScreen} exact="true"/>
      <Route path="/create" component={createScreen} />
      <Route path="/quit"  component={quitScreen}/>
      </Container>  

      <Footer /> 
    </Router>
  );
}

export default App;
