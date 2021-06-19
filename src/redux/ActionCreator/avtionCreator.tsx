export const addToCart = (payload: number) => {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}

export const removeFromCart = (payload: number) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload
    }
}