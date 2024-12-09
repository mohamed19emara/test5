import React from "react";
import "./CircularCards.css"; // ملف التنسيق

const CircularCards = () => {
  // بيانات JSON
  const data = [
    {
      id: 1,
      title: "كارد 1",
      description: "هذا هو الوصف الخاص بكارد 1",
      image: "https://m.media-amazon.com/images/I/81m-AEFi-zL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 2,
      title: "كارد 2",
      description: "هذا هو الوصف الخاص بكارد 2",
      image: "https://m.media-amazon.com/images/I/813HeuUkmCL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 3,
      title: "كارد 3",
      description: "هذا هو الوصف الخاص بكارد 3",
      image: "https://m.media-amazon.com/images/I/91DrsL-DBoL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 4,
      title: "كارد 4",
      description: "هذا هو الوصف الخاص بكارد 4",
      image: "https://m.media-amazon.com/images/I/81q+e+GXvZL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 5,
      title: "كارد 5",
      description: "هذا هو الوصف الخاص بكارد 5",
      image: "https://m.media-amazon.com/images/I/71MR55RMopL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 6,
      title: "كارد 6",
      description: "هذا هو الوصف الخاص بكارد 6",
      image: "https://m.media-amazon.com/images/I/71MR55RMopL._AC_UL480_FMwebp_QL65_.jpg"
    }
  ];

  return (
    <div className="app-container">
      {/* شريط علوي */}
      <header className="topbar">
        <div className="topbar-section">
          <span className="section-name">اسم السكشن</span>
          <button className="view-all-btn">عرض الكل</button>
        </div>
      </header>

      {/* الكاردز */}
      <section className="cards-section">
        {data.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CircularCards;
