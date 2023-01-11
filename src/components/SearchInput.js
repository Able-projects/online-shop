import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { productActions } from '../store/actions'
function SearchInput(props) {
    return (
        <div className="accordion-collapse" id='search-input'>
            <div id="search-input-icon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <input id="search-input" onKeyDown={(e) => productActions.searchProduct(e)} placeholder="Search" />
        </div>
    )
}

export default SearchInput