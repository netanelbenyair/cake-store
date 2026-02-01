// יייבוא ספריות
import React from 'react'

// קומפוננט כרטיס - הצגת פרטי מוצר בודד
const Card = (props) => {
  return (
    <div className="cake-card">
        {/* מיכל תמונה */}
        <div className="card-image-container">
            <img src={props.pic} alt="Cake" className="card-image" />
        </div>
        
        {/* תוכן הכרטיס - פרטי המוצר */}
        <div className="card-content">
            {/* שם המוצר */}
            <h3 className="cake-name">{props.name}</h3>
            
            {/* מחיר */}
            <div className="cake-info">
                <span className="info-label">Price: </span> <span>{props.price}</span>
            </div>
            
            {/* חומרים */}
            <div className="cake-info">
                <span className="info-label">Ingredients:</span> <span>{props.ingredients}</span>
            </div>
            
            {/* קלוריות */}
            <div className="cake-info">
                <span className="info-label">Calories:</span> <span>{props.calories}</span>
            </div>
            
            {/* כפתור הוספה לעגלה */}
            <button onClick={props.func} className="add-to-cart-btn">Add to cart</button>
        </div>
    </div>
  )
}

export default Card



