import { useParams, useLocation, Link, useNavigate } from 'react-router-dom'
import menuMocks from '../../data/menuMocks'


export function MenuItemDetail(){
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const itemFromState = location.state?.item
  const item = itemFromState || menuMocks.find(m => m.id === id)

  if(!item) return (
    <div className="page fondo-container">
      <p>Item not found</p>
      <Link to="/menu">Back to menu</Link>
    </div>
  )

  const addToCart = () => {
    try{
      const raw = localStorage.getItem('kk_cart')
      const cart = raw ? JSON.parse(raw) : []
      const existing = cart.find(c => c.id === item.id)
      if(existing){
        existing.qty = (existing.qty || 1) + 1
      } else {
        cart.push({ id: item.id, name: item.name, price: item.price, qty: 1 })
      }
      localStorage.setItem('kk_cart', JSON.stringify(cart))
      // navigate to cart view
      navigate('/cart')
    } catch(e){
      console.error('Error adding to cart', e)
    }
  }

  // check if already in cart
  const inCart = (() => {
    try{
      const raw = localStorage.getItem('kk_cart')
      const cart = raw ? JSON.parse(raw) : []
      return cart.some(c => c.id === item.id)
    } catch(e){
      return false
    }
  })()

  return (
    <div className="page fondo-container menu-detail">
      <Link to="/menu" className="back-link">← Back</Link>
      <div className="menu-detail-card">
        <img src={item.image || '/src/assets/kk_icon.png'} alt={item.name} />
        <div className="menu-detail-meta">
          <h2>{item.name}</h2>
          <p className="price">${item.price.toFixed(2)}</p>
          <p className="desc">{item.description}</p>
          <div>
            {inCart ? (
              <button className="view-cart" onClick={()=> navigate('/cart')}>Ver carrito</button>
            ) : (
              <button className="add-to-cart" onClick={addToCart}>Agregar al carrito</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItemDetail
