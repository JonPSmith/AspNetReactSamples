import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import KanbanBoard from '../components/KanbanBoard';
import CardActionCreators from '../actions/CardActionCreators';

class KanbanBoardContainer extends Component {

  componentDidMount(){
    this.props.actions.fetchCards();
  }

  render() {
    let kanbanBoard = this.props.children && React.cloneElement(this.props.children, {
      cards: this.props.cards,
    });

    return kanbanBoard; 
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CardActionCreators, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardContainer);

