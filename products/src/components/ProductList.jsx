import { useEffect } from 'react'
import { products } from '../data/products'
import { ProductCard } from './ProductCard'
import { ShopHeader } from './ShopHeader'

export function ProductList() {
  useEffect(() => {
    document.title = 'Products'
  }, [])

  return (
    <>
      <ShopHeader />
      <main className="page">
        <h1>Products</h1>
        <p className="muted">A small set of goods for the house.</p>
        <ul className="grid">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
