import { getUsersXHR } from '../lib/users.db.js';
export const LOAD_USERS = 'LOAD_USERS';

export const loadUsers =(users) => {
  return function(dispatch){
    return getUsersXHR().then ((users) => {
      dispatch({
        type: LOAD_USERS,
        users: users
      });
    });
  }
}
