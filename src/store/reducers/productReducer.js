import types from '../actions/types'
const stateInitial = {
    limit: 12,
    productsList: [],
    totalItems: 0
}

export default function reducer(state = stateInitial ,action){
    switch(action.type){
        case types.SET_PRODUCT_LIST:
            return {
                ...state,
                productsList: action.payload
            }
        case types.SET_TOTAL_ITEM:
            return {
                ...state,
                totalItems: action.payload
            }
        default: 
        return state
    }
}