import '../style/products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const ProductCard = (props) => {
    const { info } = props
    const [iconColor, setIconColor] = useState('grey')
    return (
        <div className="product-card">
            <div className="product-card-img">
                <img
                    src={info.thumbnail} alt='product' />
                <button onClick={props.setOpenModal}>Quick view</button>
            </div>
            <div className="product-card-text">
                <div>
                    <p className="product-title">{info.title}</p>
                    <FontAwesomeIcon
                        icon={faHeart}
                        onClick={() => { iconColor === 'grey' ? setIconColor('blue') : setIconColor('grey') }}
                        color={iconColor}
                    />
                </div>
                <p className="product-price">${info.price}</p>
            </div>
        </div>
    )
}

export default ProductCard