import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Routes>
            <Route path='/Visualization' element={<Visualization/>} /> 
            <Route path='/Prediction' element={<Prediction />} /> 
        </Routes>  
      </Router> */}
    </div>
  );
}

export default App;
