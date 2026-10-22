import { CHECKOUT_URL } from './apps'

const STORAGE_KEY = 'microshops.cart'

export function readCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function writeCart(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function addItem(items, product) {
  const existing = items.find((item) => item.id === product.id)
  if (!existing) {
    return [
      ...items,
      { id: product.id, name: product.name, price: product.price, quantity: 1 },
    ]
  }

  return items.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
  )
}

export function checkoutHref(items) {
  if (!items.length) return CHECKOUT_URL
  return `${CHECKOUT_URL}/?cart=${encodeURIComponent(JSON.stringify(items))}`
}
