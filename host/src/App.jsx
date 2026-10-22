import { CHECKOUT_URL, PRODUCTS_URL } from './lib/apps'
import './App.css'

export default function App() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="/">
          Microshops
        </a>
        <nav>
          <a href="/" aria-current="page">
            Host
          </a>
          <a href={PRODUCTS_URL}>Products</a>
          <a href={CHECKOUT_URL}>Checkout</a>
        </nav>
      </header>
      <main className="page">
        <p className="tag">Host</p>
        <h1>Microshops</h1>
        <p className="muted">
          Products and checkout run as their own apps. This host is the front door until they are loaded here.
        </p>
        <div className="choices">
          <a className="button" href={PRODUCTS_URL}>
            Browse products
          </a>
          <a className="button secondary" href={CHECKOUT_URL}>
            Go to checkout
          </a>
        </div>
      </main>
    </>
  )
}
