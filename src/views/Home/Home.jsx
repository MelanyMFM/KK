import "./home.css"
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import spongebob from "../../assets/spongebob.png"
import { Link } from "react-router-dom";

export function Home() {



return (
    <div className="home-container">
            <Header/>
            <p className="home-title">THE KRUSTY KRAB</p>
            <div className="home-center">
                    <Link to="/menu" className="home-boton">MENU</Link>
                    <img className="spongebob" src={spongebob} alt="Spongebob" draggable="false" style={{ width: "18rem" }}/>
                    <Link to="/order" className="home-boton">ORDER</Link>
            </div>
            <Footer/>
    </div>
    );
}