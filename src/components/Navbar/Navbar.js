import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";
import logoImg from "../../assests/logo.jpg"; // استبدل هذا برابط اللوجو الخاص بك
import { Container } from "react-bootstrap";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart(); // Access cart items from CartContext

  const handleLogout = () => {
    logout();
  };

  // حساب العدد الإجمالي للمنتجات في العربة
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <Container className="container">
        {/* Logo and Categories */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={logoImg} alt="Brand Logo" className="logo-image" />
          </Link>
          <select className="navbar-category">
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home & Kitchen</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>

        {/* Search Section */}
        <div className="navbar-center">
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Search for products, brands, and more"
          />
          <button className="navbar-search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* User and Cart Section */}
        <div className="navbar-right">
          <div className="navbar-user">
            {user && user.username ? (
              <div className="user-info">
                {/* إضافة صورة المستخدم بجانب اسمه */}
                <Link to="/Profile" className="user-greeting">
                  <img
                    src={user.avatar || "https://via.placeholder.com/150"} // إذا كان للمستخدم صورة شخصية
                    alt="User Avatar"
                    className="user-avatar"
                  />
                  Hello, {user.username}
                </Link>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-links">
                <Link to="/login" className="login-link">
                  Login
                </Link>
                <Link to="/register" className="register-link">
                  Register
                </Link>
              </div>
            )}
          </div>
          <div className="navbar-cart">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">{cartCount}</span>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
