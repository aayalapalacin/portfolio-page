import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './component/navbar';

      ReactDOM.render(
        <React.StrictMode>
          <Router>
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/navbar" element={<Navbar />} />
          </Routes>
            {/* Define other routes here */}
          </Router>
        </React.StrictMode>,
        document.getElementById('app')
      );
