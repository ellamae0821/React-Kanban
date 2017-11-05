import React from 'react';
import ReactDOM from 'react-dom';
import './containers/App/styles.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import thunk from 'redux-thunk';
import reducers from './reducers';
import NewCardForm from './containers/NewCardForm';
import CardItemView from './containers/CardItemView';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/new-card">Add New Card</Link>
        <Route exact path="/" component={App}/>
        <Route path="/new-card" component={NewCardForm}/>
        <Route path="/:id" component={CardItemView}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();