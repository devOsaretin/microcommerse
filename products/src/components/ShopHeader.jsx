import { Link } from 'react-router-dom'
import { HOST_URL } from '../lib/apps'
import { checkoutHref } from '../lib/cart'
import { useCart } from '../lib/useCart'

export function ShopHeader() {
  const { items, count } = useCart()

  return (
    <header className="topbar">
      <Link className="brand" to="/">
        Microshops
      </Link>
      <nav>
        <a href={HOST_URL}>Host</a>
        <Link to="/">Products</Link>
        <a href={checkoutHref(items)}>Checkout{count ? ` (${count})` : ''}</a>
      </nav>
    </header>
  )
}
