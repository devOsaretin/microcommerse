import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { formatMoney } from '../lib/money'
import { ShopHeader } from './ShopHeader'
import { useCart } from '../lib/useCart'

export function ProductDetail() {
  const { id } = useParams()
  const { items, add } = useCart()
  const product = products.find((item) => item.id === id)
  const inCart = items.find((item) => item.id === id)

  useEffect(() => {
    document.title = product ? product.name : 'Product not found'
  }, [product])

  if (!product) {
    return (
      <>
        <ShopHeader />
        <main className="page">
          <h1>Product not found</h1>
          <p className="muted">That item is not in the catalog.</p>
          <Link className="button" to="/">
            Back to products
          </Link>
        </main>
      </>
    )
  }

  return (
    <>
      <ShopHeader />
      <main className="page">
        <Link className="back" to="/">
          All products
        </Link>
        <div className="detail-layout">
          <div className="swatch large" style={{ background: product.color }} />
          <div>
            <p className="tag">{product.tag}</p>
            <h1>{product.name}</h1>
            <p className="price">{formatMoney(product.price)}</p>
            <p>{product.description}</p>
            <button type="button" onClick={() => add(product)}>
              Add to cart
            </button>
            {inCart ? (
              <p className="muted">{inCart.quantity} in cart</p>
            ) : null}
          </div>
        </div>
      </main>
    </>
  )
}
