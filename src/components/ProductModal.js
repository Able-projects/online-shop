import '../style/wrap-modal1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faExpandAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { productActions } from '../store/actions';
const ProductModal = (props) => {
    const { selectedProduct } = props
    const images = selectedProduct?.images
    const { userInfo } = useSelector(state => state.user) 
    const [index, setIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    const sizeRef = useRef()
    function nextSlide(step = 0) {
        if (step === -1 && index > 0) {
            setIndex(index - 1)
            return
        }
        if (step === 1 && index < images.length - 1) {
            setIndex(index + 1)
            return
        }
        if (index <= 0) {
            setIndex(images.length - 1)
        }
        if (index >= images.length - 1) {
            setIndex(0)
        }
    }
  
    return (
        <div className="wrap-modal1 product-modal js-modal1 p-t-60 p-b-20">
            <div className="overlay-modal1 js-hide-modal1"></div>
            <div className="container">
                <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                    <button onClick={props.closeModal} className="how-pos3 hov3 trans-04 js-hide-modal1">
                        <img
                            src="data:image/webp;base64,UklGRoQAAABXRUJQVlA4THgAAAAvE8AEEE8w//M//wQaFq6CGKaqzAE9MMABwAAKJrVtVeJTgYV+8kWgBhKJHDsRcK8AQ+DzmAoR/VfYtg0yZnijpwCUspXwjmUJ+lM5Cm0pQMlR1qEUfWiCwjAoaChLd7g4PyVuEHRzHy3LeJAaChpqN7fqmdm9VQE="
                            alt="CLOSE" />
                    </button>
                    <div className="row">
                        <div className="col-md-6 col-lg-7 p-b-30">
                            <div className="p-l-25 p-r-30 p-lr-0-lg">
                                <div className="wrap-slick3 flex-sb flex-w">
                                    <div className="wrap-slick3-dots">
                                        <ul className="slick3-dots product-small-images" role="tablist">
                                            {images.map((img, i) => (
                                                <li className="" key={i} role="presentation" onClick={() => setIndex(i)}>
                                                    <img alt='icon'
                                                        src={img} />
                                                    <div className="slick3-dot-overlay"></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="wrap-slick3-arrows flex-sb-m flex-w">
                                        <button onClick={() => nextSlide(-1)}
                                            className="arrow-slick3 prev-slick3 slick-arrow">
                                            <FontAwesomeIcon className="arrow" icon={faCaretLeft} />
                                        </button>
                                        <button onClick={() => nextSlide(1)} className="arrow-slick3 next-slick3 slick-arrow">
                                            <FontAwesomeIcon className="arrow" icon={faCaretRight} />
                                        </button>
                                    </div>
                                    <div className="slick3 gallery-lb slick-initialized slick-slider slick-dotted">
                                        <div className="slick-list draggable">
                                            <div className="slick-track product-big-images">
                                                <div className="item-slick3 slick-slide"
                                                    data-thumb="images/product-detail-01.jpg" data-slick-index="0"
                                                    aria-hidden="true" tabIndex="-1" role="tabpanel" id="slick-slide10"
                                                    aria-describedby="slick-slide-control10">
                                                    <div className="wrap-pic-w pos-relative">
                                                        <img src={images[index]}
                                                            alt="IMG-PRODUCT" />
                                                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                            href="https://preview.colorlib.com/theme/cozastore/images/xproduct-detail-03.jpg.pagespeed.ic.-rPS2k8YRO.webp"
                                                            tabIndex="-1">
                                                            <FontAwesomeIcon className="arrow" icon={faExpandAlt} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5 p-b-30">
                            <div className="p-r-50 p-t-5 p-lr-0-lg">
                                <h4 className="product-name">
                                    {selectedProduct.title}
                                </h4>
                                <span className="product-price">
                                    ${selectedProduct.price}
                                </span>
                                <p className="product-description">
                                    {selectedProduct.description}
                                </p>

                                <div className="p-t-33">
                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-203 flex-c-m respon6">
                                            Size
                                        </div>
                                        <div className="size-204 respon6-next">
                                            <div className="rs1-select2 bor8 bg0">
                                                <select ref={sizeRef} className="js-select2 size-select" name="time">
                                                    <option>Choose an option</option>
                                                    <option>Size S</option>
                                                    <option>Size M</option>
                                                    <option>Size L</option>
                                                    <option>Size XL</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-203 flex-c-m respon6">
                                            Color
                                        </div>
                                        <div className="size-204 respon6-next">
                                            <div className="rs1-select2 bor8 bg0">
                                                <select onChange={(e) => setColor(e.target.value)} className="js-select2 color-select" name="time">
                                                    <option value={null}>Choose an option</option>
                                                    <option value='Red'>Red</option>
                                                    <option value='Blue'>Blue</option>
                                                    <option value='White'>White</option>
                                                    <option value='Grey'>Grey</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-204 flex-w flex-m respon6-next">
                                            <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                <div onClick={() => setQuantity(quantity <= 1 ? quantity : quantity - 1)}
                                                    className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                    <FontAwesomeIcon className="arrow" icon={faMinus} />
                                                </div>
                                                <input className="mtext-104 cl3 txt-center num-product" type="number"
                                                    name="num-product" value={quantity} onChange={(e) => setQuantity(e.target.value) } />
                                                <div onClick={() => setQuantity(quantity + 1)}
                                                    className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                    <FontAwesomeIcon className="arrow" icon={faPlus} />
                                                </div>
                                            </div>
                                            <button onClick={() => productActions.addToCard(sizeRef,color,selectedProduct,quantity)}
                                                className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                    <div className="flex-m bor9 p-r-10 m-r-11">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductModal