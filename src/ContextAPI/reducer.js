import { db } from '../assets/firebase'



export const initState = {
    basket: [],
    user: null
}


export const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_TO_CART':

            db.collection("users").doc(state.user.email).set({
                basket: [...state.basket, action.payload]
            }, { merge: true})

            return {
                ...state,
                basket: [...state.basket, action.payload]
            }


        case 'REMOVE_FROM_CART':
            // let newBasket = state.basket.filter((product) => product.id !== action.payload)
            let newBasket = [...state.basket]
            const index  = state.basket.findIndex((product) => product.id === action.payload)
            if(index >= 0 ) {
                newBasket.splice(index, 1)
            }else {
                console.warn(`Product with id: ${action.payload} is not in the cart !!!`)
            }
            
            db.collection("users").doc(state.user.email).set({
                basket: newBasket
            }, { merge: true})
            
            return {
                ...state,
                basket: newBasket
            }


        case 'SET_USER':
            return {
                user: action.payload.user,
                basket: action.payload.basket
            } 


        case 'CLEAR_CART':
            return {
                ...state,
                basket: []
            }


        default:
            console.log("REDUCER: default case")
            return state
    }
}


export const cartTotal = (basket) => (
    basket.reduce((amount, product) => amount + product.price, 0)
) 