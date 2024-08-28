import React, { useEffect, useState} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { API } from './Api/api';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import Smartphones from './Components/Smartphone/Smartphones';
import ContactUs from './Components/ContactUs';
import './App.css';

function App() {
  const [smartPhones, setSmartPhones] = useState([]);
 
  useEffect(() => {
    const fetchSmartPhones =  async ()=> {
      setSmartPhones(await API.getAll());
    };

    fetchSmartPhones();
    
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />}/>
        <Route path="/dashboard" element={<Dashboard smartPhones={smartPhones}/>} />
        <Route path="/smartphones" element={<Smartphones smartPhones={smartPhones}/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
