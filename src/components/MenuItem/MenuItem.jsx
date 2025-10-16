import "./menuItem.css"
import { useNavigate } from 'react-router-dom';
import placeholder from '../../assets/kk_icon.png'

export default function MenuItem({ item }){
    const navigate = useNavigate()

    const goToDetail = () => {
        navigate(`/menu/${item.id}`, { state: { item } })
    }

    return (
        <div className="menu-item" onClick={goToDetail} style={{cursor: 'pointer'}}>
            <img src={item.image || placeholder} alt={item.name} style={{width: '8rem', height: '8rem', objectFit: 'cover', borderRadius: 8}}/>
            <div className="menu-item-meta">
                <h3>{item.name}</h3>
                <p className="menu-item-price">${item.price.toFixed(2)}</p>
               
            </div>
        </div>
    )
}