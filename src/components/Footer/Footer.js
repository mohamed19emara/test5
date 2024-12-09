import React from "react";

const Footer = () => (
  <footer style={{ background: "#232f3e", color: "#fff", padding: "20px", textAlign: "center" }}>
    {/* شعار الموقع */}
    <div style={{ marginBottom: "10px" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>AmazonClone</h2>
    </div>

    {/* روابط التنقل */}
    <div style={{ marginBottom: "10px" }}>
      <a
        href="/privacy"
        style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}
      >
        سياسة الخصوصية
      </a>
      <a
        href="/terms"
        style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}
      >
        الشروط والأحكام
      </a>
      <a
        href="/contact"
        style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}
      >
        اتصل بنا
      </a>
    </div>

    {/* روابط اجتماعية */}
    <div style={{ marginBottom: "10px" }}>
      <a
        href="https://facebook.com"
        style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        href="https://twitter.com"
        style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        href="https://linkedin.com"
        style={{ color: "#fff", textDecoration: "none", margin: "0 10px" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>

    {/* حقوق النشر */}
    <div>
      <p style={{ margin: 0 }}>
        &copy; 2024 AmazonClone. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
