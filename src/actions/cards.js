import { getCardsXHR } from '../lib/cards.db.js';
export const LOAD_CARDS = 'LOAD_CARDS';
//export const ADD_CARD = 'ADD_CARD';

export const loadCards =(cards) => {
  return function(dispatch){
    return getCardsXHR().then ((cards) => {
      console.log(cards)
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      });
    });
  }
}


//ACTION SHOULD ONLY RETURN A PAYLOAD & NOT IMPORT ANYTHING(from reducers)
/*export const addCard = (card) => {
  return {
    type: ADD_CARD,
    card: card
  }
}*/
//then import it to reducers & make another case