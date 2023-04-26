import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Switch } from '@mui/material';
import Navbar from './Homepage/Navbar';
import Placeholder from './Homepage/placeholder';
import homepageImage from "../src/homepage.jpg";
import Visualization from "./Visualization/Visualization";
import Prediction from "./Prediction/Prediction";


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Placeholder imageSrc={homepageImage} imageAlt="Placeholder Image" />
      <Visualization />
      <Prediction />
      {/* <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Visualization</Link>
              </li>
              <li>
                <Link to="/Prediction">Prediction</Link>
              </li>
            </ul>
          </nav>
         
          <Switch>
            <Route exact path="/">
              <Visualization />
            </Route>
            <Route path="/Prediction">
              <Prediction />
            </Route>
         
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
