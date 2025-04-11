
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Import components and pages
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <>
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <div className={`app ${theme}`}>
          <Navbar
            theme={theme}
            setTheme={setTheme}
            setShowLogin={setShowLogin}
          />

          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <About />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;