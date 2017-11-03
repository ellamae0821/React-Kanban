import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadCards} from '../../actions/cards';
import CardComponentAppTitle from '../../components/CardComponentAppTitle';
import CardComponentItem from '../../components/CardComponentItem';
import CardList from '../CardList';
import NewCardForm from '../NewCardForm';

import './styles.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      cards: [],
      appTitle:'Kanban'
    }
  }

  componentDidMount(){
    this.props.loadCards()
  }





  render() {
    console.log(this.props.cards)
    return (
      <div className="App">
        <div>
          <CardComponentAppTitle title={this.state.appTitle} />
          <CardList cards={this.props.cards}/>
          <NewCardForm/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    cards: state.cardList
  }
}
//dispatch actions to reducers, then to store & vice versa, should only be functions
const mapDispatchToProps = (dispatch) => {
  return{
    loadCards: () => {
      dispatch(loadCards())
    }
  }
}
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
