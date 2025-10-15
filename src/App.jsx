import { Home } from './views/Home/Home';
import { Menu } from './views/Menu/Menu';
import { Order } from './views/Order/Order';
import MenuItemDetail from './components/MenuItemDetail/MenuItemDetail';
import Cart from './views/Cart/Cart';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

function PageWrapper({ children, locationKey }) {
  // we use a keyed div so React will remount the page on route change,
  // allowing CSS animations on mount/unmount.
  return (
    <div className="page-wrapper" key={locationKey}>
      {children}
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageWrapper locationKey={location.pathname}><Home /></PageWrapper>} />
  <Route path="/menu" element={<PageWrapper locationKey={location.pathname}><Menu /></PageWrapper>} />
    <Route path="/menu/:id" element={<PageWrapper locationKey={location.pathname}><MenuItemDetail /></PageWrapper>} />
    <Route path="/cart" element={<PageWrapper locationKey={location.pathname}><Cart /></PageWrapper>} />
    <Route path="/order" element={<PageWrapper locationKey={location.pathname}><Order /></PageWrapper>} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App
