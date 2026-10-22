import { useEffect, useState } from 'react'
import { PRODUCTS_URL } from '../lib/apps'
import {
  cartTotal,
  changeQuantity,
  parseCartParam,
  readCart,
  writeCart,
} from '../lib/cart'
import { CartSummary } from './CartSummary'
import { CheckoutForm } from './CheckoutForm'
import { CheckoutHeader } from './CheckoutHeader'
import { OrderConfirmation } from './OrderConfirmation'

function cartFromLocation() {
  const params = new URLSearchParams(window.location.search)
  const encoded = params.get('cart')
  if (!encoded) return readCart()

  return parseCartParam(encoded) ?? readCart()
}

export function CheckoutPage() {
  const [items, setItems] = useState(cartFromLocation)
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const url = new URL(window.location.href)
    const encoded = url.searchParams.get('cart')
    if (!encoded) return

    const incoming = parseCartParam(encoded)
    if (incoming) writeCart(incoming)

    url.searchParams.delete('cart')
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  }, [])

  function updateQuantity(id, quantity) {
    const next = changeQuantity(items, id, quantity)
    writeCart(next)
    setItems(next)
  }

  function placeOrder(customer) {
    if (!items.length) return

    setOrder({
      id: `MS-${Date.now().toString().slice(-6)}`,
      ...customer,
      items,
      total: cartTotal(items),
    })
    writeCart([])
    setItems([])
  }

  return (
    <>
      <CheckoutHeader />
      <main className="page">
        {order ? (
          <OrderConfirmation order={order} />
        ) : items.length === 0 ? (
          <section>
            <h1>Checkout</h1>
            <p className="muted">Your cart is empty.</p>
            <a className="button" href={PRODUCTS_URL}>
              Browse products
            </a>
          </section>
        ) : (
          <>
            <h1>Checkout</h1>
            <div className="checkout-layout">
              <CartSummary
                items={items}
                total={cartTotal(items)}
                onChangeQuantity={updateQuantity}
              />
              <CheckoutForm onPlaceOrder={placeOrder} />
            </div>
          </>
        )}
      </main>
    </>
  )
}
