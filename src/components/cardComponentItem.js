import React from 'react';

const CardComponentItem = ({id, title, priority, status,  created_by, assigned_to}) => {
  return (

  <div className='eachCard'>
    <ol className='eachCardoL'>
      <b>Card-Id:</b>{id} <br/>
      <b>Title:</b>{title} <br/>
      <b>Created By:</b>{created_by} <br/>
      <b>Assigned To:</b>{assigned_to} <br/>
      <b>Priority:</b> {priority.name} <br/>
      <b>Status:</b> {status.name} <br/>
    </ol>
  </div>
  )
}




export default CardComponentItem;