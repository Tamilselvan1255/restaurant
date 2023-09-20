import React, { Fragment }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return(
    <Fragment>
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>    
      </Router>
    </Fragment>
  );
}

export default App;