import { formatMoney } from '../lib/money'

export function CartSummary({ items, total, onChangeQuantity }) {
  return (
    <section>
      <h2>Your cart</h2>
      <ul className="lines">
        {items.map((item) => (
          <li className="line" key={item.id}>
            <div>
              <strong>{item.name}</strong>
              <div className="muted">{formatMoney(item.price)}</div>
            </div>
            <div className="line-end">
              <div className="qty">
                <button
                  type="button"
                  aria-label={`Decrease ${item.name}`}
                  onClick={() => onChangeQuantity(item.id, item.quantity - 1)}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  aria-label={`Increase ${item.name}`}
                  onClick={() => onChangeQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <span className="price">{formatMoney(item.price * item.quantity)}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <span>Total</span>
        <strong>{formatMoney(total)}</strong>
      </div>
    </section>
  )
}
