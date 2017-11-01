export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

export const loadCards =(cards) => {
  console.log('ACTION: loadcards is invoked')
  console.log('ACTION:', cards);
  return {
    type: LOAD_CARDS,
    cards: cards
  }
}

//ACTION SHOULD ONLY RETURN A PAYLOAD & NOT IMPORT ANYTHING(from reducers)
export const addCard = (card) => {
  return {
    type: ADD_CARD,
    card: card
  }
}
//then import it to reducers & make another case