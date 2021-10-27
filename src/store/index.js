import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from "../reducer"

const store = createStore(
    mainReducer, 
    {
        items: [],
        totalAmount: 0
    }, 
    composeWithDevTools(applyMiddleware(thunk))
)

export default store