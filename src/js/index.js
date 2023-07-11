import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './component/navbar';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Footer from './component/footer';
import "../styles/index.css"
      ReactDOM.render(
        <React.StrictMode>
          <Router>
            <Navbar />
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
            {/* Define other routes here */}
          </Router>
        </React.StrictMode>,
        document.getElementById('app')
      );
