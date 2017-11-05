import React, {Component} from 'react';
import { getSingleCardsXHR, removeCardXHR } from '../../lib/cards.db.js';


class CardItemView extends Component {
  constructor(props){
    super(props)

    this.state={
      card:{}
    }
  this.removeCard = this.removeCard.bind(this)
  }

  componentDidMount(){
    getSingleCardsXHR(this.props.match.params.id)
    .then (card => {
      this.setState({
        card: card
      });
    });
  }

  removeCard (){
    removeCardXHR(this.state.card.id)
    .then (card => {
      console.log('REMOVING CARD', this.props.history)
      this.props.history.push("/")
    })
    .catch( (err) =>{
      console.log(err)
    })
  }

  render() {

    return (
      <div>
        {/*Task #: {this.state.card.id}*/}
        Title: {this.state.card.title}<br/>
        {this.state.card.id}

        {/*Created By: {this.state.card.creator.name}
        Assigned To: {this.state.card.assignee.name}
        Priority: {this.state.card.priority.name}
        Status: {this.state.card.status.name}*/}
        <button onClick={this.removeCard}>Delete</button>
      </div>
    )
  }
}

/*const mapDispatchtoProps = (dispatch)=> {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    },*/


export default CardItemView;