import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Weather from "./components/Weather";
import Students from "./components/Students";
import News from "./components/News";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/weather">Weather</Link> |{" "}
        <Link to="/students">Students</Link> |{" "}
        <Link to="/news">News</Link>
      </nav>

      <Routes>
        <Route path="/weather" element={<Weather />} />
        <Route path="/students/*" element={<Students />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;


