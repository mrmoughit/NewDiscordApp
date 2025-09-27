import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Redi from './pages/Red';

// Ensure the root element is not null
const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Failed to find the root element");
}

ReactDOM.createRoot(rootElement).render(
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

