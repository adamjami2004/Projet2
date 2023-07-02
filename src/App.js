import './App.css';
import Navbar1 from './components/Navbar'
import Home from './components/Home'
import About from './components/about';
import Bot from './components/bot';
import Booking from './components/booking';
import Destinations from './components/destinations';
import { Routes, Route  } from 'react-router-dom';
import Price from './components/pricing';


function App() {
  const imageUrl = 'https://wallpapercave.com/w/wp6686021.jpg';
  

  return ( 
    <div>

      <Navbar1/>
      <Routes>
        <Route path="/" element={<Home imageUrl={imageUrl}/>} />
        <Route path="/bot" element={<Bot/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/pricing" element={<Price/>} />
        <Route path="/destination" element={<Destinations/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
      


    </div>

    
  );
}

export default App;
