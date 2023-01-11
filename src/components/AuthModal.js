import { useState } from 'react'
import { userActions } from '../store/actions'
import '../style/wrap-modal1.css'
const AuthModal = (props) => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    return (
        <div className="wrap-modal1 auth-modal js-modal1 p-t-60 p-b-20">
            <div className="overlay-modal1 js-hide-modal1"></div>
            <div className="container">
                <div className="bg0 p-t-60 p-b-30 p-lr-15-lg auth-modal-parent how-pos3-parent">
                    <button className="how-pos3 hov3 trans-04 js-hide-modal1" onClick={props.closeAuth}>
                        <img
                            src="data:image/webp;base64,UklGRoQAAABXRUJQVlA4THgAAAAvE8AEEE8w//M//wQaFq6CGKaqzAE9MMABwAAKJrVtVeJTgYV+8kWgBhKJHDsRcK8AQ+DzmAoR/VfYtg0yZnijpwCUspXwjmUJ+lM5Cm0pQMlR1qEUfWiCwjAoaChLd7g4PyVuEHRzHy3LeJAaChpqN7fqmdm9VQE="
                            alt="CLOSE" />
                    </button>
                    <div className="auth-modal-block">
                        <label htmlFor='username' className='auth-modal-label'>Email Address</label>
                        <input onChange={(e) => setusername(e.target.value)} className='auth-modal-input' type="text" id="username" placeholder="email@mail.ru" required />
                        <label htmlFor='password' className='auth-modal-label'>Password</label>
                        <input onChange={(e) => setpassword(e.target.value)}  className='auth-modal-input' type="password" id="password" placeholder="password" required />
                        <button onClick={() => userActions.loginUser(username,password, props.closeAuth)}
                            className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthModal