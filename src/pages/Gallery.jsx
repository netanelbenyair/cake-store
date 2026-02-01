// יייבוא ספריות וקומפוננטים
import React, { useContext, useState, useMemo } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import cakesArr from '../data/cakes.json'
import { myContext } from '../App'

// עמוד הגלריה - הצגת כל המוצרים עם אפשרות סינון וחיפוש
const Gallery = () => {

  const {addProducts} = useContext(myContext)
  
  // מצב לטקסט החיפוש
  const [searchTerm, setSearchTerm] = useState('')
  
  // מצב לסוג הסינון (all, ingredient, price, calories)
  const [filterType, setFilterType] = useState('all')
  
  // מצב לערך הסינון הנבחר
  const [filterValue, setFilterValue] = useState('')

  // קבלת ערכים ייחודיים לכל סוג סינון - רכיבים
  const uniqueIngredients = useMemo(() => {
    const allIngredients = new Set()
    cakesArr.forEach(item => {
      if (item.ingredients) {
        item.ingredients.split(',').forEach(ing => {
          allIngredients.add(ing.trim())
        })
      }
    })
    return Array.from(allIngredients).sort()
  }, [])

  // קבלת ערכים ייחודיים לכל סוג סינון - מחירים
  const uniquePrices = useMemo(() => {
    return [...new Set(cakesArr.map(item => item.price))].sort((a, b) => parseFloat(a) - parseFloat(b))
  }, [])

  // קבלת ערכים ייחודיים לכל סוג סינון - קלוריות
  const uniqueCalories = useMemo(() => {
    return [...new Set(cakesArr.map(item => item.calories))].sort((a, b) => parseInt(a) - parseInt(b))
  }, [])

  // סינון המוצרים לפי חיפוש וסוג סינון
  const filteredCakes = cakesArr.filter(item => {
    // בדיקה אם המוצר מתאים לחיפוש הטקסט
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.ingredients && item.ingredients.toLowerCase().includes(searchTerm.toLowerCase()))

    if (!matchesSearch) return false

    // אם אין סינון נבחר - הצג הכל
    if (filterType === 'all') return true
    
    // סינון לפי רכיב
    if (filterType === 'ingredient') {
      return item.ingredients && item.ingredients.includes(filterValue)
    }
    
    // סינון לפי מחיר
    if (filterType === 'price') {
      return item.price === filterValue
    }
    
    // סינון לפי קלוריות
    if (filterType === 'calories') {
      return item.calories === filterValue
    }

    return true
  })

  // פונקציה לנקות את כל הסינונים
  const handleReset = () => {
    setSearchTerm('')
    setFilterType('all')
    setFilterValue('')
  }

  return (
    <div >
      {/* כותרת העמוד */}
      <Header title="Our Products" />
      
      {/* מיכל החיפוש וה-select boxes */}
      <div className='gallery-search-container'>
        <div className='search-filters-wrapper'>
          {/* שדה החיפוש הראשי */}
          <div className='search-box'>
            <input
              type="text"
              className='gallery-search-input'
              placeholder='חפש לפי שם או חומרים...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* שורת הסלקט בוקסים */}
          <div className='filters-row'>
            {/* בחירת סוג הסינון */}
            <div className='filter-group'>
              <label>סוג סינון:</label>
              <select 
                className='filter-select'
                value={filterType}
                onChange={(e) => {
                  setFilterType(e.target.value)
                  setFilterValue('')
                }}
              >
                <option value="all">הכל</option>
                <option value="ingredient">רכיב</option>
                <option value="price">מחיר</option>
                <option value="calories">קלוריות</option>
              </select>
            </div>

            {/* סלקט בוקס לבחירת רכיב */}
            {filterType === 'ingredient' && (
              <div className='filter-group'>
                <label>בחר רכיב:</label>
                <select 
                  className='filter-select'
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                >
                  <option value="">הכל</option>
                  {uniqueIngredients.map((ing, idx) => (
                    <option key={idx} value={ing}>{ing}</option>
                  ))}
                </select>
              </div>
            )}

            {/* סלקט בוקס לבחירת מחיר */}
            {filterType === 'price' && (
              <div className='filter-group'>
                <label>בחר מחיר:</label>
                <select 
                  className='filter-select'
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                >
                  <option value="">הכל</option>
                  {uniquePrices.map((price, idx) => (
                    <option key={idx} value={price}>₪{price}</option>
                  ))}
                </select>
              </div>
            )}

            {/* סלקט בוקס לבחירת קלוריות */}
            {filterType === 'calories' && (
              <div className='filter-group'>
                <label>בחר קלוריות:</label>
                <select 
                  className='filter-select'
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                >
                  <option value="">הכל</option>
                  {uniqueCalories.map((cal, idx) => (
                    <option key={idx} value={cal}>{cal} cal</option>
                  ))}
                </select>
              </div>
            )}

            {/* כפתור ניקיון הסינונים */}
            {(filterType !== 'all' || searchTerm) && (
              <button className='reset-filters-btn' onClick={handleReset}>
                <i className="fas fa-times"></i> נקה סינונים
              </button>
            )}
          </div>

          {/* הצגת מספר התוצאות */}
          <div className='results-count'>
            נמצאו {filteredCakes.length} מוצרים
          </div>
        </div>
      </div>

      {/* תצוגת הכרטיסיות */}
      <main className='mainGallery'>
        {
          filteredCakes.length > 0 ? (
            // הצגת כל המוצרים שעונים לסינון
            filteredCakes.map((item,index)=>{
              return <Card key={index} name={item.name} pic={item.pic} price={item.price} calories={item.calories} ingredients={item.ingredients} func ={()=>addProducts(item)} />
            })
          ) : (
            // הודעה כאשר אין תוצאות
            <p className='no-results'>לא נמצאו תוצאות לחיפושך</p>
          )
        }
      </main>
      
      {/* רכז תחתון */}
      <Footer />
    </div>
  )
}

export default Gallery
