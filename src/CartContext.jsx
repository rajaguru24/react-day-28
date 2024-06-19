import React, { createContext, useState } from 'react'


export const qtyContext = createContext()

function CartContext({children}) {

    const [cartItems, setCartItems] = useState([])

  return (
    <qtyContext.Provider value={{cartItems, setCartItems}}> 
        {children}
    </qtyContext.Provider>
  )
}

export default CartContext