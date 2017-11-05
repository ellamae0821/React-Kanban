import React, {Component} from 'react';
import UserItem from '../../components/UserItem';


const UserList = ({users, changeAssigned}) => {
  return (
    <div className="eachUser">
      <select onChange={changeAssigned}>
      {
        users.map((user) => {
          return (
            <UserItem
              id={user.id}
              name={user.name}
              key={user.id}
            />
          )
        })
      }
      </select>
    </div>

  )
}


/*CardList.defaultProps = {
  cards: []
}*/

export default UserList;