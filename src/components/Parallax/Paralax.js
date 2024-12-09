import React from 'react';
import { Parallax } from 'react-parallax';
import './Parallax.css'; // اضافة ملف CSS مخصص 

const ParallaxImage = () => {
  return (
    <div className='all-para'>
      {/* المحتوى العادي قبل البرالاكس */}
      <div className="content-section">
        <h1 className="title">تسوق الان مع اقوي العروض والخصومات </h1>
        <p className="subtitle">اكتشف أحدث العروض الحصرية لدينا!</p>
      </div>

      {/* البرالاكس بالصورة الخلفية */}
      <Parallax bgImage="https://m.media-amazon.com/images/I/815VbplqFtL._AC_UL480_FMwebp_QL65_.jpg" strength={500}>
        <div className="parallax-content">
          <h1 className="parallax-title">تسوق الآن</h1>
          <p className="parallax-description">عروض وخصومات لا تُفوت!</p>
          <a href="#shop" className="cta-button">تسوق الآن</a>
        </div>
      </Parallax>

      {/* المحتوى العادي بعد البرالاكس */}
     
    </div>
  );
}

export default ParallaxImage;
