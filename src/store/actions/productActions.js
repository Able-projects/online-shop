import types from './types'
import store from '../store'


const loadProductsByRange = (limit,skip,setPageButtons) => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    .then(res => res.json())
    .then(data => {
        store.dispatch({type:  types.SET_PRODUCT_LIST, payload: data.products} )
        store.dispatch({type: types.SET_TOTAL_ITEM, payload: data.total})
        renderPaginationButtons(data.total,setPageButtons)
    });
}

function sortBy(type) {
    let sortedProducts = []
    const { totalItems } = store.getState().productReducer
    fetch(`https://dummyjson.com/products?limit=${totalItems}&skip=0`)
        .then(res => res.json())
        .then(list => {
            let products = list.products
            if (type === 'lowtohigh') {
                sortedProducts = products.sort((a, b) => {
                    if (a.price < b.price) return -1
                    if (a.price > b.price) return 1
                    if (a.price === b.price) return 0
                })
            }
            if (type === 'hightolow') {
                sortedProducts = products.sort((a, b) => {
                    if (a.price < b.price) return 1
                    if (a.price > b.price) return -1
                    if (a.price === b.price) return 0
                })
            }
            if (type === 'rating') {
                sortedProducts = products.sort((a, b) => {
                    if (a.rating < b.rating) return 1
                    if (a.rating > b.rating) return -1
                    if (a.rating === b.rating) return 0
                })
            } else {
                sortedProducts = products
            }
            store.dispatch({type: types.SET_PRODUCT_LIST, payload: sortedProducts} )
        });
}



function filterByPrice(min = 0, max = 1000000000) {
    let sortedProducts = []
    const { totalItems } = store.getState().productReducer
    fetch(`https://dummyjson.com/products?limit=${totalItems}&skip=0`)
        .then(res => res.json())
        .then(list => {
            let products = list.products
            let filteredProducts = []
            products.forEach(elem => {
                if (elem.price > min && elem.price < max) {
                    filteredProducts.push(elem)
                }
            })
            sortedProducts = filteredProducts.sort((a, b) => {
                if (a.price < b.price) return -1
                if (a.price > b.price) return 1
                if (a.price === b.price) return 0
            })
            store.dispatch({type: types.SET_PRODUCT_LIST, payload: sortedProducts} )
        });
}

function filterByTags(category) {
    fetch('https://dummyjson.com/products/category/' + category)
        .then(res => res.json())
        .then(data => {
            store.dispatch({type: types.SET_PRODUCT_LIST, payload: data.products} )
        });
}

function searchProduct(e) {
    if (e.keyCode === 13) {
        fetch('https://dummyjson.com/products/search?q=' + e.target.value)
            .then(res => res.json())
            .then(data => {
                store.dispatch({type: types.SET_PRODUCT_LIST, payload: data.products} )
            });
    }
}

function renderPaginationButtons(totalItems, setPageButtons) {
    const { limit } = store.getState().productReducer
    let count = Math.ceil(totalItems / limit)
    let list = []
    for (let i = 1; i <= count; i++) {
        list.push(i)
    }
    setPageButtons(list)
}


function loadProductsByPage(page, skip, setactivePage) {
    setactivePage(page)
    const { limit } = store.getState().productReducer
    skip = (page - 1) * limit
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        .then(res => res.json())
        .then(list => {
            store.dispatch({type: types.SET_PRODUCT_LIST, payload: list.products} )
        });
    return skip
}

function getBasketList(total,setTotal,setData) {
    const { userInfo } = store.getState().user
    if (userInfo?.id) {
        fetch('http://localhost:3001/carts?user_id=' + userInfo?.id).then(res => res.json()).then(list => {
            let arr = []
            list?.forEach(async (elem) => {
                fetch('https://dummyjson.com/products/' + elem.product_id)
                    .then(res => res.json())
                    .then(data => {
                        setTotal(total + (data.price * elem.quantity))
                        arr.push({ ...elem, ...data, id: elem.id })
                    })
            })
            setData(arr)
        })
    }
}

function deleteProduct(id,data,setData,setTotal) {
    fetch('http://localhost:3001/carts/' + id, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(() => {
            let newList = data.filter(elem => elem.id !== id)
            setData(newList)
            let sum = 0
            newList.forEach(item => {
                sum += item.price * item.quantity
            })
            setTotal(sum)
        });
}
function deleteAllProduct(data,setData,setTotal) {
    if (data.length !== 0) {
        for (const elem of data) {
            func(elem)
        }
        async function func(elem) {
            await fetch('http://localhost:3001/carts/' + elem.id, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(() => {
                    setData([])
                    setTotal(0)
                });
        }
    } else {
        alert('Корзина пуста')
    }
}

const addToCard = (sizeRef,color,selectedProduct,quantity) => {
    const { userInfo } = store.getState().user
    if(sizeRef.current.value === 'Choose an option'){
        alert('Выберите размер!')
        return
    }
    if(color === ''){
        alert('Выберите цвет!')
        return
    }
    if(!userInfo?.id){
        alert(' Войдите в систему!')
        return
    }
    let data =  {
        "product_id": selectedProduct.id,
        "quantity": quantity,
        "size": sizeRef.current.value,
        "color": color,
        "user_id": userInfo?.id
    }

    fetch('http://localhost:3001/carts?user_id=' + userInfo?.id).then(res => res.json()).then(list => {  
       let foundedItem = list.find(elem => elem.product_id === selectedProduct.id)
       if(foundedItem && foundedItem.size === sizeRef.current.value && foundedItem.color === color){
            fetch('http://localhost:3001/carts/' + foundedItem.id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({...foundedItem, quantity: quantity + foundedItem.quantity})
            })
            .then(res => res.json())
            .then(user => {
                alert('Продукт добавлен в корзину!')
            }); 
       }else{
            fetch('http://localhost:3001/carts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(user => {
                alert('Продукт добавлен в корзину!')
            }); 
       }
    })

}

export const productActions = {
    loadProductsByPage,
    renderPaginationButtons,
    searchProduct,
    filterByTags,
    filterByPrice,
    sortBy,
    loadProductsByRange,
    deleteAllProduct,
    deleteProduct,
    getBasketList,
    addToCard
}
