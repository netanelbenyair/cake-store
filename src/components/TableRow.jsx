// יייבוא ספריות
import React, { useContext } from 'react'
import { myContext } from '../App'

// קומפוננט שורה בטבלה - הצגת מוצר יחיד בעגלה
const TableRow = (props) => {
    // אחזור הפונקציה למחיקת מוצר
    const { deleteProduct } = useContext(myContext)

    return (
        <tr>
            {/* שם המוצר */}
            <td>{props.name}</td>
            
            {/* מחיר למוצר */}
            <td>{props.price}</td>
            
            {/* כמות המוצרים */}
            <td>
                <input
                    type="number"
                    className="count-input"
                    value={props.count}
                    readOnly
                />
            </td>
            
            {/* סה״כ עבור מוצר זה (מחיר x כמות) */}
            <td>{props.total.toFixed(2)}</td>
            
            {/* כפתור מחיקה */}
            <td>
                <button
                    className="del-btn"
                    onClick={() => deleteProduct(props.index)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default TableRow
