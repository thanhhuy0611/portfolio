import React from 'react';

import Navigation from './components/Navigation';
import Masthead from './components/Masthead';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import './App.css';
import ScrollUpButton from "react-scroll-up-button";


//import router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <ScrollUpButton
          EasingType="linear"
          StopPosition={0}
          ShowAtPosition={200}
          AnimationDuration={600}
        />
      </div>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Masthead}></Route>

        <Route path='/about' exact component={AboutSection}></Route>

        <Route path='/project' exact component={Projects}></Route>

        <Route path='/contact' exact component={ContactSection}></Route>

      </Switch>

    </Router>
  );
}

export default App;

