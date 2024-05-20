/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarDefault from './components/Navbar1';
import AboutRentify from './components/About';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarDefault />
        <Routes>
          <Route path="/" element={<AboutRentify />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
