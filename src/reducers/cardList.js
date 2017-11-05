import {LOAD_CARDS,
        ADD_CARD,
        DEL_CARD} from '../actions/cards';


const initialState = [];

const cardList = (state = initialState, action) => {
    switch (action.type){
      case LOAD_CARDS:
        return [ ...action.cards ]


      case ADD_CARD:
        return [ ...state, action.card ]

/*upon editing card splice the cards afterwards, at sequelize options returning = true, plain=true*/

      case DEL_CARD:
        return [ ...state, action.card ]

      default:
        return state;

  }
}

export default cardList;