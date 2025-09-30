import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Profilepage from './components/Profilepage';
import ICTPage from './components/ICTPage';
import './styles/Global.css';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/profile' element={<Profilepage />} />
        <Route path='/ict' element={<ICTPage />} />
      </Routes>
    </Router>
  )
}

export default App
