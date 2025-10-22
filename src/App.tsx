import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Weather from "./components/Weather";
import Students from "./components/Students";
import News from "./components/News";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* Thanh điều hướng */}
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/" className="nav-item">Trang chủ</Link></li>
            <li><Link to="/weather" className="nav-item">Bài 1</Link></li>
            <li><Link to="/students" className="nav-item">Bài 2</Link></li>
            <li><Link to="/news" className="nav-item">Bài 3</Link></li>
          </ul>
        </nav>

        {/* Nội dung */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Weather />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/students" element={<Students />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
