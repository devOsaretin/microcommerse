import { useState } from 'react'

const emptyForm = { name: '', email: '', address: '' }

export function CheckoutForm({ onPlaceOrder }) {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const address = form.address.trim()
    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!name || !emailLooksValid || !address) {
      setError('Add your name, a valid email, and a shipping address.')
      return
    }

    setError('')
    onPlaceOrder({ name, email, address })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Shipping</h2>
      <label>
        Name
        <input
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={update}
        />
      </label>
      <label>
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={update}
        />
      </label>
      <label>
        Address
        <textarea
          name="address"
          rows="3"
          autoComplete="street-address"
          value={form.address}
          onChange={update}
        />
      </label>
      {error ? <p className="error">{error}</p> : null}
      <button type="submit">Place order</button>
    </form>
  )
}
