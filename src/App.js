import React from "react";
import './App.css';
import Home from './Componants/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./Componants/About/About";
import Projects from "./Componants/Porjects/Projects";
import Contact from "./Componants/Contact/Contact";
import Blog from "./Componants/Blog/Blog";


function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path = "/projects">
          <Projects/>
        </Route>
        <Route path = "/blog">
          <Blog/>
        </Route>
        <Route path = "/about">
          <About/>
        </Route>
        <Route path = "/contact">
          <Contact/>
        </Route>
        <Route path = "/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
