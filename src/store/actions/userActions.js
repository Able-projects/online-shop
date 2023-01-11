import types from './types'
import store from '../store'

function loginUser(username,password,closeAuth){
    let isUserExist = false
    fetch('http://localhost:3001/user')
    .then(res => res.json())
    .then(users =>{
        users.forEach(user => {
            if(user.username === username){
                if(user.password === password){
                    isUserExist = true
                    localStorage.setItem('userInfo', JSON.stringify(user))
                    store.dispatch({type: types.SET_USER_INFO, payload: user})
                }
            }
        })
        if(!isUserExist){
            fetch('http://localhost:3001/user', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        username: username,
                        password: password,
                    })
                })
                .then(res => res.json())
                .then(user => {
                    localStorage.setItem('userInfo', JSON.stringify(user))
                    store.dispatch({type: types.SET_USER_INFO, payload: user})
                });   
        }
    });  
    closeAuth()
}

function logOut(){
    localStorage.removeItem('userInfo')
    store.dispatch({type: types.SET_USER_INFO, payload: null})
}

export const userActions = {
    loginUser,
    logOut
}
