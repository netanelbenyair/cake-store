// יייבוא קומפוננטים
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// עמוד הבית - בחירת הפרויקט
const Home = () => {
  return (
    <div className="home-page">
        {/* כותרת העמוד */}
        <Header title="🍪 Cookie Shop 🍪"/>
        
        {/* תוכן ראשי */}
        <main className="main-content home-main">
            {/* בנר ברוכים הבאים */}
            <div className="welcome-banner">
              <h2>ברוכים הבאים לחנות העוגיות שלנו!</h2>
              <p className="banner-subtitle">עוגיות טרוטות ועוגות אפויות בעבודת יד</p>
            </div>
            
            {/* כרטיסיות עם יתרונות המוצר */}
            <div className="features-container">
              <div className="feature-card">
                <h3>🎂 איכות עולה</h3>
                <p>כל עוגיה נאפית בעצמנו עם חומרים הטובים ביותר</p>
              </div>
              <div className="feature-card">
                <h3>🚚 משלוח מהיר</h3>
                <p>משלוח חינם לעיר | משלוח לכל הארץ</p>
              </div>
              <div className="feature-card">
                <h3>😋 טעם משגע</h3>
                <p>תערובות ייחודיות שלא תמצאו בשום מקום אחר</p>
              </div>
            </div>

            {/* תיאור חנות */}
            <p className="description-text">ברוכים הבאים לחנות העוגיות המובחרת שלנו! אנחנו מתמחים באפיית עוגיות טרוטות עם מרכיבים טריים ובעלי איכות גבוהה. כל עוגיה נבחרת בקפידה כדי להבטיח טעם ועוצמה אולטימטיביים. מחנות משק לעוגיות עם שוקולד חם ועד לדברים יוצאי דופן, יש לנו משהו לכולם. הנא בטעמים המפתיעים שלנו היום וגלה מדוע אנחנו הבחירה המהופכת בעיר!</p>
        </main>
        
        {/* רכז תחתון */}
        <Footer/>
    </div>
  )
}

export default Home
