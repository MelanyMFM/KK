import icon from '../../assets/kk_icon.png';
import { Link } from 'react-router-dom';
import './header.css';

export function Header() {
  return (
    <div className='header-container'>
        <Link to="/" className='header-text'>Inicio</Link>
        <Link to="/">
            <img src={icon} alt="Logo" draggable="false" style={{ width: '6.2rem' }}/>
        </Link>
        <Link to="/menu" className='header-text'>Menu</Link>
    </div>
  );
}