import React, { Component } from 'react';
import CardComponentAppTitle from '../../components/CardComponentAppTitle'
import cardComponentItem from '../../components/cardComponentItem'

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

  }

  render() {
    return (
      <div className="App">
        <div>
          <CardComponentAppTitle title={this.state.appTitle} />

        </div>
      </div>
    );
  }
}

export default App;
