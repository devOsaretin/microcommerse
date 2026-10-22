import { HOST_URL, PRODUCTS_URL } from '../lib/apps'

export function CheckoutHeader() {
  return (
    <header className="topbar">
      <a className="brand" href={PRODUCTS_URL}>
        Microshops
      </a>
      <nav>
        <a href={HOST_URL}>Host</a>
        <a href={PRODUCTS_URL}>Products</a>
        <a href="/" aria-current="page">
          Checkout
        </a>
      </nav>
    </header>
  )
}
