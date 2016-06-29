import constants from '../constants';
import update from 'react-addons-update';

let initialState = {
  id: Date.now(),
  title:'',
  description:'',
  status:'todo',
  color:'#c9c9c9',
  tasks:[]
};
const initialAction = { type: 'initial state'}

const draftCard = (state = initialState, action = initialAction) => {
  switch (action.type) {
    case constants.CREATE_DRAFT:
      if(action.payload.card){
        return update(state, {
          $set: action.payload.card
        });
      } else {
        return initialState;
      }

    case constants.UPDATE_DRAFT:
      return update(state, {
        [action.payload.field]: {
          $set: action.payload.value
        }
      });

    default:
      return state;
  }
}

export default draftCard;
