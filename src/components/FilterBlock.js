import '../style/categories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { productActions } from '../store/actions'
function FilterBlock(props) {
    const { sortBy, filterByPrice, categoryList, filterByTags } = productActions
    return (
        <div className="accordion-collapse">
            <div className="filter-block row">
                <div className="col-3">
                    <div className="filter-header">
                        Sort By
                    </div>
                    <ul>
                        <li className="p-b-6">
                            <span onClick={() => sortBy()} className="filter-link stext-106 trans-04">
                                Default
                            </span>
                        </li>
                        <li className="p-b-6">
                            <span className="filter-link stext-106 trans-04">
                                Popularity
                            </span>
                        </li>
                        <li className="p-b-6" onClick={() => sortBy('rating')}>
                            <span className="filter-link stext-106 trans-04">
                                Average rating
                            </span>
                        </li>
                        <li className="p-b-6">
                            <span className="filter-link stext-106 trans-04 filter-link-active">
                                Newness
                            </span>
                        </li>
                        <li className="p-b-6" onClick={() => sortBy('lowtohigh')}>
                            <span className="filter-link stext-106 trans-04">
                                Price: Low to High
                            </span>
                        </li>
                        <li className="p-b-6" onClick={() => sortBy('hightolow')}>
                            <span className="filter-link stext-106 trans-04">
                                Price: High to Low
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <div className="filter-header">
                        Price
                    </div>
                    <ul>
                        <li className="p-b-6">
                            <span onClick="filterByPrice()"
                                className="filter-link stext-106 trans-04 filter-link-active">
                                All
                            </span>
                        </li>
                        <li className="p-b-6" onClick={() => filterByPrice(0, 100)}>
                            <span className="filter-link stext-106 trans-04">
                                $0.00 - $100.00
                            </span>
                        </li>
                        <li className="p-b-6" onClick={() => filterByPrice(100, 300)}>
                            <span className="filter-link stext-106 trans-04">
                                $100.00 - $300.00
                            </span>
                        </li>
                        <li className="p-b-6" onClick={() => filterByPrice(300, 500)}>
                            <span className="filter-link stext-106 trans-04">
                                $300.00 - $500.00
                            </span>
                        </li>
                        <li className="p-b-6" onClick={() => filterByPrice(500, 1000)}>
                            <span className="filter-link stext-106 trans-04">
                                $500.00 - $1000.00
                            </span>
                        </li>
                        <li className="p-b-6" onClick={() => filterByPrice(1000)}>
                            <span className="filter-link stext-106 trans-04">
                                $1000.00+
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <div className="filter-header">
                        Color
                    </div>
                    <ul>
                        <li className="p-b-6">
                            <FontAwesomeIcon icon={faCircle} color='black' />
                            <span className="filter-link stext-106 trans-04">
                                Black
                            </span>
                        </li>
                        <li className="p-b-6">
                            <FontAwesomeIcon icon={faCircle} color='blue' />
                            <span className="filter-link stext-106 trans-04 filter-link-active">
                                Blue
                            </span>
                        </li>
                        <li className="p-b-6">
                            <FontAwesomeIcon icon={faCircle} color='grey' />
                            <span className="filter-link stext-106 trans-04">
                                Grey
                            </span>
                        </li>
                        <li className="p-b-6">
                            <FontAwesomeIcon icon={faCircle} color='green' />
                            <span className="filter-link stext-106 trans-04">
                                Green
                            </span>
                        </li>
                        <li className="p-b-6">
                            <FontAwesomeIcon icon={faCircle} color='red' />
                            <span className="filter-link stext-106 trans-04">
                                Red
                            </span>
                        </li>
                        <li className="p-b-6">
                            <FontAwesomeIcon icon={faCircle} color='white' />
                            <span className="filter-link stext-106 trans-04">
                                White
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <div className="filter-header">
                        Tags
                    </div>
                    <div className="flex-w p-t-4 m-r--5 filter-tags-block">
                        {categoryList.map((item, i) => (
                            <span key={i} onClick={() => filterByTags(item)} className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBlock