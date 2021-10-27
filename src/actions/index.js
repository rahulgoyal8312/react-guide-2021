export const addItemHandler = item => {
    return dispatch => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                item
            }
        })
    }
}

export const removeItemHandler = id => {
    return dispatch => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: {
                id
            }
        })
    }
}

export const clearCartHandler = () => dispatch => {
    dispatch({
        type: "CLEAR_CART"
    })
}