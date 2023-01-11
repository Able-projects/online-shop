import types from './types'
import store from '../store'

const getCategories = () => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data => {
        store.dispatch({type: types.SET_CATEGORY_LIST, payload: data})
    });
}

const filterByCategory = (category) => {
    // const categoryList = store.getState().categoryReducer.categoryList
    // const categoryCards = store.getState().categoryReducer.categoryCards
    const { categoryList } = store.getState().categoryReducer
    let sortedProducts = []
    if (category === 'all products') {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                store.dispatch({type: types.SET_PRODUCT_LIST, payload: data.products} )
            });
        return
    }
    categoryList.forEach(elem => {
        let categoryName = ''
        if (category === 'men') {
            if (elem.substr(0, 3) === category) {
                categoryName = elem
            }
        } else if (elem.includes(category.toLowerCase())) {
            categoryName = elem
        }
        if (categoryName.length) {
            fetch('https://dummyjson.com/products/category/' + categoryName)
                .then(res => res.json())
                .then(data => {
                    sortedProducts = sortedProducts.concat(data.products)
                    store.dispatch({type: types.SET_PRODUCT_LIST, payload: sortedProducts} )
                });
        }
    })
}


export const categoryActions = {
    getCategories,
    filterByCategory
}
