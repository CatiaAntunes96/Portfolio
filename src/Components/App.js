import React from 'react';
import "../Style/App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Find from "./Find";
import Footer from "./Footer";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch> 
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/find" component={Find} />
      <Route path="/" exact component={Home}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
