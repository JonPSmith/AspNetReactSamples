import { combineReducers } from 'redux'
import cards from './cardReducer'
import draftCard from './draftCardReducer'

const reducers = combineReducers({
  cards,
  draftCard
})

export default reducers