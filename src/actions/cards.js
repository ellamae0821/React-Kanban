import { getCardsXHR, addCardsXHR } from '../lib/cards.db.js';
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

export const loadCards =(cards) => {
  return function(dispatch){
    return getCardsXHR().then ((cards) => {
      console.log('DATA FROM LIB - CARDS:',cards)
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      });
    });
  }
}


//ACTION SHOULD ONLY RETURN A PAYLOAD & NOT IMPORT ANYTHING(from reducers)
export const addCard = (card) => {
  //console.log('1 FE - ACTIONS - CARD', card)
  return function(dispatch){

    return addCardsXHR(card).then ((card) => {

      dispatch({
        type: ADD_CARD,
        card: card
      });
    });
  }
}
//then import it to reducers & make another case
/*
export const deleteCard = (card) => {
  return function(dispatch){
    return deleteCardXHR().then ((card) => {
      dispatch({
        type: DELETE_CARD,
        card: card
      });
    });
  }
}*/

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


