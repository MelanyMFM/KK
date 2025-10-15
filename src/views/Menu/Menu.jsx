import './menu.css'
import { Header } from '../../components/Header/Header';
import MenuItem from '../../components/MenuItem/MenuItem'
import menuMocks from '../../data/menuMocks'
import carrito from '../../assets/Carrito.png'
import { Link } from 'react-router-dom';

export function Menu(){

    return (
        <>
            <Header />
            <div className="page fondo-container menu-page">
                <Link to="/cart">
                    <img className='carrito' src={carrito} alt="Carrito" />
                </Link>
                <h1>Menu</h1>
                <div className="menu-list">
                    {menuMocks.map(item => (
                        <MenuItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}