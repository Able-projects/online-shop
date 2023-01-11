import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import FilterBlock from '../components/FilterBlock'
import SearchInput from '../components/SearchInput'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import BasketModal from '../components/BasketModal'
import ProductModal from '../components/ProductModal'
import AuthModal from '../components/AuthModal'
import { productActions } from '../store/actions'
import { useSelector } from 'react-redux' 
function ShopPage(props) {
   
    const [showFilter, setShowFilter] = useState(false)
    const [showSearch, setSearch] = useState(false)
    const { limit, productsList } = useSelector(state => state.productReducer)
    const [activePage, setactivePage] = useState(1)
    const [pageButtons, setPageButtons] = useState([])

    const categories = ['All products', 'Women', 'Men', 'Bags', 'Shoes', 'Watches']
    const toggleFilterBlock = () => {
        setSearch(false);
        setShowFilter(!showFilter)
    }
    const toggleSearchBlock = () => {
        setShowFilter(false);
        setSearch(!showSearch)
    }
    let skip = 0
    useEffect(() => {
        productActions.loadProductsByRange(limit,skip,setPageButtons)
        // eslint-disable-next-line 
    }, []);
    const [openBasketModal, setOpenBasketModal] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [openAuth, setOpenAuth] = useState(false)
    function changePage (page) {
        skip = productActions.loadProductsByPage(page,skip,setactivePage)
    }

    return (
        <div>
            {openAuth && <AuthModal closeAuth={() => setOpenAuth(false)} />}
            {openModal && <ProductModal closeModal={() => setOpenModal(false)} />}
            <BasketModal openBasketModal={openBasketModal} close={() => setOpenBasketModal(false)} />
            <Header isHome openBasketModal={() => setOpenBasketModal(true)} openAuth={() => setOpenAuth(true)} />
            <div className="category-cards-block">
            </div>
            <section className="container category-list-block">
                <h1>PRODUCT OVERVIEW</h1>
                <div>
                    <div className="category-list-items">
                        {
                            categories.map((elem, i) => (
                                <button key={i}
                                // onClick="filterByCategory('all')"
                                >{elem}</button>
                            ))
                        }
                    </div>
                    <div className="category-filter-items">
                        <button type="button" onClick={() => toggleFilterBlock()} className="btn-outline-secondary">
                            <FontAwesomeIcon className="fa-caret-left" icon={faBarChart} />
                            Filter
                        </button>
                        <button type="button" onClick={() => toggleSearchBlock()} className="btn-outline-secondary">
                            <FontAwesomeIcon className="fa-caret-left" icon={faSearch} />
                            Search
                        </button>
                    </div>
                </div>
                {showFilter && <FilterBlock />}
                {showSearch && <SearchInput />}
            </section>
            <section className="product-list">
                {productsList?.map(data => (
                    <ProductCard info={data} key={data.id} />
                ))}
            </section>
            <div className="pagination">
                {activePage > 1 && <button className="prevBtn" onClick={() => changePage(activePage-1)}>prev</button>}
                {pageButtons?.map(i => (
                    <button key={i} onClick={() => changePage(i)} className={`buttonPage ${i === activePage ? 'active-page-btn' : ''}`}>{i}</button>
                ))}
                {pageButtons.length !== activePage && <button className="nextBtn" onClick={() => changePage(activePage+1)}>next</button>}
            </div>
            <Footer />
        </div>
    )
}

export default ShopPage