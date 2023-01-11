import types from '../actions/types'
const stateInitial = {
    categoryCards: [
        {
            title: "Women",
            description: 'Spring 2022',
            bgImg: 'url(/images/image-1.webp)'
        },
        {
            title: "Men",
            description: 'Spring 2022',
            bgImg: 'url(/images/image-2.webp)'
        },
        {
            title: "Accessories",
            description: 'New trend',
            bgImg: 'url(/images/image-3.webp)'
        }
    ],
    categories: ['All products', 'Women', 'Men', 'Bags', 'Shoes', 'Watches'],
    categoryList: [],
}

export default function reducer(state = stateInitial,action){
    switch(action.type){
        case types.SET_CATEGORY_LIST:
            return {
                ...state,
                categoryList: action.payload
            }
        default: 
        return state
    }
}