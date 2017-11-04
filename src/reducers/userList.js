import {LOAD_USERS} from '../actions/users';

const initialState = [];

const userList = (state = initialState, action) => {
    switch (action.type){
      case LOAD_USERS:
        /*console.log(action.users)*/
        return [ ...action.users ]

/*
      case ADD_CARD:
        return [ ...state, action.card ]
        */


      default:
        return state;

  }
}

export default userList;