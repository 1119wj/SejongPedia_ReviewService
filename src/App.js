
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Login from './pages/Login';
import Home from './pages/Home';
function App(){
  return ( 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/mypage' element={<Mypage />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>  
  </BrowserRouter>
  )
}

export default App;
