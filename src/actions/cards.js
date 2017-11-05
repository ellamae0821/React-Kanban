import { getCardsXHR, addCardsXHR, removeCardXHR} from '../lib/cards.db.js';
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DEL_CARD = 'DEL_CARD';

export const loadCards =(cards) => {
  return function(dispatch){
    return getCardsXHR().then ((cards) => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      });
    });
  }
}


//ACTION SHOULD ONLY RETURN A PAYLOAD & NOT IMPORT ANYTHING(from reducers)
export const addCard = (card) => {
  return function(dispatch){
    return addCardsXHR(card).then( newCard => {
      console.log("WHAT IS CARD", newCard)
      dispatch({
        type: ADD_CARD,
        card: newCard
      });
    });
  }
}


//then import it to reducers & make another case

export const deleteCard = (card) => {
  return function(dispatch){
    return removeCardXHR(card).then ((card) => {
      dispatch({
        type: DEL_CARD,
        card: card
      });
    });
  }
}

/*
export const editCard = (card) => {
  return function(dispatch){
    return editCardXHR().then ((card) => {
      dispatch({
        type: EDIT_CARD,
        card: card
      });
    });
  }
}*/


