import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import POPOSDetails from './POPOSDetails';
import { HashRouter as Router, Route } from 'react-router-dom'
import About from './About'

import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Title />
      <Route exact path="/" component={POPOSList}/>
      <Footer />
      <Route exact path="/about" component={About}/>
      <Route path="/details/:id" component={POPOSDetails} />
    </div>
    </Router>
  );
}

export default App;
