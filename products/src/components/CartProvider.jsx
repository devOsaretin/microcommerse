import { useMemo, useState } from 'react'
import { addItem, readCart, writeCart } from '../lib/cart'
import { CartContext } from '../lib/cart-context'

export function CartProvider({ children }) {
  const [items, setItems] = useState(readCart)

  const value = useMemo(() => {
    const count = items.reduce((total, item) => total + item.quantity, 0)

    return {
      items,
      count,
      add(product) {
        const next = addItem(items, product)
        writeCart(next)
        setItems(next)
      },
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
