// יייבוא ספריות וקומפוננטים
import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { myContext } from '../App'
import TableRow from '../components/TableRow'

// עמוד עגלת הקניות - הצגת כל המוצרים בעגלה עם סה״כ
const ShoppingCart = () => {
  // אחזור המוצרים מה-context
  const {products} = useContext(myContext)
  
  return (
    <div className="cart-page">
      {/* כותרת העמוד */}
      <Header title="Shopping Cart" />
      
      {/* תוכן ראשי */}
      <main className="cart-container">
        {/* כותרת טבלה */}
        <h2 className="cart-title">Your Cart</h2>
        
        {/* טבלת המוצרים */}
        <table className="cart-table">
          {/* ראשי הטבלה */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Count</th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
          </thead>
         
          {/* גוף הטבלה - תצוגת כל מוצר בשורה */}
          <tbody>
            {products.map((item, index) => {
              return (
                <TableRow
                  key={index}
                  index={index}
                  name={item.name}
                  price={item.price}
                  count={item.count}
                  total={item.price * item.count}
                />
              );
            })}

            {/* שורת סה״כ - סכום כל העגלה */}
            <tr className="cart-total-row">
              <td colSpan="3" style={{textAlign: 'right', fontWeight: 'bold'}}>Total:</td>
              <td style={{fontWeight: 'bold'}}>{products.reduce((sum, item) => sum + (item.price * item.count), 0).toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </main>
      
      {/* רכז תחתון */}
      <Footer />
    </div>
  )
}

export default ShoppingCart