import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './components/CartProvider'
import { ProductDetail } from './components/ProductDetail'
import { ProductList } from './components/ProductList'
import './App.css'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
