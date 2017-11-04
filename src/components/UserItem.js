import React from 'react';

const UserItem = ({id, name}) => {
  return (

      <option value={id}> {name} </option>

  )
}




export default UserItem;