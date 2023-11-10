import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import Foods from "./pages/Foods";
import FoodDetails from "./pages/FoodDetails"; // Create a new component for food details

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/foods/:foodId" element={<FoodDetails />} /> {/* Capture food ID */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
