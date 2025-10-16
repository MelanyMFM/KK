import "./nosotros.css"
import alga1 from "../../assets/alga1.png"
import alga2 from "../../assets/alga2.png"
import burbujas from "../../assets/burbujas.png"
import { Header } from "../../components/Header/Header";
import map from "../../assets/map.png"
import kkrab from "../../assets/kkrab.png"

export function Nosotros() {

    return(
        <div className="page">
            <Header />

            <div className="page-wrap">
                <div className="fondo-decoracion">
                    <img className="alga1" src={alga1} alt="Alga" draggable="false" 
                        style={{ width: "12rem", position: "absolute", top: "-2rem", left: "2rem" }}/>
                    <img className="alga2" src={alga2} alt="Alga" draggable="false" 
                        style={{ width: "12rem", position: "absolute", bottom: "0rem", right: "2rem" }}/>
                    <img className="burbujas" src={burbujas} alt="Burbujas" draggable="false" 
                        style={{ width: "10rem", position: "absolute", top: "70%", left: "0" }}/>
                </div>

                <div className="page fondo-container nosotros-page">
                    <p className="title1">NOSOTROS</p>

                    <div className="nosotros-info">
                        <p>
                            Founded by the incomparable <strong>Eugene H. Krabs</strong>, the Krusty Krab is 
                            more than just a restaurant—it's a landmark built on quality, value, 
                            and the freshest ingredients the sea has to offer. Since opening our 
                            nautical doors, our mission has been simple: to provide a memorable, 
                            mouthwatering meal at a price that keeps the clams in your pocket.
                            <br/><strong>We take immense pride</strong> in our legendary culinary masterpiece, 
                            the Krabby Patty. This secret-recipe sensation has captivated taste
                            buds across the ocean and remains the only item you'll ever need to
                            order. Prepared with love and unparalleled dedication by our world
                            -famous fry cook, the Krabby Patty is guaranteed to satisfy even the
                            most demanding underwater appetite.
                        </p>
                        <img className="nosotros-mapa" src={map} alt="Mapa" draggable="false" />
                    </div>
                    <div className="nosotros-address">
                        <img className="nosotros-kkrab" src={kkrab} alt="Krusty Krab" draggable="false" />
                        <div className="nosotros-address-text">
                            <p><strong>Address:</strong> 831 Bottom Feeder Lane Downtown Bikini Bottom, Pacific Ocean</p>
                            <p><strong>Hours of Operation</strong></p>
                            <p><strong>Monday - Saturday:</strong>  8:00 AM – 8:00 PM: Perfect for breakfast, lunch, and
                                early dinner. <br/>
                            <strong>Sunday:</strong> Closed, Mr. Krabs' official day for counting money and relaxing.
                            <br/><strong>Holiday:</strong>  Closed on all major holidays. Clams saved are clams earned!</p>
                        </div>
                       
                    </div>
                        
                </div>

            </div>
        </div>
    );
}