import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Payment from './pages/Payment';
import Navbar from './components/Navbar';
import StartProject from './pages/StartProject';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Info from './components/Info';

const App = () => {
    return (
      <Router>
      <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/Start-project" element={<StartProject />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        <Footer/>
        </Router>
    );
};

export default App;
