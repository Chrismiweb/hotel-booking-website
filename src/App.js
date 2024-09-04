import './App.css';
import Aveon from './booking/aveon';
import Booking from './booking/Booking';
import DeApartment from './booking/DeApartment';
import Debras from './booking/Debras';
import Gallani from './booking/gallani';
import Presken from './booking/Presken';
import Safron from './booking/Safron';
import Dashboard from './dashboard/Dashboard';
import Home from './landingPage/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Uploa from './dashboard/Upload';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/booking" element={<Booking />}/> 
        {/* <Route path="/presken" element={<Presken />}/>  */}
        <Route path="/presken/:hotelName" element={<Presken />}/> 
        <Route path="/safron/:hotelName" element={<Safron />}/> 
        <Route path="/deApartment/:hotelName" element={<DeApartment />}/> 
        <Route path="/aveon/:hotelName" element={<Aveon />}/> 
        <Route path="/gallani/:hotelName" element={<Gallani />}/> 
        <Route path="/debras/:hotelName" element={<Debras />}/> 
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/upload" element={<Uploa/>}/> 








      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
