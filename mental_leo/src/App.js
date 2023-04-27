import React from 'react';
import './App.css';
import Navbar from './Homepage/Navbar';
import Placeholder from './Homepage/placeholder';
import homepageImage from "../src/homepage.jpg";
import Visualization from "./Visualization/Visualization";
import Prediction from "./Prediction/Prediction";
import AboutUs from './About Us/AboutUs';


function App() {

  return (

    <div className="App">
      <Navbar /> 
      <Placeholder imageSrc={homepageImage} imageAlt="Placeholder Image" />
      <Visualization />
      <Prediction />
      <AboutUs />
    </div>

  );

}

export default App;
