import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import homeScreen from './screens/homeScreen';
import AuthScreen from './screens/AuthScreen';
import ProfileScreen from './screens/ProfileScreen';
import createScreen from './screens/createScreen';
import Header from './components/Header'
import Footer from './components/Footer'
import UpdateScreen from './screens/UpdateScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" component={homeScreen} exact />
            <Route path="/auth" component={AuthScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/create" component={createScreen} />
            <Route path="/update/:id" component={UpdateScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
