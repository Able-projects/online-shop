import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../style/footer.css'
function Footer(){
    return(
        <footer className="bg3 p-t-75 p-b-32">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
                        Categories
                    </h4>
                    <ul>
                        <li className="p-b-10">
                            <span className="stext-107 cl7 hov-cl1 trans-04">
                                Women
                            </span>
                        </li>
                        <li className="p-b-10">
                            <span className="stext-107 cl7 hov-cl1 trans-04">
                                Men
                            </span>
                        </li>
                        <li className="p-b-10">
                            <span className="stext-107 cl7 hov-cl1 trans-04">
                                Shoes
                            </span>
                        </li>
                        <li className="p-b-10">
                            <span className="stext-107 cl7 hov-cl1 trans-04">
                                Watches
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
                        Help
                    </h4>
                    <ul>
                        <li className="p-b-10">
                            <span className="stext-107 cl7 hov-cl1 trans-04">
                                Track Order
                            </span>
                        </li>
                        <li className="p-b-10">
                            <span className="stext-107 cl7 hov-cl1 trans-04">
                                Returns
                            </span>
                        </li>
                        <li className="p-b-10">
                            <span className="stext-107 cl7 hov-cl1 trans-04">
                                Shipping
                            </span>
                        </li>
                        <li className="p-b-10">
                            <span className="stext-107 cl7 hov-cl1 trans-04">
                                FAQs
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
                        GET IN TOUCH
                    </h4>
                    <p className="stext-107 cl7 size-201">
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us
                        on (+1) 96 716 6879
                    </p>
                    <div className="p-t-27">
                        <span className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                        <span className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                            <FontAwesomeIcon icon={faTelegram} />
                        </span>
                        <span className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 p-b-50">
                    <h4 className="stext-301 cl0 p-b-30">
                        Newsletter
                    </h4>
                    <form>
                        <div className="wrap-input1 w-full p-b-4">
                            <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email"
                                placeholder="email@example.com" />
                            <div className="focus-input1 trans-04"></div>
                        </div>
                        <div className="p-t-18">
                            <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="p-t-40">
                <div className="flex-c-m flex-w p-b-18">
                    <span className="m-all-1">
                        <img src="/images/xicon-pay-01.png" alt="ICON-PAY" />
                    </span>
                    <span className="m-all-1">
                        <img src="/images/xicon-pay-02.png" alt="ICON-PAY" />
                    </span>
                    <span className="m-all-1">
                        <img src="/images/xicon-pay-03.png" alt="ICON-PAY" />
                    </span>
                    <span className="m-all-1">
                        <img src="/images/xicon-pay-04.png" alt="ICON-PAY" />
                    </span>
                    <span className="m-all-1">
                        <img src="/images/xicon-pay-05.png" alt="ICON-PAY" />
                    </span>
                </div>
                <p className="stext-107 cl6 txt-center">
                    Copyright ©
                    <script>document.write(new Date().getFullYear());</script> All rights reserved | This template
                    is made with <i className="far fa-heart" aria-hidden="true"></i> by 
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer