import { combineReducers } from 'redux';
import products from './products_reducers'

const rootReducers = combineReducers({
    products
})

export default rootReducers