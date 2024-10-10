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
// import Uploa from './dashboard/uploadHotel/Upload';
import AllHotels from './dashboard/allHotels/AllHotels';
import UploadDashboard from './dashboard/uploadHotel/UploadDashboard';
import Test from './dashboard/uploadHotel/Test';
import Register from './register/Register';
import Login from './login/Login';
// import { ThemeContext } from '@emotion/react';
// import { ThemeContext } from './context/ThemeContext';
import { UserInfoProvider } from './context/userContext';
import Contact from './contactUs/Contact';
import HotelList from './dashboard/allHotels/HotelList';
function App() {
  return (
    <UserInfoProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/booking" element={<Booking />}/> 
        <Route path="/contact" element={<Contact />}/> 

        {/* <Route path="/presken" element={<Presken />}/>  */}
        <Route path="/presken/:hotelName" element={<Presken />}/> 
        <Route path="/safron/:hotelName" element={<Safron />}/> 
        <Route path="/deApartment/:hotelName" element={<DeApartment />}/> 
        <Route path="/aveon/:hotelName" element={<Aveon />}/> 
        <Route path="/gallani/:hotelName" element={<Gallani />}/> 
        <Route path="/debras/:hotelName" element={<Debras />}/> 
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/hotel/list" element={<HotelList/>}/> 

        <Route path="/upload" element={<UploadDashboard/>}/> 
        <Route path="/test" element={<Test/>}/> 
        <Route path="/allHotels" element={<AllHotels/>}/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="/login" element={<Login/>}/> 


      </Routes>
    </BrowserRouter>
    </UserInfoProvider>
  );
}

export default App;
