import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import Foods from "./pages/Foods";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import api from "./api/axiosConfig";
import Login from "./pages/Login";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem('isLoggedIn') === 'true'
  );
  const handleLogin = () => {
    // Your login logic

    // Assuming successful login
    setIsLoggedIn(true);

    // Save login state in sessionStorage
    sessionStorage.setItem('isLoggedIn', 'true');
  };

  useEffect(() => {
    const handleStorageChange = () => {
      // Update the state when the 'isLoggedIn' key in sessionStorage changes
      setIsLoggedIn(sessionStorage.getItem('isLoggedIn') === 'true');
    };

    // Add event listener to handle changes in sessionStorage
    window.addEventListener('storage', handleStorageChange);

  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/foods" element={<Foods isLoggedIn={isLoggedIn} />} />
        <Route path="/foods/:foodId" element={<FoodDetails isLoggedIn={isLoggedIn} />} /> {/* Capture food ID */}
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
        <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={handleLogin} />} ></Route>
        <Route path="/orders" element={<Orders isLoggedIn={isLoggedIn} />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
