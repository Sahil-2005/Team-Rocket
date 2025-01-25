// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/create" element={<CreateProject />} />
//         <Route path="/project/:id" element={<ProjectDetails />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Payment from './pages/Payment';
import Navbar from './components/Navbar';
import StartProject from './pages/StartProject';

const App = () => {
    return (
      <Router>
      <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/Start-project" element={<StartProject />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </Router>
    );
};

export default App;
