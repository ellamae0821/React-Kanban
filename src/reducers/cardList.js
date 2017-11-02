import {LOAD_CARDS} from '../actions/cards';
//import {ADD_BOOK} from '../actions/books';

const initialState = [];

const cardList = (state = initialState, action) => {
    console.log('REDUCERS CARD LISTING')
    switch (action.type){
      case LOAD_CARDS:
        console.log(action.cards)
        return [ ...action.cards ]

/*
      case ADD_BOOK:
        return [ ...state, action.book ]*/
        /*return Object.assign({}, state, {
          bookList: [...state.bookList, action.book]})*/


      default:
        return state

  }
}

export default cardList;