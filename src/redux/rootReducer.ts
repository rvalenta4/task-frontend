import { combineReducers } from 'redux'
import itemsReducer from '../components/Items/redux/reducer'

const rootReducer = combineReducers({
	items: itemsReducer
})

export default rootReducer
