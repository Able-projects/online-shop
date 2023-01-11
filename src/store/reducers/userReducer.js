import types from '../actions/types'
const stateInitial = {
    userInfo: JSON.parse(localStorage.getItem('userInfo'))
}

export default function reducer(state = stateInitial,action){
    switch(action.type){
        case types.SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        default: 
        return state
    }
}