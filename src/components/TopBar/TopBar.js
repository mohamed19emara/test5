import React from "react";
import "./TopBar.css"; // استيراد ملف CSS
import { Container } from "react-bootstrap";

const TopBar = ({ onViewPage }) => {
  return (
    <Container className="top-bar">
      <div className="top-bar-title">
        🌟 Best Seller
      </div>
      <button className="top-bar-button" onClick={onViewPage}>
        عرض الصفحة
      </button>
    </Container>
  );
};

export default TopBar;
