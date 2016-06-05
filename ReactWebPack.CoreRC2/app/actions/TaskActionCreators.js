import { dispatchAsync } from '../ReduxDispatcher'
import constants from '../constants';
import KanbanAPI from '../api/KanbanApi';

let TaskActionCreators = {
  addTask(cardId, task) {
    return (dispatch) => {
      dispatchAsync(KanbanAPI.addTask(cardId, task), dispatch, {
        request: constants.CREATE_TASK,
        success: constants.CREATE_TASK_SUCCESS,
        failure: constants.CREATE_TASK_ERROR
      }, { cardId, task });
    }
  },

  deleteTask(cardId, task, taskIndex) {
    return (dispatch) => {
      dispatchAsync(KanbanAPI.deleteTask(cardId, task), dispatch, {
        request: constants.DELETE_TASK,
        success: constants.DELETE_TASK_SUCCESS,
        failure: constants.DELETE_TASK_ERROR
      }, { cardId, task, taskIndex });
    }
  },

  toggleTask(cardId, task, taskIndex) {
    return (dispatch) => {
      dispatchAsync(KanbanAPI.toggleTask(cardId, task), dispatch, {
        request: constants.TOGGLE_TASK,
        success: constants.TOGGLE_TASK_SUCCESS,
        failure: constants.TOGGLE_TASK_ERROR
      }, { cardId, task, taskIndex });
    }
  }

};

export default TaskActionCreators;
