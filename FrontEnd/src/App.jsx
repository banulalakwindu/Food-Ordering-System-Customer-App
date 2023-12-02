// App.js
import React, { useState, useEffect } from "react";
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
import Login from "./pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem('isLoggedIn') === 'true'
  );
  const [userId, setUserId] = useState(sessionStorage.getItem('userId') || '');

  const handleLogin = (userId) => {
    // Assuming successful login
    setIsLoggedIn(true);

    // Save login state and user ID in sessionStorage
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('userId', userId);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      // Update the state when the 'isLoggedIn' or 'userId' keys in sessionStorage change
      setIsLoggedIn(sessionStorage.getItem('isLoggedIn') === 'true');
      setUserId(sessionStorage.getItem('userId') || '');
    };

    // Add event listener to handle changes in sessionStorage
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/foods" element={<Foods isLoggedIn={isLoggedIn} />} />
        <Route path="/foods/:foodId" element={<FoodDetails isLoggedIn={isLoggedIn} userId={userId} />} />
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} userId={userId} />} />
        <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} userId={userId} />} />
        <Route path="/login" element={<Login setIsLoggedIn={handleLogin} setUserId={setUserId} />} />
        <Route path="/orders" element={<Orders isLoggedIn={isLoggedIn} userId={userId} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
