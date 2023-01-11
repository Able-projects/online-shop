import '../style/wrap-header-cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { productActions } from '../store/actions'
const BasketModal = (props) => {
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        productActions.getBasketList(total,setTotal,setData)
        // eslint-disable-next-line
    }, [props.openBasketModal])

    return (
        <div className={`wrap-header-cart js-panel-cart ${props.openBasketModal ? 'show-header-cart' : ''}`}>
            <div className="s-full js-hide-cart"></div>
            <div className="header-cart flex-col-l p-l-65 p-r-25">
                <div className="header-cart-title flex-w flex-sb-m p-b-8">
                    <span className="mtext-103 cl2">
                        Your Cart
                    </span>
                    <div onClick={props.close} className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div className="header-cart-content flex-w js-pscroll ps">
                    <ul className="header-cart-wrapitem w-full">
                        {
                            data.length ? data?.map(elem => (
                                <li key={elem.id} className="header-cart-item flex-w flex-t m-b-12">
                                    <div className="header-cart-item-img" onClick={() => productActions.deleteProduct(elem.id,data,setData,setTotal)}>
                                        <img src={elem.thumbnail} alt="IMG"
                                        />
                                    </div>
                                    <div className="header-cart-item-txt p-t-8">
                                        <span className="header-cart-item-name">
                                            {elem.title}
                                        </span>
                                        <span className="header-cart-item-info">
                                            {elem.size}, {elem.color}
                                        </span>
                                        <span className="header-cart-item-info">
                                            {elem.quantity} x $ {elem.price}
                                        </span>
                                    </div>
                                </li>
                            )) : 'Basket is empty'
                        }
                    </ul>
                    <div className="w-full">
                        <div className="header-cart-total w-full p-tb-40">
                            Total: ${total}
                        </div>
                        <div className="header-cart-buttons flex-w w-full">
                            <span onClick={() => productActions.deleteAllProduct(data,setData,setTotal)}
                                className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                Clear Cart
                            </span>
                            <a href="shoping-cart.html"
                                className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                Check Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketModal