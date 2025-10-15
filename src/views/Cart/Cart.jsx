import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './cart.css'

export default function Cart(){
  const [items, setItems] = useState([])

  useEffect(()=>{
    const raw = localStorage.getItem('kk_cart')
    setItems(raw ? JSON.parse(raw) : [])
  }, [])

  const removeItem = (idx) => {
    const next = items.slice()
    next.splice(idx,1)
    setItems(next)
    localStorage.setItem('kk_cart', JSON.stringify(next))
  }

  const changeQty = (idx, delta) => {
    const next = items.map((it, i) => ({ ...it }))
    next[idx].qty = (next[idx].qty || 1) + delta
    if(next[idx].qty <= 0){
      next.splice(idx, 1)
    }
    setItems(next)
    localStorage.setItem('kk_cart', JSON.stringify(next))
  }

  const total = items.reduce((s,i)=> s + (i.price * (i.qty || 1)), 0)

  return (
    <div className="page fondo-container cart-page">
      <h1>Carrito</h1>
      {items.length === 0 ? (
        <div>
          <p>El carrito está vacío.</p>
          <Link to="/menu">Ir al menú</Link>
        </div>
      ) : (
        <div>
          <ul className="cart-list">
            {items.map((it, idx) => (
              <li key={idx} className="cart-item">
                <div>
                  <strong>{it.name}</strong>
                  <p>${it.price.toFixed(2)} x {it.qty || 1}</p>
                </div>
                <div className="cart-controls">
                  <button onClick={()=> changeQty(idx, -1)}>-</button>
                  <span className="qty">{it.qty || 1}</span>
                  <button onClick={()=> changeQty(idx, +1)}>+</button>
                  <button onClick={()=> removeItem(idx)} style={{marginLeft: '0.5rem'}}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ${total.toFixed(2)}</p>
          <Link to="/order" className="checkout">Ir a ordenar</Link>
        </div>
      )}
    </div>
  )
}
