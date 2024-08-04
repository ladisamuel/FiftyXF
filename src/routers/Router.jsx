import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Landing from '../pages/main/Landing'
import Login from '../pages/main/Login'
import Register from '../pages/main/Register';
import Main from '../pages/app/Main';


export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Main />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        {/* dis */}
        </BrowserRouter>
    </div>
  )
}
