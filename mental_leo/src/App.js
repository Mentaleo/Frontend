
import './App.css';
import Navbar from './Homepage/Navbar';
import Placeholder from './Homepage/placeholder';
import homepageImage from "../src/homepage.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Placeholder 
       imageSrc={homepageImage}
       imageAlt="Placeholder Image"
      />
    </div>
  );
}

export default App;
