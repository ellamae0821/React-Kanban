import {LOAD_CARDS,
        ADD_CARD} from '../actions/cards';


const initialState = [];

const cardList = (state = initialState, action) => {
    switch (action.type){
      case LOAD_CARDS:
/*        console.log(action.cards)*/
        return [ ...action.cards ]


      case ADD_CARD:
      console.log('JOHN')
     /* const arrayOfNewCard = [ ...state, action.card ]
        console.log(arrayOfNewCard);
        return arrayOfNewCard;*/
        return [ ...state, action.card ]
        /*return Object.assign({}, state, {
          bookList: [...state.bookList, action.book]})*/

/*upon editing card splice the cards afterwards, at sequelize options returning = true, plain=true*/

      default:
        return state;

  }
}

export default cardList;