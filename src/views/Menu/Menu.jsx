import './menu.css'
import { Header } from '../../components/Header/Header';
import MenuItem from '../../components/MenuItem/MenuItem'
import menuMocks from '../../data/menuMocks'

export function Menu(){

    return (
        <>
            <Header />
            <div className="page fondo-container menu-page">
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