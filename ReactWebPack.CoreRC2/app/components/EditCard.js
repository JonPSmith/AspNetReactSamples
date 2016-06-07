import React, {Component} from 'react';
import CardForm from './CardForm';
import CardActionCreators from '../actions/CardActionCreators';
import { connect } from 'react-redux';
import { getCard } from '../cardUtils'

import 'babel-polyfill';

class EditCard extends Component {
  
  handleChange(field, value) {
    this.props.updateDraft(field, value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const cards = this.context.store.getState().cards;
    this.props.updateCard(
      getCard(cards, this.props.params.card_id),this.props.draft);

    this.props.history.pushState(null, '/');
  }

  handleClose(e) {
    this.props.history.pushState(null, '/');
  }

  componentDidMount() {
    const cards = this.context.store.getState().cards;
    setTimeout(() => {
      this.props.createDraft(
        getCard(cards, this.props.params.card_id))
    }, 0); 
  }

  render(){
    return  (
      <CardForm draftCard={this.props.draft}
        buttonLabel="Edit Card"
        handleChange={this.handleChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this) }
        handleClose={this.handleClose.bind(this)}  />
    )    
  } 
}

//The code below enables access the store via the React context.
//The code that uses it is in componentDidMount, line 33
//see section called "Passing the Store" in http://redux.js.org/docs/basics/UsageWithReact.html for more info
EditCard.contextTypes = {
  store: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    draft: state.draftCard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateDraft: (field, value) => dispatch(CardActionCreators.updateDraft(field, value)),
    updateCard: (card, draftCard) => dispatch(CardActionCreators.updateCard(card, draftCard)),
    createDraft: (card) => dispatch(CardActionCreators.createDraft(card)),
  }
}

export default connect(  
  mapStateToProps,
  mapDispatchToProps
)(EditCard)