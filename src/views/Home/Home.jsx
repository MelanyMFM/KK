import "./home.css"
import { Header } from "../../components/Header/Header";
import spongebob from "../../assets/spongebob.png"
import { Link } from "react-router-dom";

export function Home() {



return (
    <div className="home-container">
            <Header/>
            <p className="home-title">THE KRUSTY KRAB</p>

            <div className="home-center">
                    <Link to="/menu">MENU</Link>
                    <img className="spongebob" src={spongebob} alt="Spongebob" style={{ width: "20rem" }}/>
                    <Link to="/order">ORDER</Link>
            </div>

    </div>);
}