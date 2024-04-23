import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login  from './Components/Login';
import  Signup  from './Components/Signup';
import Form from './Components/Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/form' element={<Form/>}></Route>
</Routes>
</BrowserRouter>
  </div>
);


