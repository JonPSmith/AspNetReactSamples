import { combineReducers } from 'redux'
import cards from './cardReducer'

const reducers = combineReducers({
  cards,
  //visibilityFilter
})

export default reducers