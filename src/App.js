import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Quote from './pages/Quote';
import Attendance from './pages/Attendance';
import Daily from './pages/Daily';
//import './App.css';

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Register />}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Quote" element={<Quote />}/>
          <Route path="/Attendance/:name" element={<Attendance />} />
          <Route path="/Daily" element={<Daily />} />
          
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}
export default App;
