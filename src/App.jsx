import { Home } from './views/Home/Home';
import { Menu } from './views/Menu/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
 

  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
               
            </Routes>
        </Router>
  )
}

export default App
