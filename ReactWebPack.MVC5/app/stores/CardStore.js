import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';
import update from 'react-addons-update';
import 'babel-polyfill';


class CardStore extends ReduceStore {
  getInitialState() {
    return [];
  }

  getCard(id) {
    return this._state.find((card)=>card.id == id);
  }

  getCardIndex(id) {
    return this._state.findIndex((card)=>card.id == id);
  }


  reduce(state, action){
    switch (action.type) {
      case constants.FETCH_CARDS_SUCCESS:
        return action.payload.response;
      /*
       * Card Creation
       */
      case constants.CREATE_CARD:
        return update(this.getState(), {$push: [action.payload.card] })

      case constants.CREATE_CARD_SUCCESS:
        cardIndex = this.getCardIndex(action.payload.card.id);
        return update(this.getState(), {
          [cardIndex]: {
            id: { $set: action.payload.response.id }
          }
        });

      case constants.CREATE_CARD_ERROR:
        cardIndex = this.getCardIndex(action.payload.card.id);
        return update(this.getState(), { $splice:[[cardIndex, 1]]});

      /*
       * Card Status Toggle
       */
      case constants.TOGGLE_CARD_DETAILS:
        cardIndex = this.getCardIndex(action.payload.cardId);
        return update(this.getState(), {
          [cardIndex]: {
            showDetails: { $apply: (currentValue) => (currentValue !== false)? false : true }
          }
        });


      /*
       * Card Update
       */
      case constants.UPDATE_CARD:
        cardIndex = this.getCardIndex(action.payload.card.id);
        return update(this.getState(), {
          [cardIndex]: {
            $set: action.payload.draftCard
          }
        });

      case constants.UPDATE_CARD_ERROR:
        cardIndex = this.getCardIndex(action.payload.card.id);
        return update(this.getState(), {
          [cardIndex]: {
            $set: action.payload.card
          }
        });


      /*
       * Card Drag'n Drop
       */
      case constants.UPDATE_CARD_POSITION:
        if(action.payload.cardId !== action.payload.afterId) {
          cardIndex = this.getCardIndex(action.payload.cardId);
          let card = this.getState()[cardIndex]
          let afterIndex = this.getCardIndex(action.payload.afterId);
          return update(this.getState(), {
            $splice: [
              [cardIndex, 1],
              [afterIndex, 0, card]
            ]
          });
        }

      case constants.UPDATE_CARD_STATUS:
        cardIndex = this.getCardIndex(action.payload.cardId);
        return update(this.getState(), {
          [cardIndex]: {
            status: { $set: action.payload.listId }
          }
        });

      case constants.PERSIST_CARD_DRAG_ERROR:
        cardIndex = this.getCardIndex(action.payload.cardProps.id);
        return update(this.getState(), {
          [cardIndex]: {
            status: { $set: action.payload.cardProps.status }
          }
        });


      /*
       * Task Creation
       */
      case constants.CREATE_TASK:
        cardIndex = this.getCardIndex(action.payload.cardId);
        return update(this.getState(), {
          [cardIndex]: {
            tasks: {$push: [action.payload.task] }
          }
        });

      case constants.CREATE_TASK_SUCCESS:
        cardIndex = this.getCardIndex(action.payload.cardId);
        taskIndex = this.getState()[cardIndex].tasks.findIndex((task)=>(
          task.id == action.payload.task.id
        ));
        return update(this.getState(), {
          [cardIndex]: {
            tasks: {
              [taskIndex]: {
                id: { $set: action.payload.response.id }
              }
            }
          }
        });

      case constants.CREATE_TASK_ERROR:
        let cardIndex = this.getCardIndex(action.payload.cardId);
        let taskIndex = this.getState()[cardIndex].tasks.findIndex((task)=>(
          task.id == action.payload.task.id
        ));
        return update(this.getState(), {
          [cardIndex]: {
            tasks: {
              $splice:[[taskIndex, 1]]
            }
          }
        });


      /*
       * Task Deletion
       */
      case constants.DELETE_TASK:
        cardIndex = this.getCardIndex(action.payload.cardId);
        return update(this.getState(), {
          [cardIndex]: {
            tasks: {$splice: [[action.payload.taskIndex,1]] }
          }
        });

      case constants.DELETE_TASK_ERROR:
        cardIndex = this.getCardIndex(action.payload.cardId);
        return update(this.getState(), {
          [cardIndex]: {
            tasks: {$splice: [[action.payload.taskIndex, 0, action.payload.task]] }
          }
        });


      /*
       * Task Toggling
       */
      case constants.TOGGLE_TASK:
        cardIndex = this.getCardIndex(action.payload.cardId);
        return update(this.getState(), {
          [cardIndex]: {
            tasks: {
              [action.payload.taskIndex]: { done: { $apply: (done) => !done }}
            }
          }
        });

      case constants.TOGGLE_TASK_ERROR:
        cardIndex = this.getCardIndex(action.payload.cardId);
        return update(this.getState(), {
          [cardIndex]: {
            tasks: {
              [action.payload.taskIndex]: { done: { $apply: (done) => !done }}
            }
          }
        });

      default:
        return state;
    }
  }
}
export default new CardStore(AppDispatcher);
