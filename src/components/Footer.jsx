// יייבוא ספריות
import React from 'react'

// קומפוננט רכז - רגל העמוד עם קישורים לרשתות חברתיות
const Footer = () => {
  return (
    <div className="main-footer">
      {/* מיכל אייקונים של רשתות חברתיות */}
      <div className="social-icons">
        {/* קישור פייסבוק */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        
        {/* קישור אינסטגרם */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        
        {/* קישור TikTok */}
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="TikTok">
          <i className="fab fa-tiktok"></i>
        </a>
        
        {/* קישור Threads */}
        <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer" className="social-icon" title="Threads">
          <i className="fab fa-threads"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
