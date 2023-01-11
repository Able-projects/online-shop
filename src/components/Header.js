import '../style/header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faSearch, faUser, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
import { userActions } from '../store/actions'
import { useSelector } from 'react-redux';
function Header(props) {
    const headerRef = useRef()
    const { userInfo } = useSelector(state => state.user) 
    if (props.isHome) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                headerRef.current?.classList.add('fix-header');
            } else {
                headerRef.current?.classList.remove('fix-header');
            }
        })
    }
    useEffect(() => {
        if (!props.isHome) {
            headerRef.current?.classList.add('fix-header');
        }
        // eslint-disable-next-line
    }, [])
    
    return (
        <header ref={headerRef} className="main-block__header header">
            <div className="header-logo">
                <img src="/images/download.webp" alt='logo' />
            </div>
            <div className="header-menu menu">
                <Link to='/' className="menu__link">Home</Link>
                <Link to='/shop' className="menu__link">Shop</Link>
                <Link to='/' className="menu__link">Features</Link>
                <Link to='/' className="menu__link">Blog</Link>
                <Link to='/about' className="menu__link">About</Link>
                <Link to='/' className="menu__link">Contact</Link>
            </div>
            <div className="header-icons" >
                <FontAwesomeIcon icon={faSearch} size='xs' />
                <FontAwesomeIcon icon={faHeart} size='xs' />
                <FontAwesomeIcon icon={faCartShopping} onClick={props.openBasketModal} size='xs' />
                {userInfo ? userInfo?.username : <FontAwesomeIcon icon={faUser} onClick={props.openAuth} size='xs' />}
                {userInfo && <FontAwesomeIcon onClick={() => userActions.logOut()} icon={faUserLock} size='xs' />}
            </div>
        </header>
    )
}

export default Header