import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';
import update from 'react-addons-update';

let defaultDraft = () => {
  return {
    id: Date.now(),
    title:'',
    description:'',
    status:'todo',
    color:'#c9c9c9',
    tasks:[]
  }
};

class DraftStore extends ReduceStore {
  getInitialState() {
    return {};
  }

  reduce(state, action){
    switch (action.type) {
      case constants.CREATE_DRAFT:
        if(action.payload.card){
          return update(this.getState(), {
            $set: action.payload.card
          });
        } else {
          return defaultDraft();
        }

      case constants.UPDATE_DRAFT:
        return update(this.getState(), {
          [action.payload.field]: {
            $set: action.payload.value
          }
        });

      default:
        return state;
    }
  }
}

export default new DraftStore(AppDispatcher);
