import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext"; // افترضنا وجود Context للتحقق من صلاحية المستخدم
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const message = await login(credentials);
      console.log(message);
      navigate("/"); // التوجيه عند النجاح
    } catch (err) {
      console.error("Login failed:", err.message);
    }
  };

  return (
    <div className="login-container">
      <h1 className="text-center">تسجيل الدخول</h1>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>اسم المستخدم</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="أدخل اسم المستخدم"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>كلمة المرور</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="أدخل كلمة المرور"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          تسجيل الدخول
        </Button>

        {error && <p className="error-message text-danger text-center mt-3">{error}</p>}

        <div className="text-center mt-3">
          <p>ليس لديك حساب؟ <span className="register-link" onClick={() => navigate("/register")}>إنشاء حساب</span></p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
