import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadCards} from '../../actions/cards';
import {loadUsers} from '../../actions/users';
import CardComponentAppTitle from '../../components/CardComponentAppTitle';
import CardComponentItem from '../../components/CardComponentItem';
import UserItem from '../../components/UserItem';
import CardList from '../CardList';
import UserList from '../UserList';
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
    this.props.loadUsers()
  }





  render() {
    console.log(this.props.cards)
    return (
      <div className="App">

        <div>
          <CardComponentAppTitle title={this.state.appTitle} />
          <NewCardForm/><hr/>
          <CardList cards={this.props.cards}/>

        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    cards: state.cardList,
    users: state.userList
  }
}
//dispatch actions to reducers, then to store & vice versa, should only be functions
const mapDispatchToProps = (dispatch) => {
  return{
    loadCards: () => {
      dispatch(loadCards())
    },
    loadUsers: () => {
      dispatch(loadUsers())
    }

  }
}
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
