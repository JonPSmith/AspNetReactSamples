import { dispatchAsync } from '../ReduxDispatcher';
import constants from '../constants';
import KanbanAPI from '../api/KanbanApi';
import {throttle} from '../utils';
import { getCard, getCardIndex } from '../cardUtils'

let CardActionCreators = {
  fetchCards() {
    return (dispatch) => {
      dispatchAsync(KanbanAPI.fetchCards(), dispatch, {
        request: constants.FETCH_CARDS,
        success: constants.FETCH_CARDS_SUCCESS,
        failure: constants.FETCH_CARDS_ERROR
      });
    }
  },

  toggleCardDetails(cardId) {
    return {
      type: constants.TOGGLE_CARD_DETAILS,
      cardId
    };
  },

  addCard(card) {
    return (dispatch) => {
      dispatchAsync(KanbanAPI.addCard(card), dispatch, {
        request: constants.CREATE_CARD,
        success: constants.CREATE_CARD_SUCCESS,
        failure: constants.CREATE_CARD_ERROR
      }, { card });
    }
  },

  updateCard(card, draftCard) {
    return (dispatch) => {
      dispatchAsync(KanbanAPI.updateCard(card, draftCard), dispatch, {
        request: constants.UPDATE_CARD,
        success: constants.UPDATE_CARD_SUCCESS,
        failure: constants.UPDATE_CARD_ERROR
      }, { card, draftCard });
    }
  },

  updateCardStatus() {
    return (dispatch) => {
      throttle((cardId, listId) => {
        dispatchAsync({
          type: constants.UPDATE_CARD_STATUS,
          payload: { cardId, listId }
        }, dispatch);
      })
    }
  },

  updateCardPosition() {
    return (dispatch) => {
      throttle((cardId, afterId) => {
        dispatchAsync({
          type: constants.UPDATE_CARD_POSITION,
          payload: { cardId, afterId }
        });
      }, 500)
    }
  },

  persistCardDrag(cardProps) {
    let card = CardStore.getCard(cardProps.id)
    let cardIndex = CardStore.getCardIndex(cardProps.id)
    AppDispatcher.dispatchAsync(KanbanAPI.persistCardDrag(card.id, card.status, cardIndex), {
      request: constants.PERSIST_CARD_DRAG,
      success: constants.PERSIST_CARD_DRAG_SUCCESS,
      failure: constants.PERSIST_CARD_DRAG_ERROR
    }, {cardProps});
  },

  createDraft(card) {
    return (dispatch) => {
      dispatchAsync({
        type: constants.CREATE_DRAFT,
        payload: { card }
      });
    }
  },

  updateDraft(field, value) {
    return (dispatch) => {
      dispatchAsync({
        type: constants.UPDATE_DRAFT,
        payload: { field, value }
      });
    }
  }
};

export default CardActionCreators;
