import { PRODUCTS_URL } from '../lib/apps'
import { formatMoney } from '../lib/money'

export function OrderConfirmation({ order }) {
  return (
    <section className="confirmation">
      <h1>Order placed</h1>
      <p className="muted">
        Thanks, {order.name}. Order {order.id} is confirmed.
      </p>
      <ul className="lines">
        {order.items.map((item) => (
          <li className="line" key={item.id}>
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>{formatMoney(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <span>Total</span>
        <strong>{formatMoney(order.total)}</strong>
      </div>
      <p className="muted">Shipping to {order.address}</p>
      <a className="button" href={PRODUCTS_URL}>
        Back to products
      </a>
    </section>
  )
}
