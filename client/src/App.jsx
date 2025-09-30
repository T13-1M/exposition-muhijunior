import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Profilepage from './components/Profilepage';
import ICTpage from './components/ICTPage';
import Bahasapage from './components/Bahasapage';
import Sainspage from './components/Sainspage';
import Thafidzpage from './components/Thafidzpage';
import SBOpage from './components/SBOPage';
import './styles/Global.css';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/profile' element={<Profilepage />} />
        <Route path='/ict' element={<ICTpage />} />
        <Route path="/bahasa" element={<Bahasapage />} />
        <Route path="/sains" element={<Sainspage />}/>
        <Route path="/thafidz" element={<Thafidzpage />} />
        <Route path="/sbo" element={<SBOpage />} />
      </Routes>
    </Router>
  )
}

export default App
