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
      payload: cardId
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

  updateCardStatus(cardId, listId) {
    return {
      type: constants.UPDATE_CARD_STATUS,
      payload: { cardId, listId },
      meta: {
        throttle: true
      }
    };
  },

  updateCardPosition(cardId, afterId) {
    return {
      type: constants.UPDATE_CARD_POSITION,
      payload: { cardId, afterId },
      meta: {
        throttle: true
      }
    };
  },

  //Note: this is an anti-pattern, i.e. you shouldn't really do this as it stops server-side rendering
  //see this SO answer for more on this http://stackoverflow.com/a/35674575/1434764 
  persistCardDrag(cardProps) {
    return (dispatch, getState) => {
      let card = getCard(getState().cards, cardProps.id)
      let cardIndex = getCardIndex(getState().cards, cardProps.id)
      dispatchAsync(KanbanAPI.persistCardDrag(card.id, card.status, cardIndex), dispatch, {
        request: constants.PERSIST_CARD_DRAG,
        success: constants.PERSIST_CARD_DRAG_SUCCESS,
        failure: constants.PERSIST_CARD_DRAG_ERROR
      }, {cardProps});
    }
  },

  createDraft(card) {
    return {
      type: constants.CREATE_DRAFT,
      payload: card
    }
  },

  updateDraft(field, value) {   
    return {
      type: constants.UPDATE_DRAFT,
      payload: { field, value }
    }
  }
};

export default CardActionCreators;
