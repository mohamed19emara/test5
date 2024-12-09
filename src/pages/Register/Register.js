import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Register.css";

const Register = () => {
  const { register, error } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const message = await register(formData); // انتظار التسجيل
      console.log(message);
      navigate("/login"); // التوجيه إلى صفحة تسجيل الدخول
    } catch (err) {
      console.error("Registration failed:", err.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* عرض الأخطاء */}
    </div>
  );
};

export default Register;
