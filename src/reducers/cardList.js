import {LOAD_CARDS,
        ADD_CARD} from '../actions/cards';


const initialState = [];

const cardList = (state = initialState, action) => {
    switch (action.type){
      case LOAD_CARDS:
        console.log(action.cards)
        return [ ...action.cards ]


      case ADD_CARD:
        return [ ...state, action.card ]
        /*return Object.assign({}, state, {
          bookList: [...state.bookList, action.book]})*/


      default:
        return state;

  }
}

export default cardList;