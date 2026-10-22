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

export function parseCartParam(encoded) {
  try {
    const value = JSON.parse(encoded)
    if (!Array.isArray(value)) return null

    return value
      .filter(
        (item) =>
          item &&
          item.id &&
          item.name &&
          Number.isFinite(Number(item.price)) &&
          Number(item.quantity) > 0,
      )
      .map((item) => ({
        id: String(item.id),
        name: String(item.name),
        price: Number(item.price),
        quantity: Number(item.quantity),
      }))
  } catch {
    return null
  }
}

export function changeQuantity(items, id, quantity) {
  if (quantity < 1) return items.filter((item) => item.id !== id)
  return items.map((item) => (item.id === id ? { ...item, quantity } : item))
}

export function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}
