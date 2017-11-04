import React, {Component} from 'react';
import UserItem from '../../components/UserItem'


const UserList = ({users}) => {
  return (
    <div className="eachUser">
      <select>
      {
        users.map((user, idx) => {
          return (
            <UserItem
              key={idx}
              name={user.name}
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