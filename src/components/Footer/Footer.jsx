import { Link } from "react-router-dom";
import "./footer.css"

export function Footer(){

    return(
        <div>
            <div className="footer-links">
                <Link to="fquestions" className="footer-links-link">Preguntas Frecuentes</Link>
                <p className="footer-links-link">Sobre Nosotros</p>
            </div>
            <p className="footer-message">
                Marca registrada y derechos de 2025 Crustáceo Cascarudo® Corporation. 
                Todos los derechos reservados.
            </p>
        </div>
    );
}