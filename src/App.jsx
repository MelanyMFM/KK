import { Home } from './views/Home/Home';
import { Menu } from './views/Menu/Menu';
import { Order } from './views/Order/Order';
import MenuItemDetail from './views/MenuItemDetail/MenuItemDetail';
import Cart from './views/Cart/Cart';
import { FQuestions } from './views/FQuestions/FQuestions';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

function PageWrapper({ children, locationKey }) {
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
      <Route path="/fquestions" element={<PageWrapper locationKey={location.pathname}><FQuestions /></PageWrapper>} />
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
