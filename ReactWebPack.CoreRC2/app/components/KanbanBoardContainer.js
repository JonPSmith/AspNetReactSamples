import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import KanbanBoard from '../components/KanbanBoard';
import CardActionCreators from '../actions/CardActionCreators';

class KanbanBoardContainer extends Component {

  componentDidMount(){
    this.props.fetchCards();
  }

  render() {
    let kanbanBoard = this.props.children && React.cloneElement(this.props.children, {
      cards: this.props.cards,
    });

    return kanbanBoard; 
  }
}

function mapStoreToProps(storeState) {
  return {
    cards: storeState.cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCards: () => dispatch(CardActionCreators.fetchCards())
  }
}
export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(KanbanBoardContainer);

