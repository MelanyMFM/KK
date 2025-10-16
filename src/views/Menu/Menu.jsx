import './menu.css'
import { Header } from '../../components/Header/Header';
import MenuItem from '../../components/MenuItem/MenuItem'
import menuMocks from '../../data/menuMocks'
import carrito from '../../assets/Carrito.png'
import { Link } from 'react-router-dom';
import alga1 from "../../assets/alga1.png"
import alga2 from "../../assets/alga2.png"
import burbujas from "../../assets/burbujas.png"

export function Menu(){

    return (
        <>
            <Header />
            <div className='page-wrap'>
                <div className="fondo-decoracion">
                    <img className="alga1" src={alga1} alt="Alga" draggable="false" style={{ width: "12rem", position: "absolute", top: "-2rem", left: "2rem" }}/>
                    <img className="alga2" src={alga2} alt="Alga" draggable="false" style={{ width: "12rem", position: "absolute", bottom: "0rem", right: "2rem" }}/>
                    <img className="burbujas" src={burbujas} alt="Burbujas" draggable="false" style={{ width: "10rem", position: "absolute", top: "70%", left: "0" }}/>
                </div>

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

            </div>
           
        </>
    );
}