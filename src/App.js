import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
import { CartProvider } from "./context/CartContext"; // Import the CartProvider
import Profile from "./pages/Profile/Profile";


const App = () => (
  <>
   <Router>
        <AuthProvider>
       <CartProvider>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />

      </Routes>
      <Footer />
      </CartProvider>
      
   
  </AuthProvider>
  </Router>
  </>
 
);

export default App;
