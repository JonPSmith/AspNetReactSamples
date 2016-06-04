import constants from '../constants';
import { getCardIndex } from '../cardUtils'
import update from 'react-addons-update';

const initialState = [];

const cards = (state = initialState, action) => {
    switch (action.type) {
      case constants.FETCH_CARDS_SUCCESS:
        return action.response;
      /*
       * Card Creation
       */
      case constants.CREATE_CARD:
        return update(state, {$push: [action.card] })

      case constants.CREATE_CARD_SUCCESS:
        cardIndex = getCardIndex(state, action.card.id);
        return update(state, {
          [cardIndex]: {
            id: { $set: action.response.id }
          }
        });

      case constants.CREATE_CARD_ERROR:
        cardIndex = getCardIndex(state, action.card.id);
        return update(state, { $splice:[[cardIndex, 1]]});

      /*
       * Card Status Toggle
       */
      case constants.TOGGLE_CARD_DETAILS:
        cardIndex = getCardIndex(state, action.cardId);
        return update(state, {
          [cardIndex]: {
            showDetails: { $apply: (currentValue) => (currentValue !== false)? false : true }
          }
        });

      /*
       * Card Update
       */
      case constants.UPDATE_CARD:
        cardIndex = getCardIndex(state, action.card.id);
        return update(state, {
          [cardIndex]: {
            $set: action.draftCard
          }
        });

      case constants.UPDATE_CARD_ERROR:
        cardIndex = getCardIndex(state, action.card.id);
        return update(state, {
          [cardIndex]: {
            $set: action.card
          }
        });

      /*
       * Card Drag'n Drop
       */
      case constants.UPDATE_CARD_POSITION:
        if(action.cardId !== action.afterId) {
          cardIndex = getCardIndex(state, action.cardId);
          let card = state[cardIndex]
          let afterIndex = getCardIndex(state, action.afterId);
          return update(state, {
            $splice: [
              [cardIndex, 1],
              [afterIndex, 0, card]
            ]
          });
        }

      case constants.UPDATE_CARD_STATUS:
        cardIndex = getCardIndex(state, action.cardId);
        return update(state, {
          [cardIndex]: {
            status: { $set: action.listId }
          }
        });

      case constants.PERSIST_CARD_DRAG_ERROR:
        cardIndex = getCardIndex(state, action.cardProps.id);
        return update(state, {
          [cardIndex]: {
            status: { $set: action.cardProps.status }
          }
        });


      /*
       * Task Creation
       */
      case constants.CREATE_TASK:
        cardIndex = getCardIndex(state, action.cardId);
        return update(state, {
          [cardIndex]: {
            tasks: {$push: [action.task] }
          }
        });

      case constants.CREATE_TASK_SUCCESS:
        cardIndex = getCardIndex(state, action.cardId);
        taskIndex = state[cardIndex].tasks.findIndex((task)=>(
          task.id == action.task.id
        ));
        return update(state, {
          [cardIndex]: {
            tasks: {
              [taskIndex]: {
                id: { $set: action.response.id }
              }
            }
          }
        });

      case constants.CREATE_TASK_ERROR:
        let cardIndex = getCardIndex(state, action.cardId);
        let taskIndex = state[cardIndex].tasks.findIndex((task)=>(
          task.id == action.task.id
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
        cardIndex = getCardIndex(state, action.cardId);
        return update(state, {
          [cardIndex]: {
            tasks: {$splice: [[action.taskIndex,1]] }
          }
        });

      case constants.DELETE_TASK_ERROR:
        cardIndex = getCardIndex(state, action.cardId);
        return update(state, {
          [cardIndex]: {
            tasks: {$splice: [[action.taskIndex, 0, action.task]] }
          }
        });


      /*
       * Task Toggling
       */
      case constants.TOGGLE_TASK:
        cardIndex = getCardIndex(state, action.cardId);
        return update(state, {
          [cardIndex]: {
            tasks: {
              [action.taskIndex]: { done: { $apply: (done) => !done }}
            }
          }
        });

      case constants.TOGGLE_TASK_ERROR:
        cardIndex = getCardIndex(state, action.cardId);
        return update(state, {
          [cardIndex]: {
            tasks: {
              [action.taskIndex]: { done: { $apply: (done) => !done }}
            }
          }
        });

      default:
        return state;
    }
}

export default cards;