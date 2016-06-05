import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import TaskActionCreators from '../actions/TaskActionCreators';

class CheckList extends Component {
  checkInputKeyPress(evt){
    if(evt.key === 'Enter'){
      let newTask = {id:Date.now(), name:evt.target.value, done:false};
      this.props.actions.addTask(this.props.cardId, newTask);
      evt.target.value = '';
    }
  }

  render() {
    let tasks = this.props.tasks.map((task, taskIndex) => (
      <li key={task.id} className="checklist__task">
        <input type="checkbox"
               checked={task.done}
               onChange={this.props.actions.toggleTask.bind(this, this.props.cardId, task, taskIndex) } />
        {task.name}{' '}
        <a href="#"
           className="checklist__task--remove"
           onClick={this.props.actions.deleteTask.bind(this, this.props.cardId, task, taskIndex)} />
      </li>
    ));

    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input type="text"
          className="checklist--add-task"
          placeholder="Type then hit Enter to add a task"
          onKeyPress={this.checkInputKeyPress.bind(this)} />
      </div>
    );
  }
}
CheckList.propTypes = {
  cardId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TaskActionCreators, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(CheckList)
