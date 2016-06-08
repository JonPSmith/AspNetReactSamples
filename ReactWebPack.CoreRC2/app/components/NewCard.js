import React,{Component} from 'react';
import CardForm from './CardForm';
import CardActionCreators from '../actions/CardActionCreators';
import { connect } from 'react-redux';

class NewCard extends Component{

  handleChange(field, value){
    this.props.updateDraft(field, value);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addCard(this.props.draft);
    this.props.history.pushState(null,'/');
  }

  handleClose(e){
    this.props.history.pushState(null,'/');
  }

  componentDidMount(){
    setTimeout(()=>this.props.createDraft(), 0)
  }


  render(){
    return (
      <CardForm draftCard={this.props.draft}
                buttonLabel="Create Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />
    );
  }
}

function mapStoreToProps(storeState) {
  return {
    draft: storeState.draftCard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateDraft: (field, value) => dispatch(CardActionCreators.updateDraft(field, value)),
    addCard: (card) => dispatch(CardActionCreators.addCard(card)),
    createDraft: (card) => dispatch(CardActionCreators.createDraft(card)),
  }
}

export default connect(  
  mapStoreToProps,
  mapDispatchToProps)
(NewCard)
