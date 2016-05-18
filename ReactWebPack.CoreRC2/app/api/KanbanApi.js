import 'whatwg-fetch';
import 'babel-polyfill';
import constants from '../constants';

//const API_URL = 'http://kanbanapi.pro-react.com';     //The API_URL has moved into the constants file 
const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'any-string-you-like'
}

let KanbanAPI = {
  fetchCards() {
    return fetch(`${constants.API_URL}/cards`, {headers:API_HEADERS})
    .then((response) => response.json())
  },

  addCard(card) {
    return fetch(`${constants.API_URL}/cards`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(card)
    })
    .then((response) => response.json())
  },

  updateCard(card, draftCard) {
    return fetch(`${constants.API_URL}/cards/${card.id}`, {
    	method: 'put',
    	headers: API_HEADERS,
    	body: JSON.stringify(draftCard)
    })
  },

  persistCardDrag(cardId, status, index) {
    return fetch(`${constants.API_URL}/cards/${cardId}`, {
    	method: 'put',
    	headers: API_HEADERS,
    	body: JSON.stringify({status, row_order_position: index})
    })
  },

  addTask(cardId, task) {
    return fetch(`${constants.API_URL}/cards/${cardId}/tasks`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(task)
    })
    .then((response) => response.json())
  },

  deleteTask(cardId, task) {
    return fetch(`${constants.API_URL}/cards/${cardId}/tasks/${task.id}`, {
      method: 'delete',
      headers: API_HEADERS
    })
  },

  toggleTask(cardId, task) {
    return fetch(`${constants.API_URL}/cards/${cardId}/tasks/${task.id}`, {
    	method: 'put',
    	headers: API_HEADERS,
    	body: JSON.stringify({done:!task.done})
    })
  }

};

export default KanbanAPI;
