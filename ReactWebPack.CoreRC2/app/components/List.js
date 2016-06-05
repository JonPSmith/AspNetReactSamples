import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import Card from './Card';
import constants from '../constants';
import CardActionCreators from '../actions/CardActionCreators';
import { connect } from 'react-redux';

const listTargetSpec = {
  hover(props, monitor) {
    const dragged = monitor.getItem();
    this.props.dispatch(CardActionCreators.updateCardStatus(dragged.id, props.id));
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class List extends Component {
    render() {
    const { connectDropTarget } = this.props;

    let cards = this.props.cards.map((card) => {
      return <Card key={card.id} {...card} />
    });

    return connectDropTarget(
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
};
List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
  connectDropTarget: PropTypes.func.isRequired
};

export default connect()(DropTarget(constants.CARD, listTargetSpec, collect)(List))