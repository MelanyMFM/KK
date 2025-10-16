import { useRef, useEffect } from 'react'
import './accordionItem.css'

export default function AccordionItem({ item, isOpen, onToggle }){
    const contentRef = useRef(null)

    useEffect(()=>{
        const el = contentRef.current
        if(!el) return
        if(isOpen){
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
