import {cartActionType as type} from '../actionType/cartActionType'
export const addToCart = (payload: number) => {
    return {
        type: type.ADD_TO_CART,
        payload
    }
}
export const removeFromCart = (payload: number) => {
    return {
        type: type.REMOVE_FROM_CART,
        payload
    }
}