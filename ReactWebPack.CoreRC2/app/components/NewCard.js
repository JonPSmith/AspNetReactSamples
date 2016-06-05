import React,{Component} from 'react';
import CardForm from './CardForm';
import DraftStore from '../stores/DraftStore';
import {Container} from 'flux/utils';
import CardActionCreators from '../actions/CardActionCreators';
import { connect } from 'react-redux';

class NewCard extends Component{

  handleChange(field, value){
    this.props.dispatch(CardActionCreators.updateDraft(field, value));
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch(CardActionCreators.addCard(this.state.draft));
    this.props.history.pushState(null,'/');
  }

  handleClose(e){
    this.props.history.pushState(null,'/');
  }

  componentDidMount(){
    setTimeout(()=>this.props.dispatch(CardActionCreators.createDraft(), 0))
  }


  render(){
    return (
      <CardForm draftCard={this.state.draft}
                buttonLabel="Create Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />
    );
  }
}

NewCard.getStores = () => ([DraftStore]);
NewCard.calculateState = (prevState) => ({
  draft: DraftStore.getState()
});

export default connect()(Container.create(NewCard))
