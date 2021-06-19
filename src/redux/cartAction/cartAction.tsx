import { cartActionType } from "../actionType/cartActionType";





interface AddToCart {
    type: cartActionType.ADD_TO_CART
    payload: number
}

interface removeFromCart {
    type: cartActionType.REMOVE_FROM_CART
    payload: number
}



export type Action = AddToCart | removeFromCart








