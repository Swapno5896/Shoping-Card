import { Action } from './cartAction/cartAction'

interface interfaceType {

    cart: never[];
    products: {
        name: string;
        price: number;
        id: number;
    }[];

}
const initState = {
    cart: [],
    products: [
        { name: "asus", price: 10, id: 1 },
        { name: "hp", price: 16, id: 2 },
        { name: "dell", price: 14, id: 3 },
        { name: "apple", price: 19, id: 4 },
    ],

}

export const producttReducer = (state: interfaceType = initState, action: Action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state, cart: [...state.cart, action.payload]
            }
        case "REMOVE_FROM_CART":
            const id = action.payload
            const remainingCart = state.cart.filter(item => item !== id);
            return {
                ...state, cart: remainingCart
            }
        default:
            return state
    }
}


