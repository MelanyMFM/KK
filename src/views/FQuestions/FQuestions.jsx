import "./fquestions.css"
import { Header } from "../../components/Header/Header"
import { useState, useRef, useEffect } from 'react'
import faqMocks from '../../data/faqMocks'

function AccordionItem({ item, isOpen, onToggle }){
    const contentRef = useRef(null)

    useEffect(()=>{
        const el = contentRef.current
        if(!el) return
        if(isOpen){
            // set to scrollHeight so CSS transition animates max-height
            el.style.maxHeight = el.scrollHeight + 'px'
            el.style.paddingTop = '0.75rem'
            el.style.paddingBottom = '0.75rem'
            el.style.opacity = '1'
        } else {
            el.style.maxHeight = '0px'
            el.style.paddingTop = '0'
            el.style.paddingBottom = '0'
            el.style.opacity = '0'
        }
    }, [isOpen])

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" aria-expanded={isOpen} onClick={onToggle}>
                <span className="q-text">{item.question}</span>
                <span className="q-toggle">{isOpen ? '-' : '+'}</span>
            </button>
            <div ref={contentRef} className="faq-answer" role="region" aria-hidden={!isOpen}>
                <div className="faq-answer-inner">{item.answer}</div>
            </div>
        </div>
    )
}

export function FQuestions() {
    const [openId, setOpenId] = useState(null)

    const toggle = (id) => setOpenId(prev => prev === id ? null : id)

    return(
        <>
            <Header/>
            <div className="page fondo-container fquestions-page">
                <h1>Preguntas frecuentes</h1>
                <div className="faq-list">
                    {faqMocks.map(f => (
                        <AccordionItem key={f.id} item={f} isOpen={openId === f.id} onToggle={() => toggle(f.id)} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default FQuestions