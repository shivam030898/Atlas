import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
    </>

  );
}

export default App;
