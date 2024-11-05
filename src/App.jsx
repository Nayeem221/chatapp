import React from 'react'
import './components/common/LoginRegister.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import app from './firebase.confiq';

import { ToastContainer, toast } from 'react-toastify';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

    
    <Route path="/" element={<Register />} />
      
    <Route path="/login" element={<Login />} />

    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
