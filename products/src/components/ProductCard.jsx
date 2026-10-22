import { Link } from 'react-router-dom'
import { formatMoney } from '../lib/money'

export function ProductCard({ product }) {
  return (
    <Link className="card" to={`/products/${product.id}`}>
      <span className="swatch" style={{ background: product.color }} />
      <span className="tag">{product.tag}</span>
      <strong>{product.name}</strong>
      <span className="price">{formatMoney(product.price)}</span>
    </Link>
  )
}
