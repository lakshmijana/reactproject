
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OverlayNav from './components/nav';
import OverallLayout from './components/Overalllayout';
import AboutUs from './components/aboutus';
import RandomMenuu from './components/menu2';
import Imagecomp from './components/imagecomp';
import Formm from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
    <BrowserRouter>
    
      <OverlayNav />
      <Routes>
        <Route path="/" element={<OverallLayout />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Menu" element={<RandomMenuu />} />
        <Route path="/Booknow" element={<Formm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
