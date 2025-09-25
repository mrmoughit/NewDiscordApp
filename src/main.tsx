import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';



import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Redi from './pages/Red.tsx'


// const hideNavbar = location.pathname === "/admin";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <div>
                {/* {!hideNavbar && <Navbar />} */}
                <Routes>
                    <Route path="/redi" element={<Redi />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </Router>
    </React.StrictMode>
);