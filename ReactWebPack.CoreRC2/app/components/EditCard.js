import React, {Component} from 'react';
import CardForm from './CardForm';
import CardStore from '../stores/CardStore';
import DraftStore from '../stores/DraftStore';
import {Container} from 'flux/utils';
import CardActionCreators from '../actions/CardActionCreators';
import { connect } from 'react-redux';
import { getCard } from '../cardUtils'

import 'babel-polyfill';

class EditCard extends Component {
  
  handleChange(field, value) {
    this.props.dispatch(CardActionCreators.updateDraft(field, value));
  }

  handleSubmit(e) {
    e.preventDefault();
    const cards = this.context.store.getState().cards;
    this.props.dispatch(CardActionCreators.updateCard(
      getCard(cards, this.props.params.card_id),this. state.draft
    ));

    this.props.history.pushState(null, '/');
  }

  handleClose(e) {
    this.props.history.pushState(null, '/');
  }

  componentDidMount() {
    const cards = this.context.store.getState().cards;
    setTimeout(() => {
      this.props.dispatch(CardActionCreators.createDraft(
        getCard(cards, this.props.params.card_id)))
    }, 0); 
  }

  render(){
    return  (
      <CardForm draftCard={this.state.draft}
        buttonLabel="Edit Card"
        handleChange={this.handleChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this) }
        handleClose={this.handleClose.bind(this)}  />
    )    
  } 
}

EditCard.contextTypes = {
  store: React.PropTypes.object
}

EditCard.getStores = () => ([DraftStore]);
EditCard.calculateState = (prevState) => ({
  draft: DraftStore.getState()
});

export default connect()(Container.create(EditCard))