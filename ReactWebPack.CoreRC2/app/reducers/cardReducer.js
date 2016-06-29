import constants from '../constants';
import { getCardIndex } from '../cardUtils'
import update from 'react-addons-update';

const initialState = [];
const initialAction = { type: 'initial state'}

const cards = (state = initialState, action = initialAction) => {
    switch (action.type) {
      case constants.FETCH_CARDS_SUCCESS:
        return action.payload.response;
      /*
       * Card Creation
       */
      case constants.CREATE_CARD:
        return update(state, {$push: [action.payload.card] })

      case constants.CREATE_CARD_SUCCESS:
        cardIndex = getCardIndex(state, action.payload.card.id);
        return update(state, {
          [cardIndex]: {
            id: { $set: action.payload.response.id }
          }
        });

      case constants.CREATE_CARD_ERROR:
        cardIndex = getCardIndex(state, action.payload.card.id);
        return update(state, { $splice:[[cardIndex, 1]]});

      /*
       * Card Status Toggle
       */
      case constants.TOGGLE_CARD_DETAILS:
        cardIndex = getCardIndex(state, action.payload.cardId);
        return update(state, {
          [cardIndex]: {
            showDetails: { $apply: (currentValue) => (currentValue !== false)? false : true }
          }
        });

      /*
       * Card Update
       */
      case constants.UPDATE_CARD:
        cardIndex = getCardIndex(state, action.payload.card.id);
        return update(state, {
          [cardIndex]: {
            $set: action.payload.draftCard
          }
        });

      case constants.UPDATE_CARD_ERROR:
        cardIndex = getCardIndex(state, action.payload.card.id);
        return update(state, {
          [cardIndex]: {
            $set: action.payload.card
          }
        });

      /*
       * Card Drag'n Drop
       */
      case constants.UPDATE_CARD_POSITION:
        if(action.payload.cardId !== action.payload.afterId) {
          cardIndex = getCardIndex(state, action.payload.cardId);
          let card = state[cardIndex]
          let afterIndex = getCardIndex(state, action.payload.afterId);
          return update(state, {
            $splice: [
              [cardIndex, 1],
              [afterIndex, 0, card]
            ]
          });
        }

      case constants.UPDATE_CARD_STATUS:
        cardIndex = getCardIndex(state, action.payload.cardId);
        return update(state, {
          [cardIndex]: {
            status: { $set: action.payload.listId }
          }
        });

      case constants.PERSIST_CARD_DRAG_ERROR:
        cardIndex = getCardIndex(state, action.payload.cardProps.id);
        return update(state, {
          [cardIndex]: {
            status: { $set: action.cardProps.status }
          }
        });


      /*
       * Task Creation
       */
      case constants.CREATE_TASK:
        cardIndex = getCardIndex(state, action.payload.cardId);
        return update(state, {
          [cardIndex]: {
            tasks: {$push: [action.payload.task] }
          }
        });

      case constants.CREATE_TASK_SUCCESS:
        cardIndex = getCardIndex(state, action.payload.cardId);
        taskIndex = state[cardIndex].tasks.findIndex((task)=>(
          task.id == action.payload.task.id
        ));
        return update(state, {
          [cardIndex]: {
            tasks: {
              [taskIndex]: {
                id: { $set: action.payload.response.id }
              }
            }
          }
        });

      case constants.CREATE_TASK_ERROR:
        let cardIndex = getCardIndex(state, action.payload.cardId);
        let taskIndex = state[cardIndex].tasks.findIndex((task)=>(
          task.id == action.payload.task.id
        ));
        return update(state, {
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
        cardIndex = getCardIndex(state, action.payload.cardId);
        return update(state, {
          [cardIndex]: {
            tasks: {$splice: [[action.payload.taskIndex,1]] }
          }
        });

      case constants.DELETE_TASK_ERROR:
        cardIndex = getCardIndex(state, action.payload.cardId);
        return update(state, {
          [cardIndex]: {
            tasks: {$splice: [[action.payload.taskIndex, 0, action.payload.task]] }
          }
        });


      /*
       * Task Toggling
       */
      case constants.TOGGLE_TASK:
        cardIndex = getCardIndex(state, action.payload.cardId);
        return update(state, {
          [cardIndex]: {
            tasks: {
              [action.payload.taskIndex]: { done: { $apply: (done) => !done }}
            }
          }
        });

      case constants.TOGGLE_TASK_ERROR:
        cardIndex = getCardIndex(state, action.payload.cardId);
        return update(state, {
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

export default cards;