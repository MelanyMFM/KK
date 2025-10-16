import "./fquestions.css"
import { Header } from "../../components/Header/Header"
import { useState } from 'react'
import faqMocks from '../../data/faqMocks'
import AccordionItem from '../../components/AccordionItem/AccordionItem'
import alga1 from "../../assets/alga1.png"
import alga2 from "../../assets/alga2.png"
import burbujas from "../../assets/burbujas.png"


export function FQuestions() {
    const [openId, setOpenId] = useState(null)

    const toggle = (id) => setOpenId(prev => prev === id ? null : id)

    return(
        <>
            <Header/>
            <div className="page-wrap">
                <div className="fondo-decoracion">
                    <img className="alga1" src={alga1} alt="Alga" draggable="false" style={{ width: "12rem", position: "absolute", top: "-2rem", left: "2rem" }}/>
                    <img className="alga2" src={alga2} alt="Alga" draggable="false" style={{ width: "12rem", position: "absolute", bottom: "0rem", right: "2rem" }}/>
                    <img className="burbujas" src={burbujas} alt="Burbujas" draggable="false" style={{ width: "10rem", position: "absolute", top: "70%", left: "0" }}/>
                </div>

                 <div className="page fondo-container fquestions-page">
                <p className="title1">FREQUENT QUESTIONS</p>
                <div className="faq-list">
                    {faqMocks.map(f => (
                        <AccordionItem key={f.id} item={f} isOpen={openId === f.id} onToggle={() => toggle(f.id)} />
                    ))}
                </div>
            </div>
            </div>
           
        </>
    )
}

export default FQuestions