import { useState, useRef, useEffect } from 'react'
import { animateCSS } from '../helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import '../style/slider.css'

function Slider(props) {
    const [index, setIndex] = useState(0)
    const h1ElemRef = useRef()
    const btnElemRef = useRef()
    const h2ElemRef = useRef()
    const slides = [
        {
            id: 0,
            textH2: 'Women Collection 2018',
            textH1: "NEW SEASON",
            image: 'url(/images/slide-1.webp)',
            h1Anim: 'fadeInUp',
            h2Anim: 'fadeInDown',
            btnAnim: 'zoomIn'
        },
        {
            id: 1,
            textH2: 'Men New-Season',
            textH1: "JACKETS & COATS",
            image: 'url(/images/slide-2.webp)',
            h1Anim: 'lightSpeedInRight',
            h2Anim: 'rollIn',
            btnAnim: 'slideInUp'
        },
        {
            id: 2,
            textH2: 'Men Collection 2018',
            textH1: "NEW ARRIVALS",
            image: 'url(/images/slide-3.webp)',
            h1Anim: 'rotateInUpRight',
            h2Anim: 'rotateInDownLeft',
            btnAnim: 'rotateIn'
        }
    ]

    useEffect(() => {
        nextSlide()
        // eslint-disable-next-line 
    }, [])

    function nextSlide(step = 0) {
        h1ElemRef.current.style.opacity = 0;
        btnElemRef.current.style.opacity = 0;
        animateCSS(h1ElemRef.current, slides[index].h1Anim, 800);
        animateCSS(btnElemRef.current, slides[index].btnAnim, 1600);
        animateCSS(h2ElemRef.current, slides[index].h2Anim);
        setTimeout(() => h1ElemRef.current.style.opacity = 1, 800);
        setTimeout(() => btnElemRef.current.style.opacity = 1, 1600);

        if (step === -1 && index > 0) {
            setIndex(index - 1)
            return
        }
        if (step === 1 && index < slides.length - 1) {
            setIndex(index + 1)
            return
        }
        if (index <= 0) {
            setIndex(slides.length - 1)
        }
        if (index >= slides.length - 1) {
            setIndex(0)
        }
    }

    return (
        <section className="slider-block" style={{ backgroundImage: slides[index]?.image }}>
            <FontAwesomeIcon className="arrow" icon={faCaretLeft} onClick={() => nextSlide(-1)} />
            {/* <i className="fa-solid fa-caret-left" onClick={() => nextSlide(-1)}>-</i> */}
            <div className="slider-text-block">
                <h2 ref={h2ElemRef}>{slides[index]?.textH2}</h2>
                <h1 ref={h1ElemRef}>{slides[index]?.textH1}</h1>
                <button ref={btnElemRef}>SHOP NOW</button>
            </div>
            <FontAwesomeIcon className="arrow" icon={faCaretRight} onClick={() => nextSlide(1)} />
            {/* <i className="fa-solid fa-caret-right" onClick={() => nextSlide(1)}>+</i> */}
        </section>
    )
}

export default Slider