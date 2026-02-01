// יייבוא ספריות וקומפוננטים
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import { createContext, useState } from 'react'
import ShoppingCart from './pages/ShoppingCart'
import Contact from './pages/Contact'
import WhatsappButton from './components/WhatsappButton'

// יצירת Context לשיתוף מצב בין קומפוננטים
export const myContext = createContext()

function App() {
  // מצב המאגר של מוצרים בעגלת הקניות
  const [products , setProducts] = useState([])

  // פונקציה להוספת מוצר לעגלה או הגברת הכמות אם הוא כבר קיים
  const addProducts = (product) => {
    setProducts(prev => {
      const existingIndex = prev.findIndex(p => p.name === product.name);

      // אם המוצר כבר קיים - הגבר את הכמות
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].count += 1;
        return updated;
      }

      // אם זה מוצר חדש - הוסף אותו עם כמות 1
      return [...prev, { ...product, count: 1 }];
    });
  };

  // פונקציה למחיקת מוצר מהעגלה לפי אינדקס
  const deleteProduct = (index) => {
    setProducts(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* ניתוב בין עמודים */}
      <HashRouter basename="/cake-store">
        {/* ספק Context עם הפונקציות והמצב לכל הקומפוננטים */}
        <myContext.Provider value={{addProducts, products, deleteProduct}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shoppingCart" element={<ShoppingCart/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>

          {/* כפתור וואטסאפ צף שיופיע בכל הדפים */}
          <WhatsappButton />
        </myContext.Provider>
      </HashRouter>
    </>
  )
}

export default App
