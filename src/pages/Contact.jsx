// יייבוא ספריות וקומפוננטים
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

// עמוד יצירת קשר - הצגת מידע הקשר, מפה וטופס
const Contact = () => {
  return (
    <div className="contact-page">
      {/* כותרת העמוד */}
      <Header title="Contact Us" />

      {/* מיכל העמוד */}
      <div className="contact-container">
        
        {/* סעיף המידע בצד שמאל */}
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          
          {/* פרטי הקשר */}
          <div className="info-item">
            <h3>📍 Location</h3>
            <p>123 Sweet Street, Tel Aviv, Israel</p>
          </div>

          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>+972 50-123-4567</p>
          </div>

          <div className="info-item">
            <h3>📧 Email</h3>
            <p>hello@cookieshop.com</p>
          </div>

          <div className="info-item">
            <h3>⏰ Hours</h3>
            <p>Sunday - Thursday: 9am - 9pm</p>
            <p>Friday: 9am - 8pm</p>
            <p>Saturday: 10am - 8pm</p>
          </div>

          {/* קישור WhatsApp */}
          <a href="https://wa.me/972501234567?text=Hello%20Cookie%20Shop!" 
             className="whatsapp-btn" 
             target="_blank" 
             rel="noopener noreferrer">
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* סעיף הטופס בצד ימין */}
        <div className="contact-form-section">
          <ContactForm />
        </div>
      </div>

      {/* סעיף המפה */}
      <div className="contact-map-section">
        <h2>Find Us Here</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.0819340637754!2d34.76831791531!3d32.08959587102779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c98f9e5e5e5%3A0x1234567890!2sTel%20Aviv%2C%20Israel!5e0!3m2!1sen!2sus!4v1234567890" 
          width="100%" 
          height="500" 
          style={{ border: 0, borderRadius: '15px' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      {/* כותרת תחתונה */}
      <Footer />
    </div>
  )
}

export default Contact
