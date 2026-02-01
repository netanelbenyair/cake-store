// יייבוא ספריות
import React, { useState } from 'react'

// קומפוננט טופס יצירת קשר - לאיסוף מידע מהלקוחות
const ContactForm = () => {
  // מצב הטופס - שמירת הנתונים שהמשתמש מזין
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  // מצב לבדיקה אם הטופס נשלח
  const [submitted, setSubmitted] = useState(false)

  // פונקציה לעדכון מצב הטופס כשהמשתמש מזין נתונים
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // פונקציה לטיפול בשליחת הטופס
  const handleSubmit = (e) => {
    // מניעת הרענון הדפדפן
    e.preventDefault()

    // בדיקה שכל השדות מלאים
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      alert('Please fill in all fields!')
      return
    }

    // הצגת הודעת הצלחה (בפרויקט אמיתי, הנתונים היו נשלחים לשרת)
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // איפוס הטופס אחרי שנייה
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="contact-form-wrapper">
      <h2>Send us a Message</h2>

      {/* הודעת הצלחה */}
      {submitted && (
        <div className="success-message">
          ✅ Thank you! We'll get back to you soon!
        </div>
      )}

      {/* טופס יצירת קשר */}
      <form onSubmit={handleSubmit} className="contact-form">
        
        {/* שדה שם */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        {/* שדה דוא״ל */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>

        {/* שדה טלפון */}
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel" 
            id="phone"
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="+972 50-123-4567"
            required
          />
        </div>

        {/* שדה נושא */}
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input 
            type="text" 
            id="subject"
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            required
          />
        </div>

        {/* שדה הודעה */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message"
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows="6"
            required
          ></textarea>
        </div>

        {/* כפתור שליחה */}
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
