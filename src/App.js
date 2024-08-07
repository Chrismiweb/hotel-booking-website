import './App.css';
import Booking from './booking/Booking';
import Presken from './booking/Presken';
import Home from './landingPage/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/booking" element={<Booking />}/> 
        <Route path="/presken" element={<Presken />}/> 

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
