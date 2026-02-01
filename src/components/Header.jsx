// יייבוא ספריות
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// קומפוננט כותרת - ראש העמוד עם ניווט ותפריט בורגר
const Header = (props) => {
  // מצב לטיפול בפתיחה וסגירה של תפריט הבורגר
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // פונקציה להחלפת מצב התפריט
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // פונקציה לסגירת התפריט כשלוחצים על קישור
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="main-header"> 
        {/* כותרת דינמית שמתקבלת כ-prop */}
        <h1 className="header-title">{props.title}</h1>
        
        {/* תפריט ניווט רגיל (למסך גדול) */}
        <nav className="header-nav">
          <ul className="nav-list">
            {/* קישור לעמוד הבית */}
            <li><NavLink className="link" to="/">Home</NavLink></li>
            
            {/* קישור לגלריה */}
            <li><NavLink className="link" to="/gallery">Gallery</NavLink></li>

            {/* קישור לעגלת קניות */}
            <li><NavLink className="link" to="/shoppingCart">shoppingCart</NavLink></li>

            {/* קישור לעמוד יצירת קשר */}
            <li><NavLink className="link" to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

        {/* כפתור תפריט בורגר (למסך קטן) */}
        <div className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* תפריט בורגר מנותף */}
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-list">
            {/* קישור לעמוד הבית */}
            <li><NavLink className="mobile-link" to="/" onClick={closeMenu}>Home</NavLink></li>
            
            {/* קישור לגלריה */}
            <li><NavLink className="mobile-link" to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>

            {/* קישור לעגלת קניות */}
            <li><NavLink className="mobile-link" to="/shoppingCart" onClick={closeMenu}>ShoppingCart</NavLink></li>

            {/* קישור לעמוד יצירת קשר */}
            <li><NavLink className="mobile-link" to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header